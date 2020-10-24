import path from 'path'

const kMailViewsRoot = path.join(__dirname)

export const emailConfirmation = path.join(kMailViewsRoot, 'email-confirmation.ejs')
export const deviceVerification = path.join(kMailViewsRoot, 'device-verification.ejs')