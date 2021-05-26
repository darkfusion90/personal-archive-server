import { TrustedDeviceModel, IDevice } from "../../models/TrustedDeviceModel";
import { encryptDevice } from "./utils";

export const isDeviceTrusted = async (userId: string, device: IDevice) => {
  const trustedDeviceOfUser = await getFromTrustedDevice(userId, device);
  console.log({ trustedDeviceOfUser });
  return trustedDeviceOfUser !== null;
};

export const getFromTrustedDevice = async (userId: string, device: IDevice) => {
  const deviceStr = await encryptDevice(device);
  console.log({ deviceStr });
  return await TrustedDeviceModel.findOne({
    user: userId,
    devices: deviceStr,
  }).exec();
};
