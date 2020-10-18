"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("../api");
function default_1(app) {
    const validators = api_1.auth.middlewares.validators;
    app.post('/api/auth/login', api_1.auth.login);
    app.post('/api/auth/logout', api_1.auth.logout);
    app.post('/api/auth/register', validators.register, api_1.auth.register);
    app.get('/api/auth/status', api_1.auth.status);
}
exports.default = default_1;
