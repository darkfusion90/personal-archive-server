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
exports.removeExistingEmailTokens = void 0;
const email_verification_tokens_1 = require("../../../database/controllers/email-verification-tokens");
const utils_1 = require("../../../utils");
exports.removeExistingEmailTokens = (req, _, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = utils_1.sessionUserId(req);
    try {
        yield email_verification_tokens_1.removeAllEmailTokensForUser(userId);
        next();
    }
    catch (err) {
        next(err);
    }
});
