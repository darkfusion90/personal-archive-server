import ejs from 'ejs'
import transport from './transport'
import { renderEmailConfirmation } from './views'

import { IUserDocument } from '../../database/models/UserModel'
import mailConfig from './config'

export const sendEmailConfirmationMail = async (user: IUserDocument) => {
    const emailConfirmationHtml = await renderEmailConfirmation(user)

    return transport.sendMail({
        from: mailConfig.username,
        to: user.email,
        subject: 'Confirm your email - PersonalArchive',
        html: emailConfirmationHtml
    }).catch(err => {
        console.log('Error sending email confirmation mail: ', err)
    })
}