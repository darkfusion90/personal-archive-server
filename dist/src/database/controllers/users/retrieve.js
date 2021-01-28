"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByUsername = exports.getUser = void 0;
const UserModel_1 = __importDefault(require("../../models/UserModel"));
const projection_1 = __importDefault(require("./projection"));
function getUser(userId) {
    return UserModel_1.default.findById(userId, projection_1.default).exec();
}
exports.getUser = getUser;
function getUserByUsername(username, includePassword = false) {
    const customProjection = {
        password: includePassword ? 1 : 0
    };
    return UserModel_1.default.findOne({ username }, customProjection).exec();
}
exports.getUserByUsername = getUserByUsername;
exports.default = { getUser, getUserByUsername };
