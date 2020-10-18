"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_router_1 = __importDefault(require("./user-router"));
const auth_router_1 = __importDefault(require("./auth-router"));
const posts_router_1 = __importDefault(require("./posts-router"));
function default_1(app) {
    user_router_1.default(app);
    auth_router_1.default(app);
    posts_router_1.default(app);
}
exports.default = default_1;
