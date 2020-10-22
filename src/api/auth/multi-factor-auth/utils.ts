import { IDevice } from '../../../database/models/TrustedDeviceModel'
import { Request } from 'express'

export const getUserDeviceInfo = (req: Request<any, any, any, any>): IDevice => {
    return {
        userAgent: req.headers['user-agent'] || 'unknown',
        ipAddress: req.ip
    }
}