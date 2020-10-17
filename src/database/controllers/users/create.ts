import UserModel from '../../models/UserModel'

interface CreateUserOpts {
    email: string,
    username: string,
    password: string
}

function createUser({ email, username, password }: CreateUserOpts) {
    const user = new UserModel({ email, username, password })
    return user.save()
}

export default { createUser }