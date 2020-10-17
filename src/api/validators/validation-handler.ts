import { RequestHandler } from "express";
import { validationResult } from "express-validator";

const validationHandler: RequestHandler = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.mapped(),
            hasErrors: true
        })
    }

    next()
}

export default validationHandler