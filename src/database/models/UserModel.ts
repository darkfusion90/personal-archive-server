import mongoose, { HookNextFunction } from 'mongoose'
import bcrypt from 'bcrypt'

const kPasswordSalt = 14

export interface IUserDocument extends mongoose.Document {
    username: string
    email: string
    password: string
    doesPasswordMatch: (password: string) => Promise<boolean>
    filterSensitiveData: () => { username: string, email: string }
}

const UserSchema = new mongoose.Schema<IUserDocument>({
    username: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: mongoose.Schema.Types.String,
        required: true,
        trim: true
    },
    password: {
        type: mongoose.Schema.Types.String,
        required: true
    }
})

UserSchema.methods.doesPasswordMatch = function (password: string) {
    return bcrypt.compare(password, (this as IUserDocument).password)
}

UserSchema.methods.filterSensitiveData = function () {
    const { username, email }: IUserDocument = this
    return { username, email }
}

async function hashPassword<D extends { password: string }>(doc: D, next: HookNextFunction) {
    try {
        doc.password = await bcrypt.hash(doc.password, kPasswordSalt)
        next()
    } catch (err) {
        console.log('Error hashing password: ', err)
        next(err)
    }
}

UserSchema.pre<IUserDocument>('save', async function (next) {
    const user: IUserDocument = this
    // user.isNew will also be handled by this condition (a new user's password is always "modified")
    if (!user.isModified('password')) {
        return next()
    }

    hashPassword(user, next)
})

UserSchema.pre<mongoose.Query<IUserDocument>>('findOneAndUpdate', function (next) {
    const update = this.getUpdate()
    if (update.password) {
        return hashPassword(update, next)
    }

    next()
})

const UserModel = mongoose.model<IUserDocument>('user', UserSchema)

export { UserSchema }
export default UserModel
