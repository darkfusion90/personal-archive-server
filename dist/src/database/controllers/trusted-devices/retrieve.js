"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFromTrustedDevice = exports.isDeviceTrusted = exports.resolveDeviceString = void 0;
const TrustedDeviceModel_1 = require("../../models/TrustedDeviceModel");
const utils_1 = require("./utils");
exports.resolveDeviceString = (device) => {
    if (typeof device !== "string") {
        return utils_1.hashDevice(device);
    }
    else {
        return device;
    }
};
exports.isDeviceTrusted = (userId, device) => __awaiter(void 0, void 0, void 0, function* () {
    const trustedDeviceOfUser = yield exports.getFromTrustedDevice(userId, device);
    console.log({ trustedDeviceOfUser });
    return trustedDeviceOfUser !== null;
});
exports.getFromTrustedDevice = (userId, device) => __awaiter(void 0, void 0, void 0, function* () {
    const deviceStr = exports.resolveDeviceString(device);
    console.log({ deviceStr });
    return yield TrustedDeviceModel_1.TrustedDeviceModel.findOne({
        user: userId,
        devices: deviceStr,
    }).exec();
});
