"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asyncRequestHandler = (handler) => (req, res, next) => {
    Promise.resolve(handler(req, res, next)).catch(next);
};
exports.default = asyncRequestHandler;
