"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCurrentDeviceTrusted = exports.getUserDeviceInfo = void 0;
const trusted_devices_1 = require("../../../database/controllers/trusted-devices");
const session_user_1 = require("../../../utils/session-user");
exports.getUserDeviceInfo = (req) => {
    return {
        userAgent: req.headers['user-agent'] || 'unknown',
        ipAddress: req.ip
    };
};
exports.isCurrentDeviceTrusted = (req, userId) => {
    const _userId = session_user_1.sessionUserId(req) || userId;
    if (!_userId) {
        return Promise.reject('Session missing in req object OR userId not provided');
    }
    return trusted_devices_1.isDeviceTrusted(_userId, exports.getUserDeviceInfo(req));
};
