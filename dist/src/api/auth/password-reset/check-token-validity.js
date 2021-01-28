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
const password_reset_tokens_1 = require("../../../database/controllers/password-reset-tokens");
const checkTokenValidity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield password_reset_tokens_1.verifyPasswordResetToken(req.params.token);
    // If invalid, verifyPasswordResetToken throws appropriate error which is handled by the
    // global error handler [app.use((err, req, res, next)=>{})]
    // Hence, we don't need to worry about 'token-invalid' scenario inside this handler
    res.json({ tokenValid: true });
});
exports.default = async_handler_1.default(checkTokenValidity);
