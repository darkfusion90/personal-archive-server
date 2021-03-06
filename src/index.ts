import initDotenv from './init-dotenv'
initDotenv()

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import sslRedirect from 'heroku-ssl-redirect'
import { express as expressUserAgent } from 'express-useragent'

import {
    initPassport,
    initSession,
    enhanceExpress,
    throttle,
    createUserAuthDetailMiddleware,
    useragentLogger,
    errorHandler
} from './middlewares'
import initRouter from './router'
import initDatabase from './database'
import config from './config'

const app = express()

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(config.staticRoot))
}

app.use(expressUserAgent())
app.use(useragentLogger)
app.use(sslRedirect())
app.use(cors())
app.use(enhanceExpress)
app.use(morgan('dev'))
app.use(throttle(1000))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
initSession(app)
initPassport(app)
// NOTE: Make sure this middleware is initiated after session and passport
app.use(createUserAuthDetailMiddleware)

initRouter(app)
app.use(errorHandler)

const port = +process.env.PORT! || 8000
initDatabase().then(_ => {
    const { NODE_ENV, MONGO_URL, SESSION_SECRET } = process.env
    console.log('process.env: ', { NODE_ENV, MONGO_URL, SESSION_SECRET })
    app.listen(port, () => console.log(`Listening on port: ${port}`))
}).catch(err => console.log('Error connecting to database: ', err))