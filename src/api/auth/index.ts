import login from './login'
import logout from './logout'
import register from './register'
import status from './status'
import middlewares from './middlewares'
import multiFactorAuth from './multi-factor-auth'

export default { login, logout, status, register, middlewares, multiFactorAuth }
export * from './multi-factor-auth'