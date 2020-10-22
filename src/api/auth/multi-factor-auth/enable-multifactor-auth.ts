import { RequestHandler } from 'express'

import { markMultifactorAuthForUser } from '../../../database/controllers/auth-details'
import { addUserTrustedDevice } from '../../../database/controllers/trusted-devices'

import { sessionUserId } from '../../../utils/session-user'
import { getUserDeviceInfo } from './utils'
import { performMultifactorLogin } from '../utils'

const enableMultifactorAuth: RequestHandler = async (req, res, next) => {
    const userId = sessionUserId(req)
    if (!userId) {
        return res.status(500).json({ message: 'session missing' })
    }

    const currentUserDevice = getUserDeviceInfo(req)
    try {
        await Promise.all([
            markMultifactorAuthForUser(userId, true),
            addUserTrustedDevice(userId, currentUserDevice),
            performMultifactorLogin(req)
        ])

        res.json({ message: 'multifactor-auth-enabled' })
    } catch (err) {
        next(err)
    }
}

export default enableMultifactorAuth