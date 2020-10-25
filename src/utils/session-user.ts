import { Request } from "express";
import { IUserDocument } from '../database/models/UserModel'

export const sessionUserId = (req: Request<any, any, any, any>): string | null => {
    // TODO: Maybe better throw error on no session present
    const user = sessionUser(req)
    return user ? user.id : null
}

export default function sessionUser(req: Request<any, any, any, any>): IUserDocument | null {
    return req.user as IUserDocument
}