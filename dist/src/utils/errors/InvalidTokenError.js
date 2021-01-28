"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidTokenError = void 0;
class InvalidTokenError extends Error {
    constructor(reason) {
        super(`Invalid Token. Reason: ${reason}`);
        this.reason = reason;
    }
}
exports.InvalidTokenError = InvalidTokenError;
