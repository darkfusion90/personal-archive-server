import { PasswordResetTokenModel } from '../../models/PasswordResetTokenModel'
import { checkTokenValidity } from '../tokens'

export const verifyPasswordResetToken = async (token: string) => {
    const passwordResetToken = await PasswordResetTokenModel.findOne({ token }).exec()

    return checkTokenValidity(passwordResetToken)
}