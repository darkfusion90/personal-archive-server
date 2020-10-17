import { param } from 'express-validator'
import { isObjectId } from "../../../validators";

const deleteValidator = [param('postId').custom(isObjectId)]

export default deleteValidator