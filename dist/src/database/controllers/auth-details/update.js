"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.markEmailVerifiedForUser = exports.markMultifactorAuthForUser = void 0;
const AuthDetailModel_1 = require("../../models/AuthDetailModel");
exports.markMultifactorAuthForUser = (userId, multiFactorAuthEnabled) => AuthDetailModel_1.AuthDetailModel.findOneAndUpdate({ user: userId }, { multiFactorAuthEnabled }).exec();
exports.markEmailVerifiedForUser = (userId, emailVerified) => AuthDetailModel_1.AuthDetailModel.findOneAndUpdate({ user: userId }, { emailVerified }).exec();
