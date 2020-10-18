"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const throttle = (durationMillis = 0) => (_, __, next) => {
    setTimeout(() => {
        next();
    }, durationMillis);
};
exports.default = throttle;
