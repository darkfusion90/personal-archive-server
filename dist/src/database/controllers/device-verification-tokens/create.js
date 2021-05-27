"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAuthToken = void 0;
const DeviceVerificationTokenModel_1 = __importDefault(require("../../models/DeviceVerificationTokenModel"));
const utils_1 = require("../trusted-devices/utils");
exports.createAuthToken = (userId, device) => {
    const deviceToVerify = utils_1.hashDevice(device);
    const deviceVerificationToken = new DeviceVerificationTokenModel_1.default({
        user: userId,
        deviceToVerify,
    });
    return deviceVerificationToken.save();
};
