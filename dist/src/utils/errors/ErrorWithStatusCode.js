"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorWithStatusCode = void 0;
class ErrorWithStatusCode extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
    }
}
exports.ErrorWithStatusCode = ErrorWithStatusCode;
