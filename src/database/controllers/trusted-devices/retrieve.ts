import { TrustedDeviceModel, IDevice } from '../../models/TrustedDeviceModel'

export const isDeviceTrusted = async (userId: string, device: IDevice) => {
    const trustedDevices = await getFromTrustedDevice(userId, device)
    return trustedDevices !== null
}

export const getFromTrustedDevice = async (
    userId: string,
    { userAgent, ipAddress }: IDevice
) => {
    return await TrustedDeviceModel.findOne({
        user: userId,
        devices: {
            $elemMatch: { userAgent, ipAddress }
        }
    }).exec()
}