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
        secret: config.sessionSecret,
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: false,
            maxAge: 3600000 // One Hour
        },
    }))
}