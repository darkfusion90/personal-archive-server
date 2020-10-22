import { RequestHandler } from 'express'

import { hasUserVerifiedEmail } from '../../../../database/controllers/auth-details'
import { sessionUserId } from '../../../../utils/session-user'

const ensureEmailVerified: RequestHandler = async (req, res, next) => {
    const userId = sessionUserId(req)
    if (!userId) {
        return res.status(401).json({ message: 'missing session' })
    }

    if (await hasUserVerifiedEmail(userId)) {
        next()
    } else {
        // TODO: Throw error here (EmailNotVerifiedError) and handle in global error handler
        return res.status(401).json({ message: 'email not verified' })
    }
}

export default ensureEmailVerified