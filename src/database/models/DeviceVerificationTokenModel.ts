import mongoose from 'mongoose'

import { DeviceSchema, IDevice } from './TrustedDeviceModel'
import TokenModel, { ITokenDocument, discriminatorKey } from './TokenModel'

export interface IDeviceVerificationTokenDocument extends ITokenDocument {
    deviceToVerify: IDevice
}

export const DeviceVerificationTokenSchema = new mongoose.Schema<IDeviceVerificationTokenDocument>({
    deviceToVerify: {
        type: DeviceSchema,
        required: true
    }
}, { discriminatorKey })

export const DeviceVerificationTokenModel = TokenModel.discriminator<IDeviceVerificationTokenDocument>(
    'DeviceVerificationToken',
    DeviceVerificationTokenSchema,
    'device-verification'
)

export default DeviceVerificationTokenModel