import getValidator from './get-validator'
import postValidator from './post-validator'
import deleteValidator from './delete-validator'
import { createValidation } from '../../../validators'

export default {
    getValidator: createValidation(getValidator),
    postValidator: createValidation(postValidator),
    deleteValidator: createValidation(deleteValidator)
}