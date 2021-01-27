import { RequestHandler } from 'express'

import asyncHandler from '../../async-handler'
import { verifyPasswordResetToken } from '../../../database/controllers/password-reset-tokens'

type ICheckPasswordResetTokenHandler = RequestHandler<{ token: string }>

const checkTokenValidity: ICheckPasswordResetTokenHandler = async (req, res) => {
    await verifyPasswordResetToken(req.params.token)
    // If invalid, verifyPasswordResetToken throws appropriate error which is handled by the
    // global error handler [app.use((err, req, res, next)=>{})]
    // Hence, we don't need to worry about 'token-invalid' scenario inside this handler
    res.json({ tokenValid: true })
}

export default asyncHandler(checkTokenValidity)