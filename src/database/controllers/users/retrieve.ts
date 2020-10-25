import UserModel from "../../models/UserModel";
import projection from "./projection";

export function getUser(userId: string) {
    return UserModel.findById(userId, projection).exec()
}

export function getUserByUsername(username: string, includePassword: boolean = false) {
    const customProjection = {
        password: includePassword ? 1 : 0
    }

    return UserModel.findOne({ username }, customProjection).exec()
}

export default { getUser, getUserByUsername }