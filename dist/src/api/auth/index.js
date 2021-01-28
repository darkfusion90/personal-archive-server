"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_1 = __importDefault(require("./login"));
const logout_1 = __importDefault(require("./logout"));
const register_1 = __importDefault(require("./register"));
const status_1 = __importDefault(require("./status"));
const middlewares_1 = __importDefault(require("./middlewares"));
const multi_factor_auth_1 = __importDefault(require("./multi-factor-auth"));
const email_verification_1 = __importDefault(require("./email-verification"));
const password_reset_1 = __importDefault(require("./password-reset"));
exports.default = {
    login: login_1.default,
    logout: logout_1.default,
    status: status_1.default,
    register: register_1.default,
    middlewares: middlewares_1.default,
    multiFactorAuth: multi_factor_auth_1.default,
    emailVerification: email_verification_1.default,
    passwordReset: password_reset_1.default
};
__exportStar(require("./multi-factor-auth"), exports);
