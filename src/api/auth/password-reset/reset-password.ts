import { RequestHandler } from 'express'

import asyncHandler from '../../async-handler'
import { verifyPasswordResetToken } from '../../../database/controllers/password-reset-tokens'
import { updateUserPassword } from '../../../database/controllers/users'
import { passwordResetValidator } from './validators'

type IGeneratePasswordResetTokenHandler = RequestHandler<
    { token: string },
    any,
    { password: string }
>

const verifyPasswordResetTokenHandler: IGeneratePasswordResetTokenHandler = async (req, res) => {
    const resetToken = await verifyPasswordResetToken(req.params.token)
    console.log({ resetToken })
    const updatedUser = await updateUserPassword(resetToken.user, req.body.password)
    console.log({ updatedUser })
    if (!updatedUser) {
        return res.message('User not found', 404)
    }

    await resetToken.deleteOne()
    res.message('password-reset-done')
}

export default [
    passwordResetValidator,
    asyncHandler(verifyPasswordResetTokenHandler)
]