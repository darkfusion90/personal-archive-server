"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const registerValidator = [
    express_validator_1.body(['username', 'password', 'email'], 'incomplete credentials').notEmpty().isString(),
    express_validator_1.body('email', 'must be a valid email').isEmail()
];
exports.default = registerValidator;
