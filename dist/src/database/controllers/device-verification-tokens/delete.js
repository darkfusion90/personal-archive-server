"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAllTokensForUser = void 0;
const DeviceVerificationTokenModel_1 = require("../../models/DeviceVerificationTokenModel");
exports.removeAllTokensForUser = (userId) => {
    return DeviceVerificationTokenModel_1.DeviceVerificationTokenModel.deleteMany({ user: userId }).exec();
};
