import { RequestHandler } from 'express'

import { removeAllTokensForUser } from '../../../../database/controllers/auth-tokens'
import { sessionUserId } from '../../../../utils/session-user'

export const removeExistingAuthTokens: RequestHandler = async (req, res, next) => {
    const userId = sessionUserId(req) as string

    try {
        await removeAllTokensForUser(userId)
        next()
    } catch (err) {
        next(err)
    }
}

export default removeExistingAuthTokens