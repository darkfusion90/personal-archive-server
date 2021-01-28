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
exports.verifyPasswordResetToken = void 0;
const PasswordResetTokenModel_1 = require("../../models/PasswordResetTokenModel");
const tokens_1 = require("../tokens");
exports.verifyPasswordResetToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const passwordResetToken = yield PasswordResetTokenModel_1.PasswordResetTokenModel.findOne({ token }).exec();
    return tokens_1.checkTokenValidity(passwordResetToken);
});
