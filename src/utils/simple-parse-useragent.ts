import { Request } from "express";
import { parse } from 'express-useragent'

export default function simpleParseUseragent(userAgentOrReq: Request<any, any, any, any> | string) {
    const parseUseragent = () => {
        if (typeof userAgentOrReq === 'string') {
            return parse(userAgentOrReq)
        }

        const headersUa = userAgentOrReq.headers['user-agent']
        return headersUa ? parse(headersUa) : undefined
    }

    const ua = parseUseragent()
    if (!ua) {
        return 'Unknown Device'
    }

    const { browser, os, platform, version } = ua
    return `${browser} Version ${version} on ${os}(${platform})`
}