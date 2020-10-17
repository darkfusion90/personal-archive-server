import { RequestHandler } from 'express'
import passport from 'passport'
import { performLogin } from './utils'

const login: RequestHandler = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            throw err
        }
        if (!user) {
            return res.status(401).json(info)
        }

        performLogin(user)(req, res, next)
    })(req, res, next)
}

export default login