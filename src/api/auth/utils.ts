import { RequestHandler } from "express"
import { IUserDocument } from "../../database/models/UserModel"

export const performLogin = (user: IUserDocument): RequestHandler => (req, res, next) => {
    req.login(user, err => {
        if (err) {
            return next(err)
        }

        res.json(user.filterSensitiveData())
    })
}