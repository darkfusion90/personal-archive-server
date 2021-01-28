"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_useragent_1 = require("express-useragent");
function simpleParseUseragent(userAgentOrReq) {
    const parseUseragent = () => {
        if (typeof userAgentOrReq === 'string') {
            return express_useragent_1.parse(userAgentOrReq);
        }
        const headersUa = userAgentOrReq.headers['user-agent'];
        return headersUa ? express_useragent_1.parse(headersUa) : undefined;
    };
    const ua = parseUseragent();
    if (!ua) {
        return 'Unknown Device';
    }
    const { browser, os, platform, version } = ua;
    return `${browser} Version ${version} on ${os}(${platform})`;
}
exports.default = simpleParseUseragent;
