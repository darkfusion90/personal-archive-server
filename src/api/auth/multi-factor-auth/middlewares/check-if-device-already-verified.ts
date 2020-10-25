import { RequestHandler } from 'express'

import { isCurrentDeviceTrusted } from '../utils'

export const checkIfDeviceAlreadyVerified: RequestHandler = async (req, res, next) => {
    if (await isCurrentDeviceTrusted(req).catch(next)) {
        return res.message('This device has already been verified')
    }

    next()
}

export default checkIfDeviceAlreadyVerified