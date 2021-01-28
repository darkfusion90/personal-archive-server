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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const session_user_1 = require("../../../utils/session-user");
const device_verification_tokens_1 = require("../../../database/controllers/device-verification-tokens");
const trusted_devices_1 = require("../../../database/controllers/trusted-devices");
const ensure_multifactor_enabled_1 = __importDefault(require("./middlewares/ensure-multifactor-enabled"));
const middlewares_1 = require("../middlewares");
const verifyTokenHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = session_user_1.sessionUserId(req);
    try {
        const authToken = yield device_verification_tokens_1.verifyAuthToken(req.params.authToken, userId);
        const userTrustedDevices = yield trusted_devices_1.addUserTrustedDevice(userId, authToken.deviceToVerify);
        if (!userTrustedDevices) {
            // TODO: Handle this elegantly
            throw new Error('no user trusted device');
        }
        else {
            yield authToken.deleteOne();
            res.json({ message: 'device verified' });
        }
    }
    catch (err) {
        // TODO: Migrate all error handlers to one place (express error handler)
        if (err instanceof device_verification_tokens_1.AuthTokenVerificationFailedError) {
            res.status(401).json({ message: 'invalid-auth-token', reason: err.reason });
        }
        else {
            next(err);
        }
    }
});
exports.default = [
    // TODO: Add ensureEmailVerified
    middlewares_1.ensureLoggedIn({ checkMultifactor: false }),
    ensure_multifactor_enabled_1.default,
    verifyTokenHandler
];
