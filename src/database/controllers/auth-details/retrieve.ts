import AuthDetailModel from "../../models/AuthDetailModel"

export const getUserAuthDetails = (userId: string) => {
    return AuthDetailModel.findOne({ user: userId }).exec()
}

export const hasUserEnabledMultifactorAuth = async (userId: string): Promise<boolean> => {
    const authDetail = await getUserAuthDetails(userId)
    if (!authDetail) {
        return false
    }

    return authDetail.multiFactorAuthEnabled
}

export const hasUserVerifiedEmail = async (userId: string): Promise<boolean> => {
    const authDetail = await getUserAuthDetails(userId)
    if (!authDetail) {
        return false
    }

    return authDetail.emailVerified
}