import _ from 'lodash'
import { markEmailVerifiedForUser, markMultifactorAuthForUser } from '../auth-details'
import UserModel from '../../models/UserModel'

type UserEditableField = 'username' | 'email'
export type UserEditableFieldMap = Record<UserEditableField, string>

export const updateUserPassword = (userId: string, password: string) => {
    return UserModel.findByIdAndUpdate(userId, { password }, { new: true }).exec()
}

export const updateUserDetails = async (userId: string, toUpdate: Partial<UserEditableFieldMap>) => {
    // removes null/undefined paths
    const updateQuery = _.omitBy(toUpdate, _.isNil) as Partial<UserEditableFieldMap>

    if (updateQuery.email) {
        await Promise.all([
            markEmailVerifiedForUser(userId, false),
            markMultifactorAuthForUser(userId, false)
        ])
    }

    return UserModel.findByIdAndUpdate(userId, updateQuery, { new: true })
}