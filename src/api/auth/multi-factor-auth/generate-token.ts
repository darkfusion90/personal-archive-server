import { RequestHandler } from 'express'

import { sessionUser, getAbsoluteUrl, simpleParseUseragent } from '../../../utils'
import { createAuthToken } from '../../../database/controllers/device-verification-tokens'
import { getUserDeviceInfo } from './utils'
import { sendDeviceVerificationMail } from '../../../services/mail'
import {
    ensureMultifactorAuthEnabled,
    checkIfDeviceAlreadyVerified,
    removeExistingDeviceVerificationTokens
} from './middlewares'
import { ensureLoggedIn } from '../middlewares'
import { IUserDocument } from '../../../database/models/UserModel'

const generateToken: RequestHandler = async (req, res) => {
    const user = sessionUser(req) as IUserDocument

    const userDeviceInfo = getUserDeviceInfo(req)
    const authToken = await createAuthToken(user.id, userDeviceInfo)

    /* await sendDeviceVerificationMail(user, {
        // Have a DEVICE_VERIFY_CALLBACK in process.env
        verificationLink: getAbsoluteUrl(`/api/auth/multifactor/verify/${authToken.token}`),
        deviceInfo: simpleParseUseragent(userDeviceInfo.userAgent),
        ipAddress: userDeviceInfo.ipAddress
    })
 */
    res.json({ message: 'token generated', authToken })
}

export default [
    // TODO: Add ensureEmailVerified
    ensureLoggedIn({ checkMultifactor: false }),
    ensureMultifactorAuthEnabled,
    checkIfDeviceAlreadyVerified,
    removeExistingDeviceVerificationTokens,
    generateToken
]