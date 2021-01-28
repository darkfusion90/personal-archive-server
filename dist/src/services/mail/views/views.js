"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deviceVerification = exports.emailConfirmation = void 0;
const path_1 = __importDefault(require("path"));
const kMailViewsRoot = path_1.default.join(__dirname);
exports.emailConfirmation = path_1.default.join(kMailViewsRoot, 'email-confirmation.ejs');
exports.deviceVerification = path_1.default.join(kMailViewsRoot, 'device-verification.ejs');
