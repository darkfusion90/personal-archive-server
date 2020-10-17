"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const register_validator_1 = __importDefault(require("./register-validator"));
const validators_1 = require("../../validators");
exports.default = {
    validators: {
        register: validators_1.createValidation(register_validator_1.default)
    }
};
