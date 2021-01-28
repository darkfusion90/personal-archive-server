"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../../database/controllers/users");
const utils_1 = require("./utils");
const register = (req, res, next) => {
    const { username, email, password } = req.body;
    users_1.createUser({ username, email, password })
        .then((user) => {
        utils_1.performLoginRequestHandler(user)(req, res, next);
    })
        .catch(next);
};
exports.default = register;
