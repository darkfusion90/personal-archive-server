import { DeviceVerificationTokenModel } from "../../models/DeviceVerificationTokenModel"

export const removeAllTokensForUser = (userId: string) => {
    return DeviceVerificationTokenModel.deleteMany({ user: userId }).exec()
}