import { RequestHandler } from 'express'

import { sessionUserId } from '../../../utils/session-user'
import {
    verifyAuthToken,
    AuthTokenVerificationFailedError
} from '../../../database/controllers/auth-tokens'

interface IVerifyTokenRequestParams {
    authToken: string
}

type IVerifyTokenRequestHandler = RequestHandler<IVerifyTokenRequestParams>

const verifyTokenHandler: IVerifyTokenRequestHandler = async (req, res, next) => {
    const userId = sessionUserId(req)
    if (!userId) {
        return res.status(500).json({ message: 'session missing' })
    }

    try {
        const authToken = await verifyAuthToken(req.params.authToken, userId)
        res.json({ authToken })
    } catch (err) {
        // TODO: Migrate all error handlers to one place (express error handler)
        if (err instanceof AuthTokenVerificationFailedError) {
            res.status(401).json({ message: 'invalid-auth-token', reason: err.reason })
        } else {
            next(err)
        }
    }
}

export default verifyTokenHandler