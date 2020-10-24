import registerValidator from './register-validator'
import { createValidation } from '../../validators'

export * from './ensure-loggedIn'
export default {
    validators: {
        register: createValidation(registerValidator)
    }
}