import mongoose from 'mongoose'
import crypto from 'crypto'

const DataTypes = mongoose.Schema.Types

export interface IAuthDetailDocument extends mongoose.Document {
    user: string
    token: string
    expiresAt: Date
}

const AuthTokenSchema = new mongoose.Schema<IAuthDetailDocument>({
    user: {
        type: DataTypes.ObjectId,
        ref: 'User',
        unique: true,
        index: true,
        required: true
    },
    token: {
        type: DataTypes.String,
        required: true
    },
    expiresAt: {
        type: DataTypes.Date,
        required: true,
        default: Date.now
    }
})

AuthTokenSchema.pre<IAuthDetailDocument>('save', function (next) {
    // Don't generate token if not a new one
    if (!this.isNew) {
        return next()
    }

    crypto.randomBytes(16, (err, buffer) => {
        if (err) {
            return next(err)
        }

        this.token = buffer.toString('hex')
        next()
    })
})

const AuthTokenModel = mongoose.model('AuthToken', AuthTokenSchema)

export { AuthTokenModel, AuthTokenSchema }
export default AuthTokenModel