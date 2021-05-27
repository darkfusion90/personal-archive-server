"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceVerificationTokenModel = exports.DeviceVerificationTokenSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const TokenModel_1 = __importStar(require("./TokenModel"));
exports.DeviceVerificationTokenSchema = new mongoose_1.default.Schema({
    deviceToVerify: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
    },
}, { discriminatorKey: TokenModel_1.discriminatorKey });
exports.DeviceVerificationTokenModel = TokenModel_1.default.discriminator("DeviceVerificationToken", exports.DeviceVerificationTokenSchema, "device-verification");
exports.default = exports.DeviceVerificationTokenModel;
