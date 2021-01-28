"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generate_token_1 = __importDefault(require("./generate-token"));
const verify_token_1 = __importDefault(require("./verify-token"));
const enable_multifactor_auth_1 = __importDefault(require("./enable-multifactor-auth"));
const disable_multifactor_auth_1 = __importDefault(require("./disable-multifactor-auth"));
const middlewares_1 = __importDefault(require("./middlewares"));
exports.default = {
    generate: generate_token_1.default,
    verify: verify_token_1.default,
    enable: enable_multifactor_auth_1.default,
    disable: disable_multifactor_auth_1.default,
    middlewares: middlewares_1.default
};
