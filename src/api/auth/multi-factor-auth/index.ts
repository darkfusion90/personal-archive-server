import generateAuthToken from './generate-token'
import verifyAuthToken from './verify-token'
import middlewares from './middlewares'

export default {
    generate: generateAuthToken,
    verify: verifyAuthToken,
    middlewares
}