import { ErrorRequestHandler } from 'express'

import { ErrorWithStatusCode, InvalidTokenError } from '../utils/errors'

const errorHandler: ErrorRequestHandler = (err, _, res, __) => {
    if (err instanceof ErrorWithStatusCode) {
        return res.status(err.statusCode).json({ message: err.message })
    } else if (err instanceof InvalidTokenError) {
        return res.status(401).json({ reason: err.reason, message: 'invalid-token' })
    }

    const isProduction = process.env.NODE_ENV === 'production'

    res.status(500).json({
        message: 'unknown-error',
        err: isProduction ? undefined : err
    })
}

export default errorHandler