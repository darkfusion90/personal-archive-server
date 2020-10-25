import { RequestHandler } from 'express'

import { removeAllTokensForUser } from '../../../../database/controllers/device-verification-tokens'
import { sessionUserId } from '../../../../utils/session-user'

export const removeExistingDeviceVerificationTokens: RequestHandler = async (req, res, next) => {
    const userId = sessionUserId(req) as string

    try {
        await removeAllTokensForUser(userId)
        next()
    } catch (err) {
        next(err)
    }
}

export default removeExistingDeviceVerificationTokens