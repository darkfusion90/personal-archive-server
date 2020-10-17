import { param, body, check } from 'express-validator'
import { isObjectId } from "../../../validators";

const postValidator = [
    param('userId').custom(isObjectId),
    body('title', 'required and must be a string').notEmpty().isString(),
    body(['link', 'comment', 'if provided, must be a string']).optional({ nullable: true }).isString(),
    body('tags', 'if provided, must be an array').optional().isArray(),
    check('link', 'must be a url with valid protocol [http, https, ftp]')
        .optional({ nullable: true })
        .isURL({ require_protocol: true })
]

export default postValidator