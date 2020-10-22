import { TrustedDeviceModel } from '../../models/TrustedDeviceModel'

export const removeAllTrustedDevicesForUser = (userId: string) => {
    return TrustedDeviceModel.findOneAndDelete({ user: userId }).exec()
}