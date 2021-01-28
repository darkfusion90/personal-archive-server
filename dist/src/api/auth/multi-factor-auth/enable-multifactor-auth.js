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
const auth_details_1 = require("../../../database/controllers/auth-details");
const trusted_devices_1 = require("../../../database/controllers/trusted-devices");
const session_user_1 = require("../../../utils/session-user");
const utils_1 = require("./utils");
const utils_2 = require("../utils");
const enableMultifactorAuth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = session_user_1.sessionUserId(req);
    if (!userId) {
        return res.status(500).json({ message: 'session missing' });
    }
    const currentUserDevice = utils_1.getUserDeviceInfo(req);
    try {
        yield Promise.all([
            auth_details_1.markMultifactorAuthForUser(userId, true),
            trusted_devices_1.addUserTrustedDevice(userId, currentUserDevice),
            utils_2.performMultifactorLogin(req)
        ]);
        res.json({ message: 'multifactor-auth-enabled' });
    }
    catch (err) {
        next(err);
    }
});
exports.default = enableMultifactorAuth;
