import mongoose from 'mongoose'
import TokenModel, { ITokenDocument, discriminatorKey } from './TokenModel'

export interface IPasswordResetTokenDocument extends ITokenDocument { }

export const PasswordResetTokenSchema = new mongoose.Schema<IPasswordResetTokenDocument>({}, { discriminatorKey })

export const PasswordResetTokenModel = TokenModel.discriminator<IPasswordResetTokenDocument>(
    'PasswordResetToken',
    PasswordResetTokenSchema,
    'password-reset'
)