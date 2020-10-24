import { RequestHandler, Request } from 'express'
import { getUserAuthStatus } from '../utils'
import { NotLoggedInError } from '../../../utils'

interface IEnsureLoggedInOpts {
    checkMultifactor: boolean
}

const kDefaultOpts: IEnsureLoggedInOpts = {
    checkMultifactor: true
}

const isLoggedIn = async (opts: IEnsureLoggedInOpts, req: Request<any, any, any, any>) => {
    const { loggedIn, singleFactorLoggedIn } = await getUserAuthStatus(req)

    if (!opts.checkMultifactor) {
        return singleFactorLoggedIn
    }

    return loggedIn
}

export const ensureLoggedIn = (opts: IEnsureLoggedInOpts = kDefaultOpts): RequestHandler => async (req, res, next) => {
    if (await isLoggedIn(opts, req).catch(next)) {
        next()
    } else {
        next(new NotLoggedInError())
    }
}
