import { body } from "express-validator";
import {createValidation} from '../../validators'

export const generateTokenValidator = createValidation([
    body('username', 'Username is required').notEmpty()
])

export const verifyTokenValidator =  createValidation([
    body('password', 'Password is required').notEmpty()
])

