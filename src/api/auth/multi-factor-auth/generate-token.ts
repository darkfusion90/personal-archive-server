import { RequestHandler } from 'express'

import { sessionUser, getAbsoluteUrl, simpleParseUseragent } from '../../../utils'
import { createAuthToken } from '../../../database/controllers/auth-tokens'
import { getUserDeviceInfo } from './utils'
import { sendDeviceVerificationMail } from '../../../services/mail'
import {
    ensureMultifactorAuthEnabled,
    removeExistingAuthTokens
} from './middlewares'
import { ensureLoggedIn } from '../middlewares'
import { IUserDocument } from '../../../database/models/UserModel'

const generateToken: RequestHandler = async (req, res) => {
    const user = sessionUser(req) as IUserDocument

    const userDeviceInfo = getUserDeviceInfo(req)
    const authToken = await createAuthToken(user.id, userDeviceInfo)

    await sendDeviceVerificationMail(user, {
        // Have a DEVICE_VERIFY_CALLBACK in process.env
        verificationLink: getAbsoluteUrl(`/api/auth/multifactor/verify/${authToken.token}`),
        deviceInfo: simpleParseUseragent(userDeviceInfo.userAgent),
        ipAddress: userDeviceInfo.ipAddress
    })

    res.json({ message: 'token generated' })
}

export default [
    // TODO: Add ensureEmailVerified
    ensureLoggedIn({ checkMultifactor: false }),
    ensureMultifactorAuthEnabled,
    removeExistingAuthTokens,
    generateToken
]