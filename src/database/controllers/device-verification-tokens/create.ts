import DeviceVerificationTokenModel from "../../models/DeviceVerificationTokenModel";
import { IDevice } from "../../models/TrustedDeviceModel";
import { encryptDevice } from "../trusted-devices/utils";

export const createAuthToken = async (userId: string, device: IDevice) => {
  const deviceToVerify = await encryptDevice(device);
  const deviceVerificationToken = new DeviceVerificationTokenModel({
    user: userId,
    deviceToVerify,
  });
  return deviceVerificationToken.save();
};
