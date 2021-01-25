import { RequestHandler } from 'express'

import asyncHandler from '../../async-handler'
import { checkIfEmailAlreadyVerified } from './check-if-email-already-verified'
import { sessionUser } from '../../../utils'
import { createEmailVerificationToken } from '../../../database/controllers/email-verification-tokens'
import { ensureLoggedIn } from '../middlewares'
import { sendEmailConfirmationMail } from '../../../services/mail'
import { removeExistingEmailTokens } from './remove-existing-email-tokens'
import { IUserDocument } from '../../../database/models/UserModel'

const generateEmailToken: RequestHandler = async (req, res) => {
    const user = sessionUser(req) as IUserDocument
    const token = await createEmailVerificationToken(user.id)

    /*await sendEmailConfirmationMail(
        user,
        `/just-a-link/${token.token}`
    )*/

    console.log({ token })
    res.json({ token })
}

export default [
    ensureLoggedIn({ checkMultifactor: false }),
    checkIfEmailAlreadyVerified,
    removeExistingEmailTokens,
    asyncHandler(generateEmailToken)
]