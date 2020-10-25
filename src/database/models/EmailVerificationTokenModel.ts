import mongoose from 'mongoose'
import TokenModel, { ITokenDocument, discriminatorKey } from './TokenModel'

export interface IEmailVerificationTokenDocument extends ITokenDocument { }

export const EmailVerificationTokenSchema = new mongoose.Schema<IEmailVerificationTokenDocument>(
    {},
    { discriminatorKey }
)

export const EmailVerificationTokenModel = TokenModel.discriminator<IEmailVerificationTokenDocument>(
    'EmailVerificationToken',
    EmailVerificationTokenSchema,
    'email-verification'
)