import { IDevice } from "../../models/TrustedDeviceModel";
import crypto from "crypto";

const deviceToString = ({ ipAddress, userAgent }: IDevice) =>
  `${ipAddress} ${userAgent}`;

export const hashDevice = (device: IDevice) => {
  const strDevice = deviceToString(device);
  const hash = crypto.createHash("sha512").update(strDevice).digest("base64");
  
  return hash;
};
