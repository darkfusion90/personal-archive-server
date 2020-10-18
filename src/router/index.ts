import { Application } from 'express'
import userRouter from './user-router'
import authRouter from './auth-router'
import postsRouter from './posts-router'

export default function (app: Application) {
    userRouter(app)
    authRouter(app)
    postsRouter(app)

    if (process.env.NODE_ENV === 'production') {
        app.use('*', (_, res) => {
            res.sendFile(__dirname + '../public/index.html')
        })
    }
}