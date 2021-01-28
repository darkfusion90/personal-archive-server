"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyEmailVerificationToken = void 0;
const EmailVerificationTokenModel_1 = require("../../models/EmailVerificationTokenModel");
const tokens_1 = require("../tokens");
exports.verifyEmailVerificationToken = (token, user) => __awaiter(void 0, void 0, void 0, function* () {
    const emailVerificationToken = yield EmailVerificationTokenModel_1.EmailVerificationTokenModel.findOne({ token, user }).exec();
    // Error will be thrown and will be handled by the api handler
    yield tokens_1.checkTokenValidity(emailVerificationToken);
    return Promise.resolve(emailVerificationToken);
});
