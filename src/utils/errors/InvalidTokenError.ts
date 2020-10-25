type IInvalidTokenReason = 'token-not-found' | 'token-expired'

export class InvalidTokenError extends Error {
    reason: IInvalidTokenReason
    constructor(reason: IInvalidTokenReason) {
        super(`Invalid Token. Reason: ${reason}`)
        this.reason = reason
    }
}