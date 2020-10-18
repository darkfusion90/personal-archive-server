"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validators_1 = require("../../../validators");
const deleteValidator = [express_validator_1.param('postId').custom(validators_1.isObjectId)];
exports.default = deleteValidator;
