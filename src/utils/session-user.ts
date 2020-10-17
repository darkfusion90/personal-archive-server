import { Request } from "express";
import { IUserDocument } from '../database/models/UserModel'

export default function sessionUser(req: Request<any, any, any, any>): IUserDocument | null {
    return req.user as IUserDocument
}