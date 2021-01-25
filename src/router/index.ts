import { Application } from 'express'
import path from 'path'

import accountRouter from './account-router'
import authRouter from './auth-router'
import postsRouter from './posts-router'
import config from '../config'

export default function (app: Application) {
    accountRouter(app)
    authRouter(app)
    postsRouter(app)

    if (process.env.NODE_ENV === 'production') {
        app.get('*', (_, res) => {
            res.sendFile(path.join(config.staticRoot, 'index.html'))
        })
    }
}