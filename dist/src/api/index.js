"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.posts = exports.auth = void 0;
const auth_1 = __importDefault(require("./auth"));
exports.auth = auth_1.default;
const posts_1 = __importDefault(require("./posts"));
exports.posts = posts_1.default;
exports.default = { auth: auth_1.default, posts: posts_1.default };
