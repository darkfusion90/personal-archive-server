import ejs from 'ejs'
import { sendMail } from './transport'
import { renderDeviceVerification, IDeviceVerificationMailOpts } from './views'

import mailConfig from './config'
import { IUserDocument } from '../../database/models/UserModel'

export const sendDeviceVerificationMail = async (
    user: IUserDocument,
    opts: Omit<IDeviceVerificationMailOpts, 'username'>
) => {
    const html = await renderDeviceVerification({ username: user.username, ...opts })

    return sendMail({
        to: user.email,
        subject: 'Verify unknown device - PersonalArchive',
        html
    }).catch(err => {
        console.log('Error sending device verification mail: ', err)
    })
}