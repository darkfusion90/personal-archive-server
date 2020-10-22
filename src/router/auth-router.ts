import { Application } from 'express'
import { auth } from '../api'

export default function (app: Application) {
    const validators = auth.middlewares.validators

    app.post('/api/auth/login', auth.login)
    app.post('/api/auth/logout', auth.logout)
    app.post('/api/auth/register', validators.register, auth.register)
    app.get('/api/auth/status', auth.status)

    const { multiFactorAuth } = auth
    app.post('/api/auth/multifactor/generate', multiFactorAuth.generate)
    app.post('/api/auth/multifactor/verify/:authToken', multiFactorAuth.verify)
}