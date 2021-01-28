"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEmailVerificationToken = void 0;
const EmailVerificationTokenModel_1 = require("../../models/EmailVerificationTokenModel");
exports.createEmailVerificationToken = (userId) => {
    const emailVerificationToken = new EmailVerificationTokenModel_1.EmailVerificationTokenModel({ user: userId });
    return emailVerificationToken.save();
};
