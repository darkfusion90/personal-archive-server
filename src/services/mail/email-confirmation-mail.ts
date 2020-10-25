import { sendMail } from './transport'
import { renderEmailConfirmation } from './views'

import { IUserDocument } from '../../database/models/UserModel'

export const sendEmailConfirmationMail = async (user: IUserDocument) => {
    const emailConfirmationHtml = await renderEmailConfirmation(user)

    return sendMail({
        to: user.email,
        subject: 'Confirm your email - PersonalArchive',
        html: emailConfirmationHtml
    }).catch(err => {
        console.log('Error sending email confirmation mail: ', err)
    })
}