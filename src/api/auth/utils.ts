import { RequestHandler, Request } from "express"

import { IUserDocument } from "../../database/models/UserModel"
import { IAuthDetailDocument } from "../../database/models/AuthDetailModel"
import { sessionUser } from '../../utils'
import { getUserAuthDetails } from '../../database/controllers/auth-details';

export const performLoginRequestHandler = (user: IUserDocument): RequestHandler => async (req, res, next) => {
    try {
        const authenticatedUser = await performSimpleLogin(user, req)
        res.json(authenticatedUser)
    } catch (err) {
        next(err)
    }
}

export const performSimpleLogin = (user: IUserDocument, req: AnyRequest) => {
    return new Promise<{ username: string, email: string }>((resolve, reject) => {
        req.login(user, err => {
            if (err) {
                reject(err)
            }
            resolve(user.filterSensitiveData())
        })
    })
}

export const performMultifactorLogin = async (req: AnyRequest) => {
    return new Promise((resolve, reject) => {
        if (!req.session) {
            return reject('Session missing from req object')
        }

        req.session.multifactorAuthenticated = true
        req.session.save((err) => {
            if (err) {
                console.log('Error saving session on multifactor login: ')
                return reject(err)
            }

            console.log('After session save on multifactor login: ', req.session)
            resolve()
        })
    })
}

export const performMultifactorLogout = async (req: AnyRequest) => {
    return new Promise((resolve, reject) => {
        if (!req.session) {
            return reject('Session missing from req object')
        }

        req.session.multifactorAuthenticated = false
        req.session.save((err) => {
            if (err) {
                console.log('Error saving session on multifactor logout: ')
                return reject(err)
            }

            console.log('After session save on multifactor logout: ', req.session)
            resolve()
        })
    })
}

export interface IUserAuthStatus {
    user: IUserDocument | null
    loggedIn?: boolean
    singleFactorLoggedIn?: boolean
    emailVerified?: IAuthDetailDocument['emailVerified']
    multifactorAuthEnabled?: IAuthDetailDocument['multiFactorAuthEnabled']
}

type AnyRequest = Request<any, any, any, any>

export const getUserAuthStatus = async (req: AnyRequest): Promise<IUserAuthStatus> => {
    const basicLoggedIn = req.isAuthenticated()
    if (!basicLoggedIn) {
        console.log('Not logged in at all')
        return { user: null, loggedIn: false }
    }

    const user = sessionUser(req)
    if (!user) {
        console.log('No user in session')
        return { user, loggedIn: false }
    }

    const authDetails = await getUserAuthDetails(user.id)
    if (!authDetails) {
        console.log('Auth details not available; no need to check multifactor')
        // Auth details not available; no need to check multifactor
        return {
            user,
            loggedIn: true,
            singleFactorLoggedIn: true
        }
    }

    const multifactorAuthEnabled = authDetails.multiFactorAuthEnabled
    if (!multifactorAuthEnabled) {
        console.log('Multifactor auth not enabled. Will not perform multifactor checks')
        return {
            user,
            loggedIn: true,
            singleFactorLoggedIn: true,
            multifactorAuthEnabled,
            emailVerified: authDetails.emailVerified
        }
    }

    const loggedIn = Boolean(basicLoggedIn && req.session?.multifactorAuthenticated)
    return {
        user,
        loggedIn,
        singleFactorLoggedIn: true,
        multifactorAuthEnabled,
        emailVerified: authDetails.emailVerified
    }
}
