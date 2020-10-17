import { body } from "express-validator"

const registerValidator = [
    body(['username', 'password', 'email'], 'incomplete credentials').notEmpty().isString(),
    body('email', 'must be a valid email').isEmail()
]

export default registerValidator