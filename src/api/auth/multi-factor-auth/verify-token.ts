import { RequestHandler } from 'express'

import { sessionUserId } from '../../../utils/session-user'
import {
    verifyAuthToken,
    AuthTokenVerificationFailedError
} from '../../../database/controllers/device-verification-tokens'
import { addUserTrustedDevice } from '../../../database/controllers/trusted-devices'
import ensureMultifactorAuthEnabled from './middlewares/ensure-multifactor-enabled'
import { ensureLoggedIn } from '../middlewares'

interface IVerifyTokenRequestParams {
    authToken: string
}

type IVerifyTokenRequestHandler = RequestHandler<IVerifyTokenRequestParams>

const verifyTokenHandler: IVerifyTokenRequestHandler = async (req, res, next) => {
    const userId = sessionUserId(req) as string

    try {
        const authToken = await verifyAuthToken(req.params.authToken, userId)
        const userTrustedDevices = await addUserTrustedDevice(userId, authToken.deviceToVerify)
        if (!userTrustedDevices) {
            // TODO: Handle this elegantly
            throw new Error('no user trusted device')
        } else {
            await authToken.deleteOne()
            res.json({ message: 'device verified' })
        }
    } catch (err) {
        // TODO: Migrate all error handlers to one place (express error handler)
        if (err instanceof AuthTokenVerificationFailedError) {
            res.status(401).json({ message: 'invalid-auth-token', reason: err.reason })
        } else {
            next(err)
        }
    }
}

export default [
    // TODO: Add ensureEmailVerified
    ensureLoggedIn({ checkMultifactor: false }),
    ensureMultifactorAuthEnabled,
    verifyTokenHandler
]