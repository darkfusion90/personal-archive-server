import nodemailer from 'nodemailer'
import mailConfig from './config'

const transport = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    auth: {
        user: mailConfig.username,
        pass: mailConfig.password
    },
})

export default transport