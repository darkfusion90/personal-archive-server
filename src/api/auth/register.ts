import RegisterHandler from './typings/register'

import { createUser } from '../../database/controllers/users'
import { performLogin } from './utils'

const register: RegisterHandler = (req, res, next) => {
    const { username, email, password } = req.body
    createUser({ username, email, password })
        .then((user) => {
            performLogin(user)(req, res, next)
        })
        .catch(next)
}

export default register