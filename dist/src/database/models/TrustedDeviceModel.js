"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrustedDeviceModel = exports.DeviceSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const DataTypes = mongoose_1.default.Schema.Types;
exports.DeviceSchema = new mongoose_1.default.Schema({
    userAgent: {
        type: DataTypes.String,
        required: true,
        index: 'text',
    },
    ipAddress: {
        type: DataTypes.String,
        required: true,
        index: 'text',
    }
});
const TrustedDeviceSchema = new mongoose_1.default.Schema({
    user: {
        type: DataTypes.ObjectId,
        ref: 'User',
        unique: true,
        index: true,
        required: true
    },
    devices: {
        type: [exports.DeviceSchema],
        required: true,
        index: true,
        default: []
    }
});
exports.TrustedDeviceModel = mongoose_1.default.model('TrustedDevice', TrustedDeviceSchema);
