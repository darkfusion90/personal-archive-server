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
exports.putValidator = exports.put = void 0;
const express_validator_1 = require("express-validator");
const validators_1 = require("../validators");
const update_1 = require("../.././database/controllers/users/update");
const utils_1 = require("../../utils");
exports.put = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Received: ", req.body);
    const userId = utils_1.sessionUserId(req);
    const updatedUser = yield update_1.updateUserDetails(userId, req.body);
    if (updatedUser) {
        res.json(updatedUser.filterSensitiveData());
    }
    else {
        res.json({});
    }
});
exports.putValidator = validators_1.createValidation([
    express_validator_1.body('username', 'must be string').optional().isString(),
    express_validator_1.body('email', 'must be an email').optional().isEmail()
]);
