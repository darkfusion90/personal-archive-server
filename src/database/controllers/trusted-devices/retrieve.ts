import { TrustedDeviceModel, IDevice } from "../../models/TrustedDeviceModel";
import { hashDevice } from "./utils";

export type IDeviceOrHash = string | IDevice;

export const resolveDeviceString = (device: IDeviceOrHash) => {
  if (typeof device !== "string") {
    return hashDevice(device);
  } else {
    return device;
  }
};

export const isDeviceTrusted = async (
  userId: string,
  device: IDeviceOrHash
) => {
  const trustedDeviceOfUser = await getFromTrustedDevice(userId, device);
  console.log({ trustedDeviceOfUser });
  return trustedDeviceOfUser !== null;
};

export const getFromTrustedDevice = async (
  userId: string,
  device: IDeviceOrHash
) => {
  const deviceStr = resolveDeviceString(device);

  console.log({ deviceStr });
  return await TrustedDeviceModel.findOne({
    user: userId,
    devices: deviceStr,
  }).exec();
};
