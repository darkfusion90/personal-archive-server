import { param, query } from 'express-validator'
import { isObjectId } from "../../../validators";

const getValidator = [
    param('postId').custom(isObjectId),
    query('sort', 'must be `title` or `date`').optional().matches(/title|date/),
    query('order', 'must be `asc` or `desc`').optional().matches(/asc|desc/),
    query('query').optional().isString(),
    query(
        'tags',
        'must be comma separated value(s). Example: `<url>/?tags=hello,world,this,is,tags`'
    )
        .optional()
        .matches(/(.+?)(?:,|$)/)
]

export default getValidator