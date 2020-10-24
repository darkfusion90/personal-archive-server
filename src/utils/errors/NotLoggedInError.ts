import { ErrorWithStatusCode } from './ErrorWithStatusCode'

export class NotLoggedInError extends ErrorWithStatusCode {
    constructor() {
        super(401, 'You need to be logged in to perform this operation')
    }
}