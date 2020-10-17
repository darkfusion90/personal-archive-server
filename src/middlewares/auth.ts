import passportLocal from 'passport-local'
import { getUserByUsername } from '../database/controllers/users'

const strategy = new passportLocal.Strategy(async (username, password, done) => {
    const user = await getUserByUsername(username, true).catch(done)
    const correctLogin = user ? await user.doesPasswordMatch(password) : false

    if (!correctLogin) {
        return done(null, false, { message: 'Incorrect username or password' })
    }

    done(null, user)
})

export default strategy