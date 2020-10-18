"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_validator_1 = __importDefault(require("./get-validator"));
const post_validator_1 = __importDefault(require("./post-validator"));
const delete_validator_1 = __importDefault(require("./delete-validator"));
const validators_1 = require("../../../validators");
exports.default = {
    getValidator: validators_1.createValidation(get_validator_1.default),
    postValidator: validators_1.createValidation(post_validator_1.default),
    deleteValidator: validators_1.createValidation(delete_validator_1.default)
};
