import mongoose from "mongoose";

import { IDevice } from "./TrustedDeviceModel";
import TokenModel, { ITokenDocument, discriminatorKey } from "./TokenModel";

export interface IDeviceVerificationTokenDocument extends ITokenDocument {
  deviceToVerify: string;
}

export const DeviceVerificationTokenSchema = new mongoose.Schema<
  IDeviceVerificationTokenDocument
>(
  {
    deviceToVerify: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
  },
  { discriminatorKey }
);

export const DeviceVerificationTokenModel = TokenModel.discriminator<
  IDeviceVerificationTokenDocument
>(
  "DeviceVerificationToken",
  DeviceVerificationTokenSchema,
  "device-verification"
);

export default DeviceVerificationTokenModel;
