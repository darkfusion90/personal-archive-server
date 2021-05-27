"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashDevice = void 0;
const crypto_1 = __importDefault(require("crypto"));
const deviceToString = ({ ipAddress, userAgent }) => `${ipAddress} ${userAgent}`;
exports.hashDevice = (device) => {
    const strDevice = deviceToString(device);
    const hash = crypto_1.default.createHash("sha512").update(strDevice).digest("base64");
    return hash;
};
