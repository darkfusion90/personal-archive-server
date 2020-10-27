import { RequestHandler } from 'express'
import passport from 'passport'

import { getUserAuthStatus, performMultifactorLogin, performSimpleLogin } from './utils'
import { isCurrentDeviceTrusted, getUserDeviceInfo } from './multi-factor-auth/utils'

const login: RequestHandler = (req, res, next) => {
    passport.authenticate('local', async (err, user, info) => {
        console.log('Login Handler')
        if (err) {
            console.log('Error in login handler: ', err)
            throw err
        }
        if (!user) {
            console.log('User not found for login credentials. Login Failed')
            return res.status(401).json(info)
        }

        // Performing simple passport login here
        //      If MultiFactor auth disabled:
        //          login success, respond with user details
        //      else:
        //          If device trusted: perform multifactor login. Hence completely loggedIn
        //          If device not trusted: respond with 401 Unauthorized. Hence, partially loggedIn
        //                                 loggedIn. The partial login is required to allow access
        //                                 to token generation/verification api endpoints
        //                                 because we get user (for whom to generate token) from the session itself
        const authenticatedUser = await performSimpleLogin(user, req)

        const { multifactorAuthEnabled } = await getUserAuthStatus(req)
        if (multifactorAuthEnabled) {
            if (await isCurrentDeviceTrusted(req)) {
                console.log('MultifactorAuth: Current device trusted. will login')
                await performMultifactorLogin(req)
            } else {
                console.log('MultifactorAuth: Current device not trusted. Will respond login failed')
                return res.status(401).json({
                    message: 'device-not-trusted',
                    device: getUserDeviceInfo(req)
                })
            }
        }

        if (req.session) {
            // One Week
            req.session.cookie.maxAge = 604800000
        }

        console.log('Authentication process completed. Will respond with: ', authenticatedUser)
        res.json(authenticatedUser)
    })(req, res, next)
}

export default login