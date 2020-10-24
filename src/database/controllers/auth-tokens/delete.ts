import { AuthTokenModel } from "../../models/AuthTokenModel"

export const removeAllTokensForUser = (userId: string) => {
    return AuthTokenModel.deleteMany({ user: userId }).exec()
}