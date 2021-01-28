"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordResetValidator = exports.generateTokenValidator = void 0;
const express_validator_1 = require("express-validator");
const validators_1 = require("../../validators");
exports.generateTokenValidator = validators_1.createValidation([
    express_validator_1.body('username', 'Username is required').notEmpty()
]);
exports.passwordResetValidator = validators_1.createValidation([
    express_validator_1.body('password', 'Password is required').notEmpty()
]);
