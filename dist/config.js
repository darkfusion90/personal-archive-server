"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    mongoUrl: process.env.MONGO_URL,
    sessionSecret: process.env.SESSION_SECRET
};
exports.default = config;
