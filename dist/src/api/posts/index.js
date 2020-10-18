"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_1 = __importDefault(require("./get"));
const post_1 = __importDefault(require("./post"));
const delete_1 = __importDefault(require("./delete"));
const middlewares_1 = __importDefault(require("./middlewares"));
exports.default = { get: get_1.default, post: post_1.default, _delete: delete_1.default, middlewares: middlewares_1.default };
