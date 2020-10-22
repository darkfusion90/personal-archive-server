import mongoose from 'mongoose'

const DataTypes = mongoose.Schema.Types

export interface IAuthDetailDocument extends mongoose.Document {
    user: string
    emailVerified: boolean
    multiFactorAuthEnabled: boolean
}

const AuthDetailSchema = new mongoose.Schema<IAuthDetailDocument>({
    user: {
        type: DataTypes.ObjectId,
        ref: 'User',
        unique: true,
        index: true,
        required: true
    },
    emailVerified: {
        type: DataTypes.Boolean,
        default: false,
        required: true,
        index: true
    },
    multiFactorAuthEnabled: {
        type: DataTypes.Boolean,
        default: false,
        required: true,
        index: true
    }
})

const AuthDetailModel = mongoose.model<IAuthDetailDocument>('AuthDetail', AuthDetailSchema)

export { AuthDetailModel, AuthDetailSchema }
export default AuthDetailModel