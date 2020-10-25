import mongoose from 'mongoose'
import TokenModel, { ITokenDocument, discriminatorKey } from './TokenModel'

export interface IPasswordResetTokenDocument extends ITokenDocument { }

export const PasswordResetTokenSchema = new mongoose.Schema<IPasswordResetTokenDocument>({}, { discriminatorKey })

PasswordResetTokenSchema.pre<IPasswordResetTokenDocument>('save', function (next) {
    this.expiresAt = new Date(2099, 12, 31, 23, 59, 59)
    this.markModified('expiresAt')
    next()
})

export const PasswordResetTokenModel = TokenModel.discriminator<IPasswordResetTokenDocument>(
    'PasswordResetToken',
    PasswordResetTokenSchema,
    'password-reset'
)