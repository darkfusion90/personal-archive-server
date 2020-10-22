import AuthTokenModel from '../../models/AuthTokenModel'

export const createAuthToken = (userId: string) => {
    const authToken = new AuthTokenModel({ user: userId })
    return authToken.save()
}