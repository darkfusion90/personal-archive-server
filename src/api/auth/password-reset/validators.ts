import { body } from "express-validator";
import {createValidation} from '../../validators'

export const generateTokenValidator = createValidation([
    body('username', 'Username is required').notEmpty()
])

export const passwordResetValidator =  createValidation([
    body('password', 'Password is required').notEmpty()
])

