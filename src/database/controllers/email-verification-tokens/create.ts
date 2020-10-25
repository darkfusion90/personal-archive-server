import { EmailVerificationTokenModel } from '../../models/EmailVerificationTokenModel'

export const createEmailVerificationToken = (userId: string) => {
    const deviceVerificationToken = new EmailVerificationTokenModel({ user: userId })
    return deviceVerificationToken.save()
}