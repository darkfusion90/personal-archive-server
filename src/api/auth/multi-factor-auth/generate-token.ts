import { RequestHandler } from 'express'

import { sessionUserId } from '../../../utils/session-user'
import { createAuthToken } from '../../../database/controllers/auth-tokens'
import { getUserDeviceInfo } from './utils'

const generateToken: RequestHandler = async (req, res) => {
    const userId = sessionUserId(req)
    if (!userId) {
        return res.status(500).json({ message: 'session missing' })
    }

    const authToken = await createAuthToken(userId, getUserDeviceInfo(req))
    res.json({ authToken })
}

export default generateToken