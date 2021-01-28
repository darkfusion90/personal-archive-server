"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthDetailSchema = exports.AuthDetailModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const DataTypes = mongoose_1.default.Schema.Types;
const AuthDetailSchema = new mongoose_1.default.Schema({
    user: {
        type: DataTypes.ObjectId,
        ref: 'User',
        unique: true,
        index: true,
        required: true
    },
    emailVerified: {
        type: DataTypes.Boolean,
        default: false,
        required: true,
        index: true
    },
    multiFactorAuthEnabled: {
        type: DataTypes.Boolean,
        default: false,
        required: true,
        index: true
    }
});
exports.AuthDetailSchema = AuthDetailSchema;
const AuthDetailModel = mongoose_1.default.model('AuthDetail', AuthDetailSchema);
exports.AuthDetailModel = AuthDetailModel;
exports.default = AuthDetailModel;
