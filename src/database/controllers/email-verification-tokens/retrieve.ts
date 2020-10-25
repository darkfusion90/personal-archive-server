import { EmailVerificationTokenModel, IEmailVerificationTokenDocument } from '../../models/EmailVerificationTokenModel'
import { checkTokenValidity } from '../tokens'

export const verifyEmailVerificationToken = async (token: string, user: string) => {
    const emailVerificationToken = await EmailVerificationTokenModel.findOne({ token, user }).exec()

    // Error will be thrown and will be handled by the api handler
    await checkTokenValidity(emailVerificationToken)
    return Promise.resolve(emailVerificationToken as IEmailVerificationTokenDocument)
}