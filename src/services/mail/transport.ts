import nodemailer from 'nodemailer'
import mailConfig from './config'
import { MailOptions } from 'nodemailer/lib/json-transport'

const transport = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    auth: {
        user: mailConfig.username,
        pass: mailConfig.password
    },
})

export const sendMail = (opts: Omit<MailOptions, 'from'>) => {
    console.log({ mailConfig })
    return transport.sendMail({ ...opts, from: mailConfig.username })
}

export default transport