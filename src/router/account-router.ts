import { Application } from 'express'

import * as account from '../api/account'

export default function (app: Application) {
    app.put('/api/account', account.ensureUserInSession, account.putValidator, account.put)
}

