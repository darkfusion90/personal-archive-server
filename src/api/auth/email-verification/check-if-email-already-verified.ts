import { RequestHandler } from 'express'

import { hasUserVerifiedEmail } from '../../../database/controllers/auth-details'
import { sessionUserId } from '../../../utils'
import asyncRequestHandler from '../../async-handler'

export const checkIfEmailAlreadyVerified: RequestHandler = async (req, res, next) => {
    const userId = sessionUserId(req) as string

    if (await hasUserVerifiedEmail(userId)) {
        return res.message('Your email has already been verified')
    }

    next()
}

export default asyncRequestHandler(checkIfEmailAlreadyVerified)