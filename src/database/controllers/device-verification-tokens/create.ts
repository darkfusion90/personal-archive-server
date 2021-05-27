import DeviceVerificationTokenModel from "../../models/DeviceVerificationTokenModel";
import { IDevice } from "../../models/TrustedDeviceModel";
import { hashDevice } from "../trusted-devices/utils";

export const createAuthToken = (userId: string, device: IDevice) => {
  const deviceToVerify = hashDevice(device);
  const deviceVerificationToken = new DeviceVerificationTokenModel({
    user: userId,
    deviceToVerify,
  });
  return deviceVerificationToken.save();
};
