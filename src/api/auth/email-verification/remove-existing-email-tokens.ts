import { RequestHandler } from 'express'

import { removeAllEmailTokensForUser } from '../../../database/controllers/email-verification-tokens'
import { sessionUserId } from '../../../utils'


export const removeExistingEmailTokens: RequestHandler = async (req, _, next) => {
    const userId = sessionUserId(req) as string

    try {
        await removeAllEmailTokensForUser(userId)
        next()
    } catch (err) {
        next(err)
    }
}