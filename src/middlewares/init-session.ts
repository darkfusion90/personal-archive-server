import session from 'express-session'
import store from 'connect-mongo'
import { Application } from 'express'
import mongoose from 'mongoose'
import config from '../config'

export default function (app: Application) {
    const MongoStore = store(session)
    app.use(session({
        store: new MongoStore({
            mongooseConnection: mongoose.connection
        }),
        // Removing <as string> gives error TS2322: Type 'string | undefined' is not assignable to type 'string | string[]'. 
        // TODO: Resolve
        secret: config.sessionSecret,
        resave: false,
        saveUninitialized: true,
        cookie: {
            httpOnly: false
        }
    }))
}