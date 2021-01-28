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
exports.checkIfEmailAlreadyVerified = void 0;
const auth_details_1 = require("../../../database/controllers/auth-details");
const utils_1 = require("../../../utils");
const async_handler_1 = __importDefault(require("../../async-handler"));
exports.checkIfEmailAlreadyVerified = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = utils_1.sessionUserId(req);
    if (yield auth_details_1.hasUserVerifiedEmail(userId)) {
        return res.message('Your email has already been verified');
    }
    next();
});
exports.default = async_handler_1.default(exports.checkIfEmailAlreadyVerified);
