import { RequestHandler } from 'express'

import asyncHandler from '../../async-handler'
import { createPasswordResetToken } from '../../../database/controllers/password-reset-tokens'
import { getUserByUsername } from '../../../database/controllers/users'
import { generateTokenValidator } from './validators'

type IGeneratePasswordResetTokenHandler = RequestHandler<any, any, { username: string }>

const generatePasswordResetToken: IGeneratePasswordResetTokenHandler = async (req, res) => {
    const user = await getUserByUsername(req.body.username)
    if (!user) {
        return res.status(404).json({ message: 'user-not-found' })
    }

    const token = await createPasswordResetToken(user.id)
    res.json({ token })
}

export default [
    generateTokenValidator,
    asyncHandler(generatePasswordResetToken)
]