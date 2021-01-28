"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("../api");
function default_1(app) {
    const validators = api_1.auth.middlewares.validators;
    app.post('/api/auth/login', api_1.auth.login);
    app.post('/api/auth/logout', api_1.auth.logout);
    app.post('/api/auth/register', validators.register, api_1.auth.register);
    app.get('/api/auth/status', api_1.auth.status);
    const { multiFactorAuth } = api_1.auth;
    app.post('/api/auth/multifactor/generate', multiFactorAuth.generate);
    app.post('/api/auth/multifactor/verify/:authToken', multiFactorAuth.verify);
    app.put('/api/auth/multifactor/enable', multiFactorAuth.enable);
    app.put('/api/auth/multifactor/disable', multiFactorAuth.disable);
    const { emailVerification } = api_1.auth;
    app.post('/api/auth/email-verification/generate', emailVerification.generate);
    app.post('/api/auth/email-verification/verify/:token', emailVerification.verify);
    const { passwordReset: passwordResetHandler } = api_1.auth;
    app.post('/api/auth/password-reset/generate', passwordResetHandler.generate);
    app.get('/api/auth/password-reset/check/:token', passwordResetHandler.check);
    app.post('/api/auth/password-reset/reset/:token', passwordResetHandler.resetPassword);
}
exports.default = default_1;
