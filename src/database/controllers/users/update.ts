import UserModel from '../../models/UserModel'

export const updateUserPassword = (userId: string, password: string) => {
    return UserModel.findByIdAndUpdate(userId, { password }, { new: true }).exec()
}