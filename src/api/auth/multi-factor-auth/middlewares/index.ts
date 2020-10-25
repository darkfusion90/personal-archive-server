import ensureEmailVerified from './ensure-email-verified'
import ensureMultifactorAuthEnabled from './ensure-multifactor-enabled'
import removeExistingDeviceVerificationTokens from './remove-existing-device-verification-tokens'

export default { ensureEmailVerified, ensureMultifactorAuthEnabled, removeExistingAuthTokens: removeExistingDeviceVerificationTokens }
export * from './ensure-email-verified'
export * from './ensure-multifactor-enabled'
export * from './remove-existing-device-verification-tokens'
export * from './check-if-device-already-verified'