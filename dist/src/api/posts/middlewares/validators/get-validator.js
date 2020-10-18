"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validators_1 = require("../../../validators");
const getValidator = [
    express_validator_1.param('postId').custom(validators_1.isObjectId),
    express_validator_1.query('sort', 'must be `title` or `date`').optional().matches(/title|date/),
    express_validator_1.query('order', 'must be `asc` or `desc`').optional().matches(/asc|desc/),
    express_validator_1.query('query').optional().isString(),
    express_validator_1.query('tags', 'must be comma separated value(s). Example: `<url>/?tags=hello,world,this,is,tags`')
        .optional()
        .matches(/(.+?)(?:,|$)/)
];
exports.default = getValidator;
