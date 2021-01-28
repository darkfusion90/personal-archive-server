"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.discriminatorKey = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const crypto_1 = __importDefault(require("crypto"));
const addMinutes_1 = __importDefault(require("date-fns/addMinutes"));
const DataTypes = mongoose_1.default.Schema.Types;
exports.discriminatorKey = 'tokenType';
const TokenSchema = new mongoose_1.default.Schema({
    user: {
        type: DataTypes.ObjectId,
        ref: 'User',
        index: true,
        required: true
    },
    token: {
        type: DataTypes.String,
        index: true,
        unique: true,
    },
    expiresAt: {
        type: DataTypes.Date,
        // Ensures that document (read: token) expires after Date.now() >= expiresAt
        // Read More: https://docs.mongodb.com/manual/tutorial/expire-data/
        expires: 0
    }
}, { discriminatorKey: exports.discriminatorKey });
TokenSchema.index({ user: 1, [exports.discriminatorKey]: 1 }, { unique: true });
TokenSchema.pre('save', function (next) {
    // Don't generate token if not a new one
    if (!this.isNew) {
        return next();
    }
    this.expiresAt = addMinutes_1.default(Date.now(), 15);
    this.markModified('expiresAt');
    crypto_1.default.randomBytes(16, (err, buffer) => {
        if (err) {
            return next(err);
        }
        this.token = buffer.toString('hex');
        next();
    });
});
TokenSchema.methods.hasExpired = function () {
    const token = this;
    const currentTime = new Date();
    return currentTime >= token.expiresAt;
};
const TokenModel = mongoose_1.default.model('Token', TokenSchema);
exports.default = TokenModel;
