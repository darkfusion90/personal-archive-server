import { AuthDetailModel } from "../../models/AuthDetailModel"

export const markMultifactorAuthForUser = (
    userId: string,
    multiFactorAuthEnabled: boolean
) => AuthDetailModel.findOneAndUpdate(
    { user: userId },
    { multiFactorAuthEnabled }
).exec()


export const markEmailVerifiedForUser = (userId: string) =>
    AuthDetailModel.findOneAndUpdate(
        { user: userId },
        { emailVerified: true }
).exec()