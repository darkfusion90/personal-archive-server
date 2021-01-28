"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotLoggedInError = void 0;
const ErrorWithStatusCode_1 = require("./ErrorWithStatusCode");
class NotLoggedInError extends ErrorWithStatusCode_1.ErrorWithStatusCode {
    constructor() {
        super(401, 'You need to be logged in to perform this operation');
    }
}
exports.NotLoggedInError = NotLoggedInError;
