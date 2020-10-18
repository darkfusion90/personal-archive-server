"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel_1 = __importDefault(require("../../models/UserModel"));
function createUser({ email, username, password }) {
    const user = new UserModel_1.default({ email, username, password });
    return user.save();
}
exports.default = { createUser };
