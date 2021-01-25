import { RequestHandler } from 'express'

import { sessionUserId } from '../../../utils'
import { verifyEmailVerificationToken } from '../../../database/controllers/email-verification-tokens'
import asyncRequestHandler from '../../async-handler'
import { markEmailVerifiedForUser } from '../../../database/controllers/auth-details'
//import { sendEmailConfirmationMail } from '../../../services/mail'

type IVerifyEmailRequestHandler = RequestHandler<{ token: string }>

const verifyEmail: IVerifyEmailRequestHandler = async (req, res) => {
    const userId = sessionUserId(req) as string

    const token = await verifyEmailVerificationToken(req.params.token, userId)
    await markEmailVerifiedForUser(userId, true)
    await token.deleteOne()
    res.json({ token })
}

export default asyncRequestHandler(verifyEmail)