"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderDeviceVerification = exports.renderEmailConfirmation = void 0;
const ejs_1 = __importDefault(require("ejs"));
const views_1 = require("./views");
exports.renderEmailConfirmation = (username, confirmationLink) => ejs_1.default.renderFile(views_1.emailConfirmation, { username, confirmationLink });
exports.renderDeviceVerification = ({ username, deviceInfo, ipAddress, verificationLink }) => {
    return ejs_1.default.renderFile(views_1.deviceVerification, { username, deviceInfo, ipAddress, verificationLink });
};
