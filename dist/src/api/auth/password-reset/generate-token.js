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
const users_1 = require("../../../database/controllers/users");
const validators_1 = require("./validators");
const generatePasswordResetToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield users_1.getUserByUsername(req.body.username);
    if (!user) {
        return res.status(404).json({ message: 'user-not-found' });
    }
    const token = yield password_reset_tokens_1.createPasswordResetToken(user.id);
    res.json({ token });
});
exports.default = [
    validators_1.generateTokenValidator,
    async_handler_1.default(generatePasswordResetToken)
];
