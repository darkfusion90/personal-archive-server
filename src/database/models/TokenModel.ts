import mongoose from 'mongoose'
import crypto from 'crypto'
import addMinutes from 'date-fns/addMinutes'

const DataTypes = mongoose.Schema.Types

export interface ITokenDocument extends mongoose.Document {
    user: string
    token: string
    expiresAt: Date
    hasExpired: () => boolean
}

export const discriminatorKey = 'tokenType'

const TokenSchema = new mongoose.Schema<ITokenDocument>({
    user: {
        type: DataTypes.ObjectId,
        ref: 'User',
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
}, { discriminatorKey })

TokenSchema.index({ user: 1, [discriminatorKey]: 1 }, { unique: true })

TokenSchema.pre<ITokenDocument>('save', function (next) {
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

TokenSchema.methods.hasExpired = function () {
    const token = this as ITokenDocument
    const currentTime = new Date()

    return currentTime >= token.expiresAt
}

const TokenModel = mongoose.model<ITokenDocument>('Token', TokenSchema)

export default TokenModel