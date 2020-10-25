import login from './login'
import logout from './logout'
import register from './register'
import status from './status'
import middlewares from './middlewares'
import multiFactorAuth from './multi-factor-auth'
import emailVerification from './email-verification'
import passwordReset from './password-reset'

export default {
    login,
    logout,
    status,
    register,
    middlewares,
    multiFactorAuth,
    emailVerification,
    passwordReset
}
export * from './multi-factor-auth'