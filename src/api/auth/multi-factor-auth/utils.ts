import { IDevice } from '../../../database/models/TrustedDeviceModel'
import { Request } from 'express'
import { isDeviceTrusted } from '../../../database/controllers/trusted-devices'
import { sessionUserId } from '../../../utils/session-user'

export const getUserDeviceInfo = (req: Request<any, any, any, any>): IDevice => {
    return {
        userAgent: req.headers['user-agent'] || 'unknown',
        ipAddress: req.ip
    }
}

export const isCurrentDeviceTrusted = (
    req: Request<any, any, any, any>,
    userId?: string
): Promise<boolean> => {
    const _userId = sessionUserId(req) || userId
    if (!_userId) {
        return Promise.reject('Session missing in req object OR userId not provided')
    }

    return isDeviceTrusted(_userId, getUserDeviceInfo(req))
}