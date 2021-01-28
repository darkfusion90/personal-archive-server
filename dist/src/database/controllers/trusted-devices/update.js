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
exports.addUserTrustedDevice = void 0;
const TrustedDeviceModel_1 = require("../../models/TrustedDeviceModel");
const retrieve_1 = require("./retrieve");
exports.addUserTrustedDevice = (userId, { userAgent, ipAddress }) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { user: userId };
    // To prevent pushing same device again. Mongoose doesn't allow compound indexing
    // array of sub-documents so we need to manually ensure uniqueness
    // TODO: Maybe use lodash.pick(...)
    const alreadyTrustedDevice = yield retrieve_1.isDeviceTrusted(userId, { userAgent, ipAddress });
    if (alreadyTrustedDevice) {
        // Make sure you return truthy value to tell the caller that
        // device was verified (it doesn't matter if it already was, response is same)
        return true;
    }
    const update = {
        $push: {
            devices: { userAgent, ipAddress }
        }
    };
    const options = { new: true, upsert: true, setDefaultsOnInsert: true };
    return TrustedDeviceModel_1.TrustedDeviceModel.findOneAndUpdate(query, update, options).exec();
});
