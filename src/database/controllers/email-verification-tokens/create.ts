import { EmailVerificationTokenModel } from '../../models/EmailVerificationTokenModel'

export const createEmailVerificationToken = (userId: string) => {
    const emailVerificationToken = new EmailVerificationTokenModel({ user: userId })
    return emailVerificationToken.save()
}