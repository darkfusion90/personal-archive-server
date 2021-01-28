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
const utils_1 = require("../../../utils");
const device_verification_tokens_1 = require("../../../database/controllers/device-verification-tokens");
const utils_2 = require("./utils");
const middlewares_1 = require("./middlewares");
const middlewares_2 = require("../middlewares");
const generateToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = utils_1.sessionUser(req);
    const userDeviceInfo = utils_2.getUserDeviceInfo(req);
    const authToken = yield device_verification_tokens_1.createAuthToken(user.id, userDeviceInfo);
    /* await sendDeviceVerificationMail(user, {
        // Have a DEVICE_VERIFY_CALLBACK in process.env
        verificationLink: getAbsoluteUrl(`/api/auth/multifactor/verify/${authToken.token}`),
        deviceInfo: simpleParseUseragent(userDeviceInfo.userAgent),
        ipAddress: userDeviceInfo.ipAddress
    })
 */
    res.json({ message: 'token generated', authToken });
});
exports.default = [
    // TODO: Add ensureEmailVerified
    middlewares_2.ensureLoggedIn({ checkMultifactor: false }),
    middlewares_1.ensureMultifactorAuthEnabled,
    middlewares_1.checkIfDeviceAlreadyVerified,
    middlewares_1.removeExistingDeviceVerificationTokens,
    generateToken
];
