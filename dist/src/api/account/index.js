"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureUserInSession = void 0;
const utils_1 = require("../../utils");
__exportStar(require("./put"), exports);
exports.ensureUserInSession = (req, res, next) => {
    if (!utils_1.sessionUserId(req)) {
        next(new utils_1.ErrorWithStatusCode(401, 'Please login/register to access this route'));
    }
    else {
        next();
    }
};
