import { Application } from 'express'
import { auth } from '../api'

export default function (app: Application) {
    const validators = auth.middlewares.validators

    app.post('/api/auth/login', auth.login)
    app.post('/api/auth/logout', auth.logout)
    app.post('/api/auth/register', validators.register, auth.register)
    app.get('/api/auth/status', auth.status)

    const { multiFactorAuth } = auth
    const { middlewares: { ensureEmailVerified, ensureMultifactorAuthEnabled } } = multiFactorAuth
    app.post(
        '/api/auth/multifactor/generate',
        //ensureEmailVerified,
        ensureMultifactorAuthEnabled,
        multiFactorAuth.generate
    )
    app.post(
        '/api/auth/multifactor/verify/:authToken',
        //ensureEmailVerified,
        ensureMultifactorAuthEnabled,
        multiFactorAuth.verify as any
    )
    app.put(
        '/api/auth/multifactor/enable',
        //ensureEmailVerified,
        multiFactorAuth.enable
    )
    app.put('/api/auth/multifactor/disable', multiFactorAuth.disable)
}