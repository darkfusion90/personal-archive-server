import initDotenv from './init-dotenv'
initDotenv()

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { initPassport, initSession, enhanceExpress, throttle } from './middlewares'
import initRouter from './router'
import initDatabase from './database'

const app = express()

app.use(cors())
app.use(enhanceExpress)
app.use(morgan('dev'))
app.use(throttle(1000))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
initSession(app)
initPassport(app)
initRouter(app)

const port = +process.env.PORT! || 8000
initDatabase().then(_ => {
    app.listen(port, () => console.log(`Listening on port: ${port}`))
}).catch(err => console.log('Error connecting to database: ', err))