import { AuthDetailModel } from "../../models/AuthDetailModel"

export const markMultifactorAuthForUser = (
    userId: string,
    multiFactorAuthEnabled: boolean
) => AuthDetailModel.findOneAndUpdate(
    { user: userId },
    { multiFactorAuthEnabled }
).exec()