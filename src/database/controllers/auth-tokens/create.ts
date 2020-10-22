import AuthTokenModel from '../../models/AuthTokenModel'
import { IDevice } from '../../models/TrustedDeviceModel'

export const createAuthToken = (userId: string, deviceToVerify: IDevice) => {
    const authToken = new AuthTokenModel({ user: userId, deviceToVerify })
    return authToken.save()
}