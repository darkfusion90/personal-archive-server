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
}, { timestamps: true })

UserSchema.methods.doesPasswordMatch = function (password: string) {
    return bcrypt.compare(password, (this as IUserDocument).password)
}

UserSchema.methods.filterSensitiveData = function () {
    const { username, email }: IUserDocument = this
    return { username, email }
}

function hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, kPasswordSalt)
}

UserSchema.pre<IUserDocument>('save', async function (next) {
    // user.isNew will also be handled by this condition (a new user's password is always "modified")
    if (!this.isModified('password')) {
        console.log('user.password not modified. will not hash')
        return next()
    }

    try {
        console.log('Try hashing password for: ', this)
        this.password = await hashPassword(this.password)
        console.log('After hashing password: ', this)
        next()
    } catch (err) {
        console.log('Error hashing password: ', err)
        next(err)
    }
})

UserSchema.pre<mongoose.Query<IUserDocument>>('findOneAndUpdate', async function (next) {
    const update = this.getUpdate()
    if (update && update.password) {
        update.password = await hashPassword(update.password)
    } 

    next()
})

const UserModel = mongoose.model<IUserDocument>('user', UserSchema)

export { UserSchema }
export default UserModel
