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
const session_user_1 = require("../utils/session-user");
const auth_details_1 = require("../database/controllers/auth-details");
const createUserAuthDetailMiddleware = (req, _, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = session_user_1.sessionUserId(req);
    // No user in session. So don't bother updating auth details
    if (!userId) {
        console.log('No user in session. Not updating auth details');
        return next();
    }
    try {
        const authDetails = yield auth_details_1.createAuthDetailIfMissing(userId);
        console.log(`Auth Details of ${userId}: `, authDetails);
    }
    catch (err) {
        return next(err);
    }
    finally {
        next();
    }
});
exports.default = createUserAuthDetailMiddleware;
