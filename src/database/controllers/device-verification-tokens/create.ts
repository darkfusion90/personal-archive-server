import DeviceVerificationTokenModel from '../../models/DeviceVerificationTokenModel'
import { IDevice } from '../../models/TrustedDeviceModel'

export const createAuthToken = (userId: string, deviceToVerify: IDevice) => {
    const deviceVerificationToken = new DeviceVerificationTokenModel({ user: userId, deviceToVerify })
    return deviceVerificationToken.save()
}