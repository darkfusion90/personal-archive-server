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
exports.removeExistingDeviceVerificationTokens = void 0;
const device_verification_tokens_1 = require("../../../../database/controllers/device-verification-tokens");
const session_user_1 = require("../../../../utils/session-user");
exports.removeExistingDeviceVerificationTokens = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = session_user_1.sessionUserId(req);
    try {
        yield device_verification_tokens_1.removeAllTokensForUser(userId);
        next();
    }
    catch (err) {
        next(err);
    }
});
exports.default = exports.removeExistingDeviceVerificationTokens;
