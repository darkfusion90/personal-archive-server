"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTrustedDevicesIfMissing = void 0;
const TrustedDeviceModel_1 = require("../../models/TrustedDeviceModel");
exports.createTrustedDevicesIfMissing = (userId) => {
    const userDetail = { user: userId };
    const options = { new: true, upsert: true, setDefaultsOnInsert: true };
    return TrustedDeviceModel_1.TrustedDeviceModel.findOneAndUpdate(userDetail, userDetail, options).exec();
};
