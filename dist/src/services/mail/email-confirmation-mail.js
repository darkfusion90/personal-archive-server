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
exports.sendEmailConfirmationMail = void 0;
const transport_1 = require("./transport");
const views_1 = require("./views");
exports.sendEmailConfirmationMail = (user, confirmationLink) => __awaiter(void 0, void 0, void 0, function* () {
    const emailConfirmationHtml = yield views_1.renderEmailConfirmation(user.username, confirmationLink);
    return transport_1.sendMail({
        to: user.email,
        subject: 'Confirm your email - PersonalArchive',
        html: emailConfirmationHtml
    }).catch(err => {
        console.log('Error sending email confirmation mail: ', err);
    });
});
