"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const utils_1 = require("./utils");
const login = (req, res, next) => {
    passport_1.default.authenticate('local', (err, user, info) => {
        if (err) {
            throw err;
        }
        if (!user) {
            return res.status(401).json(info);
        }
        utils_1.performLogin(user)(req, res, next);
    })(req, res, next);
};
exports.default = login;
