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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const async_handler_1 = __importDefault(require("../../async-handler"));
const check_if_email_already_verified_1 = require("./check-if-email-already-verified");
const utils_1 = require("../../../utils");
const email_verification_tokens_1 = require("../../../database/controllers/email-verification-tokens");
const middlewares_1 = require("../middlewares");
const remove_existing_email_tokens_1 = require("./remove-existing-email-tokens");
const generateEmailToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = utils_1.sessionUser(req);
    const token = yield email_verification_tokens_1.createEmailVerificationToken(user.id);
    /*await sendEmailConfirmationMail(
        user,
        `/just-a-link/${token.token}`
    )*/
    console.log({ token });
    res.json({ token });
});
exports.default = [
    middlewares_1.ensureLoggedIn({ checkMultifactor: false }),
    check_if_email_already_verified_1.checkIfEmailAlreadyVerified,
    remove_existing_email_tokens_1.removeExistingEmailTokens,
    async_handler_1.default(generateEmailToken)
];
