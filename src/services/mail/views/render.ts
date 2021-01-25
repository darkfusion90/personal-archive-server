import ejs from 'ejs'

import { emailConfirmation, deviceVerification } from "./views";

export const renderEmailConfirmation = (
    username: string,
    confirmationLink: string
): Promise<string> =>
    ejs.renderFile(emailConfirmation, { username, confirmationLink })

export interface IDeviceVerificationMailOpts {
    username: string,
    deviceInfo: string,
    ipAddress: string,
    verificationLink: string
}

export const renderDeviceVerification = ({
    username,
    deviceInfo,
    ipAddress,
    verificationLink
}: IDeviceVerificationMailOpts): Promise<string> => {
    return ejs.renderFile(deviceVerification, { username, deviceInfo, ipAddress, verificationLink })
}