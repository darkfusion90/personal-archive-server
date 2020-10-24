import ejs from 'ejs'

import { IUserDocument } from "../../../database/models/UserModel";
import { emailConfirmation, deviceVerification } from "./views";

export const renderEmailConfirmation = (user: IUserDocument): Promise<string> => {
    return ejs.renderFile(emailConfirmation, { user })
}

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