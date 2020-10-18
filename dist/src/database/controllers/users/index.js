"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByUsername = exports.getUser = exports.createUser = void 0;
const create_1 = __importDefault(require("./create"));
const retrieve_1 = __importDefault(require("./retrieve"));
exports.createUser = create_1.default.createUser;
exports.getUser = retrieve_1.default.getUser, exports.getUserByUsername = retrieve_1.default.getUserByUsername;
exports.default = Object.assign(Object.assign({}, create_1.default), retrieve_1.default);
