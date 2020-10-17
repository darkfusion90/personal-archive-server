import registerValidator from './register-validator'
import { createValidation } from '../../validators'

export default {
    validators: {
        register: createValidation(registerValidator)
    }
}