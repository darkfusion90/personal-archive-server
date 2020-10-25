import { EmailVerificationTokenModel } from "../../models/EmailVerificationTokenModel"
import { removeAllTokensForUser } from '../tokens'

export const removeAllEmailTokensForUser = (userId: string) => {
    return removeAllTokensForUser(userId, EmailVerificationTokenModel)
}