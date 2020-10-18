"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const isObjectId = (input) => {
    console.log('Check for: ', { input }, "result: ", mongoose_1.default.isValidObjectId(input));
    if (!mongoose_1.default.isValidObjectId(input)) {
        console.log('not valid');
        throw new Error('must be a valid ObjectId');
    }
    return true;
};
exports.default = isObjectId;
