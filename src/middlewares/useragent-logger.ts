import { RequestHandler } from 'express'

const useragentLogger: RequestHandler = (req, _, next) => {
    // Will log only at the end of the request
    req.once('end', () => {
        const { browser, version, platform, os } = req.useragent || {}
        console.log(`${browser} Version ${version} on ${platform} (${os}) at ${req.ip}`)
    })

    next()
}

export default useragentLogger