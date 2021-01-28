"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAllTokensForUser = exports.checkTokenValidity = void 0;
const errors_1 = require("../../utils/errors");
exports.checkTokenValidity = (token) => {
    // If found, token might be invalid if it has expired; check that
    // If not found, token given by user is invalid
    if (!token) {
        return Promise.reject(new errors_1.InvalidTokenError('token-not-found'));
    }
    else if (token.hasExpired()) {
        return Promise.reject(new errors_1.InvalidTokenError('token-expired'));
    }
    else {
        return Promise.resolve(token);
    }
};
exports.removeAllTokensForUser = (user, Model) => Model.deleteMany({ user });
