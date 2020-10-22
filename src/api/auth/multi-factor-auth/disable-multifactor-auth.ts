import { RequestHandler } from 'express'

import {
    removeAllTrustedDevicesForUser
} from '../../../database/controllers/trusted-devices'
import {
    markMultifactorAuthForUser
} from '../../../database/controllers/auth-details'
import { sessionUserId } from '../../../utils/session-user'

const disableMultifactorAuth: RequestHandler = async (req, res) => {
    const userId = sessionUserId(req)
    if (!userId) {
        return res.status(500).json({ message: 'session not found' })
    }

    await Promise.all([
        markMultifactorAuthForUser(userId, false),
        removeAllTrustedDevicesForUser(userId)
    ])
    res.json({ message: 'multifactor-auth-disabled' })
}

export default disableMultifactorAuth