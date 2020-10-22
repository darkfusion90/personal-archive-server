import mongoose from 'mongoose'
import crypto from 'crypto'
import addMinutes from 'date-fns/addMinutes'

const DataTypes = mongoose.Schema.Types

export interface IAuthTokenDocument extends mongoose.Document {
    user: string
    token: string
    expiresAt: Date
    hasExpired: () => boolean
}

const AuthTokenSchema = new mongoose.Schema<IAuthTokenDocument>({
    user: {
        type: DataTypes.ObjectId,
        ref: 'User',
        unique: true,
        index: true,
        required: true
    },
    token: {
        type: DataTypes.String,
        index: true,
        unique: true,
    },
    expiresAt: {
        type: DataTypes.Date,
        // Ensures that document (read: token) expires after Date.now() >= expiresAt
        // Read More: https://docs.mongodb.com/manual/tutorial/expire-data/
        expires: 0
    }
})

AuthTokenSchema.pre<IAuthTokenDocument>('save', function (next) {
    // Don't generate token if not a new one
    if (!this.isNew) {
        return next()
    }

    this.expiresAt = addMinutes(Date.now(), 15)
    this.markModified('expiresAt')
    crypto.randomBytes(16, (err, buffer) => {
        if (err) {
            return next(err)
        }

        this.token = buffer.toString('hex')
        next()
    })
})

AuthTokenSchema.methods.hasExpired = function () {
    const authToken = this as IAuthTokenDocument
    const currentTime = new Date()

    return currentTime >= authToken.expiresAt
}

const AuthTokenModel = mongoose.model<IAuthTokenDocument>('AuthToken', AuthTokenSchema)

export { AuthTokenModel, AuthTokenSchema }
export default AuthTokenModel