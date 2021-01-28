"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generate_token_1 = __importDefault(require("./generate-token"));
const reset_password_1 = __importDefault(require("./reset-password"));
const check_token_validity_1 = __importDefault(require("./check-token-validity"));
exports.default = { generate: generate_token_1.default, resetPassword: reset_password_1.default, check: check_token_validity_1.default };
