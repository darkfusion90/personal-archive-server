import generateAuthToken from './generate-token'
import verifyAuthToken from './verify-token'
import enableMultifactorAuth from './enable-multifactor-auth'
import disableMultifactorAuth from './disable-multifactor-auth'

import middlewares from './middlewares'

export default {
    generate: generateAuthToken,
    verify: verifyAuthToken,
    enable: enableMultifactorAuth,
    disable: disableMultifactorAuth,
    middlewares
}