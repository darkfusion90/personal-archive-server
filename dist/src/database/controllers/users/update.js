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
exports.updateUserDetails = exports.updateUserPassword = void 0;
const lodash_1 = __importDefault(require("lodash"));
const auth_details_1 = require("../auth-details");
const UserModel_1 = __importDefault(require("../../models/UserModel"));
exports.updateUserPassword = (userId, password) => {
    return UserModel_1.default.findByIdAndUpdate(userId, { password }, { new: true }).exec();
};
exports.updateUserDetails = (userId, toUpdate) => __awaiter(void 0, void 0, void 0, function* () {
    // removes null/undefined paths
    const updateQuery = lodash_1.default.omitBy(toUpdate, lodash_1.default.isNil);
    if (updateQuery.email) {
        yield Promise.all([
            auth_details_1.markEmailVerifiedForUser(userId, false),
            auth_details_1.markMultifactorAuthForUser(userId, false)
        ]);
    }
    return UserModel_1.default.findByIdAndUpdate(userId, updateQuery, { new: true });
});
