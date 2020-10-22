import { TrustedDeviceModel } from '../../models/TrustedDeviceModel'

export const createTrustedDevicesIfMissing = (userId: string) => {
    const userDetail = { user: userId }

    const options = { new: true, upsert: true, setDefaultsOnInsert: true }
    return TrustedDeviceModel.findOneAndUpdate(userDetail, userDetail, options).exec()
}