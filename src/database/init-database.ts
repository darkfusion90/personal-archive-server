import mongoose from 'mongoose'
import config from '../config'

export default function (): Promise<any> {
    mongoose.connection.on('open', () => console.log('Connected'))

    return new Promise((resolve, reject) => {
        mongoose.connect(
            config.mongoUrl,
            {
                useNewUrlParser: true,
                useFindAndModify: false,
                useUnifiedTopology: true,
                useCreateIndex: true
            },
            err => {
                if (err) {
                    return reject(err)
                }
                resolve()
            }
        )
    })
}