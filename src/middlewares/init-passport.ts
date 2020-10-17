import { Application } from 'express'
import passport from 'passport'
import { IUserDocument } from '../database/models/UserModel'
import { getUser } from '../database/controllers/users'
import authStrategy from './auth'

export default function (app: Application) {
    passport.use(authStrategy)

    passport.serializeUser<IUserDocument, string>((user, done) => done(null, user.id))
    passport.deserializeUser<IUserDocument, string>(async (id, done) => {
        const user = await getUser(id).catch(done)
        console.log(`Deserialize ${id}: `, user)
        // Why passport why :(
        done(null, user ? user : undefined)
    })
    
    app.use(passport.initialize())
    app.use(passport.session())
}