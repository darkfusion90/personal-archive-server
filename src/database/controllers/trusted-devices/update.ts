import mongoose from "mongoose";
import {
  TrustedDeviceModel,
  IDevice,
  ITrustedDeviceDocument,
} from "../../models/TrustedDeviceModel";
import {
  isDeviceTrusted,
  IDeviceOrHash,
  resolveDeviceString,
} from "./retrieve";

export const addUserTrustedDevice = async (
  userId: string,
  device: IDeviceOrHash
) => {
  const query = { user: userId };

  // To prevent pushing same device again. Mongoose doesn't allow compound indexing
  // array of sub-documents so we need to manually ensure uniqueness
  // TODO: Maybe use lodash.pick(...)
  const alreadyTrustedDevice = await isDeviceTrusted(userId, device);
  if (alreadyTrustedDevice) {
    // Make sure you return truthy value to tell the caller that
    // device was verified (it doesn't matter if it already was, response is same)
    return true;
  }

  const deviceStr = resolveDeviceString(device)

  const update: mongoose.UpdateQuery<ITrustedDeviceDocument> = {
    $push: {
      devices: deviceStr,
    },
  };

  const options = { new: true, upsert: true, setDefaultsOnInsert: true };
  return TrustedDeviceModel.findOneAndUpdate(query, update, options).exec();
};
