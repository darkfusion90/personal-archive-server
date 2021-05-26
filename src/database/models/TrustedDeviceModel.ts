import mongoose from "mongoose";

const DataTypes = mongoose.Schema.Types;

export interface IDevice {
  userAgent: string;
  ipAddress: string;
}

export interface ITrustedDeviceDocument extends mongoose.Document {
  user: string;
  devices: string[];
}

const TrustedDeviceSchema = new mongoose.Schema<ITrustedDeviceDocument>({
  user: {
    type: DataTypes.ObjectId,
    ref: "User",
    unique: true,
    index: true,
    required: true,
  },
  devices: {
    type: [DataTypes.String],
    required: true,
    index: true,
    default: [],
  },
});

export const TrustedDeviceModel = mongoose.model<ITrustedDeviceDocument>(
  "TrustedDevice",
  TrustedDeviceSchema
);