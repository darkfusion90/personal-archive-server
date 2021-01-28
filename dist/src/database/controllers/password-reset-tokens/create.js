"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPasswordResetToken = void 0;
const PasswordResetTokenModel_1 = require("../../models/PasswordResetTokenModel");
exports.createPasswordResetToken = (user) => {
    const passwordResetToken = new PasswordResetTokenModel_1.PasswordResetTokenModel({ user });
    return passwordResetToken.save();
};
