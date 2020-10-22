import { RequestHandler } from 'express'

import { hasUserEnabledMultifactorAuth } from '../../../../database/controllers/auth-details'
import { sessionUserId } from '../../../../utils/session-user'

const ensureMultifactorAuthEnabled: RequestHandler = async (req, res, next) => {
    const userId = sessionUserId(req)
    if (!userId) {
        return res.status(401).json({ message: 'missing session' })
    }

    if (await hasUserEnabledMultifactorAuth(userId)) {
        next()
    } else {
        // TODO: Throw error here (MultifactorNotEnabledError) and handle in global error handler
        return res.status(401).json({ message: 'multifactor auth required' })
    }
}

export default ensureMultifactorAuthEnabled