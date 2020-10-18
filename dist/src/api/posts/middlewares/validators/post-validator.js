"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validators_1 = require("../../../validators");
const postValidator = [
    express_validator_1.param('userId').custom(validators_1.isObjectId),
    express_validator_1.body('title', 'required and must be a string').notEmpty().isString(),
    express_validator_1.body(['link', 'comment', 'if provided, must be a string']).optional({ nullable: true }).isString(),
    express_validator_1.body('tags', 'if provided, must be an array').optional().isArray(),
    express_validator_1.check('link', 'must be a url with valid protocol [http, https, ftp]')
        .optional({ nullable: true })
        .isURL({ require_protocol: true })
];
exports.default = postValidator;
