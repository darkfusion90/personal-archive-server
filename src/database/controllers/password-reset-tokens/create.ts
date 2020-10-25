import { PasswordResetTokenModel } from '../../models/PasswordResetTokenModel'

export const createPasswordResetToken = (user: string) => {
    const passwordResetToken = new PasswordResetTokenModel({ user })
    return passwordResetToken.save()
}