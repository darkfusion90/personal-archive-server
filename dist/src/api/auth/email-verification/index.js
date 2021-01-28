"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generate_email_token_1 = __importDefault(require("./generate-email-token"));
const verify_email_1 = __importDefault(require("./verify-email"));
exports.default = { generate: generate_email_token_1.default, verify: verify_email_1.default };
