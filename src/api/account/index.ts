import { RequestHandler } from 'express'
import { sessionUserId, ErrorWithStatusCode } from '../../utils'

export * from './put'

export const ensureUserInSession: RequestHandler = (req, res, next) => {
    if (!sessionUserId(req)) {
        next(new ErrorWithStatusCode(401, 'Please login/register to access this route'))
    } else {
        next()
    }
}