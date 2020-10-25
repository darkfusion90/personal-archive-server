import { ITokenDocument } from '../models/TokenModel'
import { InvalidTokenError } from '../../utils/errors'
import mongoose from 'mongoose'

export const checkTokenValidity = <T extends ITokenDocument>(token: T | null) => {
    // If found, token might be invalid if it has expired; check that
    // If not found, token given by user is invalid
    if (!token) {
        return Promise.reject(new InvalidTokenError('token-not-found'))
    } else if (token.hasExpired()) {
        return Promise.reject(new InvalidTokenError('token-expired'))
    }else{
        return Promise.resolve(token)
    }
}

export const removeAllTokensForUser = (
    user: string,
    Model: mongoose.Model<ITokenDocument>
) => Model.deleteMany({ user })