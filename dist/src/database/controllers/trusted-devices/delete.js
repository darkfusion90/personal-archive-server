"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAllTrustedDevicesForUser = void 0;
const TrustedDeviceModel_1 = require("../../models/TrustedDeviceModel");
exports.removeAllTrustedDevicesForUser = (userId) => {
    return TrustedDeviceModel_1.TrustedDeviceModel.findOneAndDelete({ user: userId }).exec();
};
