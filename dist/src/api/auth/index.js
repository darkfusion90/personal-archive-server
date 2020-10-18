"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_1 = __importDefault(require("./login"));
const logout_1 = __importDefault(require("./logout"));
const register_1 = __importDefault(require("./register"));
const status_1 = __importDefault(require("./status"));
const middlewares_1 = __importDefault(require("./middlewares"));
exports.default = { login: login_1.default, logout: logout_1.default, status: status_1.default, register: register_1.default, middlewares: middlewares_1.default };
