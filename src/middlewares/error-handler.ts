import { ErrorRequestHandler } from 'express'

import { ErrorWithStatusCode } from '../utils/errors'

const errorHandler: ErrorRequestHandler = (err, _, res, __) => {
    if (err instanceof ErrorWithStatusCode) {
        return res.status(err.statusCode).json({ message: err.message })
    }

    res.status(500).json({ message: 'unknown-error' })
}

export default errorHandler