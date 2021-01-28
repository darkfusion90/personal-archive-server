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
const trusted_devices_1 = require("../../../database/controllers/trusted-devices");
const auth_details_1 = require("../../../database/controllers/auth-details");
const session_user_1 = require("../../../utils/session-user");
const disableMultifactorAuth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = session_user_1.sessionUserId(req);
    if (!userId) {
        return res.status(500).json({ message: 'session not found' });
    }
    yield Promise.all([
        auth_details_1.markMultifactorAuthForUser(userId, false),
        trusted_devices_1.removeAllTrustedDevicesForUser(userId)
    ]);
    res.json({ message: 'multifactor-auth-disabled' });
});
exports.default = disableMultifactorAuth;
