import { Application } from 'express'
import userRouter from './user-router'
import authRouter from './auth-router'
import postsRouter from './posts-router'

export default function (app: Application) {
    userRouter(app)
    authRouter(app)
    postsRouter(app)
}