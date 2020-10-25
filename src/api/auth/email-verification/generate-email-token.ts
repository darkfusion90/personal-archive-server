import { RequestHandler } from 'express'

import asyncHandler from '../../async-handler'
import { checkIfEmailAlreadyVerified } from './check-if-email-already-verified'
import { sessionUserId } from '../../../utils'
import { createEmailVerificationToken } from '../../../database/controllers/email-verification-tokens'
import { ensureLoggedIn } from '../middlewares'
//import { sendEmailConfirmationMail } from '../../../services/mail'

const generateEmailToken: RequestHandler = async (req, res) => {
    const userId = sessionUserId(req) as string
    const token = await createEmailVerificationToken(userId)

    res.json({ token })
}

export default [
    ensureLoggedIn({ checkMultifactor: false }),
    checkIfEmailAlreadyVerified,
    asyncHandler(generateEmailToken)
]