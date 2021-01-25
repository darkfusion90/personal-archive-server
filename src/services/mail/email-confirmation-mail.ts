import { sendMail } from './transport'
import { renderEmailConfirmation } from './views'

import { IUserDocument } from '../../database/models/UserModel'

export const sendEmailConfirmationMail = async (user: IUserDocument, confirmationLink: string) => {
    const emailConfirmationHtml = await renderEmailConfirmation(user.username, confirmationLink)

    return sendMail({
        to: user.email,
        subject: 'Confirm your email - PersonalArchive',
        html: emailConfirmationHtml
    }).catch(err => {
        console.log('Error sending email confirmation mail: ', err)
    })
}