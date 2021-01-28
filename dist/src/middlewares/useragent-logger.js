"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const useragentLogger = (req, _, next) => {
    // Will log only at the end of the request
    req.once('end', () => {
        const { browser, version, platform, os } = req.useragent || {};
        console.log(`${browser} Version ${version} on ${platform} (${os}) at ${req.ip}`);
    });
    next();
};
exports.default = useragentLogger;
