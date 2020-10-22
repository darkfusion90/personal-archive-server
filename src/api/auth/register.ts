import RegisterHandler from './typings/register'

import { createUser } from '../../database/controllers/users'
import { performLoginRequestHandler } from './utils'

const register: RegisterHandler = (req, res, next) => {
    const { username, email, password } = req.body
    createUser({ username, email, password })
        .then((user) => {
            performLoginRequestHandler(user)(req, res, next)
        })
        .catch(next)
}

export default register