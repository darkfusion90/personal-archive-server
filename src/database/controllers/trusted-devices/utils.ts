import { IDevice } from "../../models/TrustedDeviceModel";
import bcrypt from "bcrypt";
import crypto from "crypto";

const salt = 5;

const deviceToString = ({ ipAddress, userAgent }: IDevice) =>
  `${ipAddress} ${userAgent}`;

export const encryptDevice = async (device: IDevice) => {
  const strDevice = deviceToString(device);
  const hash = await bcrypt.hash(strDevice, "salty salt");
  console.log(
    "Hashed device ",
    device,
    " to create ",
    strDevice,
    " and finally: ",
    hash
  );
  return hash;
};
