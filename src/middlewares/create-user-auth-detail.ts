import { RequestHandler } from "express";

import { sessionUserId } from '../utils/session-user'
import { createAuthDetailIfMissing } from '../database/controllers/auth-details'

const createUserAuthDetailMiddleware: RequestHandler = async (req, _, next) => {
    const userId = sessionUserId(req)
    // No user in session. So don't bother updating auth details
    if (!userId) {
        console.log('No user in session. Not updating auth details')
        return next()
    }

    try {
        const authDetails = await createAuthDetailIfMissing(userId)
        console.log(`Auth Details of ${userId}: `, authDetails)
    } catch (err) {
        return next(err)
    } finally {
        next()
    }
}

export default createUserAuthDetailMiddleware