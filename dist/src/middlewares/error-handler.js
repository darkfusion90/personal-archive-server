"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../utils/errors");
const errorHandler = (err, _, res, __) => {
    console.log('[ERROR HANDLER]: Error encountered: ', err);
    if (err instanceof errors_1.ErrorWithStatusCode) {
        return res.status(err.statusCode).json({ message: err.message });
    }
    else if (err instanceof errors_1.InvalidTokenError) {
        return res.status(401).json({ reason: err.reason, message: 'invalid-token' });
    }
    const isProduction = process.env.NODE_ENV === 'production';
    res.status(500).json({
        message: 'unknown-error',
        err: isProduction ? undefined : err
    });
};
exports.default = errorHandler;
