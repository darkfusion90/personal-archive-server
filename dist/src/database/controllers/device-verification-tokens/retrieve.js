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
exports.verifyAuthToken = exports.AuthTokenVerificationFailedError = void 0;
const DeviceVerificationTokenModel_1 = __importDefault(require("../../models/DeviceVerificationTokenModel"));
class AuthTokenVerificationFailedError extends Error {
    constructor(reason) {
        super(`Auth Failed. Reason: ${reason}`);
        this.reason = reason;
    }
}
exports.AuthTokenVerificationFailedError = AuthTokenVerificationFailedError;
exports.verifyAuthToken = (token, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const deviceVerificationToken = yield DeviceVerificationTokenModel_1.default.findOne({ token, user: userId }).exec();
    // If found, authToken might be invalid if it has expired; check that
    // If not found, authToken given by user is invalid
    if (!deviceVerificationToken) {
        return Promise.reject(new AuthTokenVerificationFailedError('token-not-found'));
    }
    else if (deviceVerificationToken.hasExpired()) {
        return Promise.reject(new AuthTokenVerificationFailedError('token-expired'));
    }
    return Promise.resolve(deviceVerificationToken);
});
