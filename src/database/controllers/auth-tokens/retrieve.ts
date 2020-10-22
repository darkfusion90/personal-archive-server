import AuthTokenModel from '../../models/AuthTokenModel'

type IAuthTokenVerificationFailedReason = 'token-not-found' | 'token-expired'

export class AuthTokenVerificationFailedError extends Error {
    reason: IAuthTokenVerificationFailedReason
    constructor(reason: IAuthTokenVerificationFailedReason) {
        super(`Auth Failed. Reason: ${reason}`)
        this.reason = reason
    }
}

export const verifyAuthToken = async (token: string, userId: string) => {
    const authToken = await AuthTokenModel.findOne({ token, user: userId }).exec()
    // If found, authToken might be invalid if it has expired; check that
    // If not found, authToken given by user is invalid
    if (!authToken) {
        return Promise.reject(new AuthTokenVerificationFailedError('token-not-found'))
    } else if (authToken.hasExpired()) {
        return Promise.reject(new AuthTokenVerificationFailedError('token-expired'))
    }

    return Promise.resolve(authToken)
}