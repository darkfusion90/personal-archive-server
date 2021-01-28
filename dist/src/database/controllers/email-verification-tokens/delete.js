"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAllEmailTokensForUser = void 0;
const EmailVerificationTokenModel_1 = require("../../models/EmailVerificationTokenModel");
const tokens_1 = require("../tokens");
exports.removeAllEmailTokensForUser = (userId) => {
    return tokens_1.removeAllTokensForUser(userId, EmailVerificationTokenModel_1.EmailVerificationTokenModel);
};
