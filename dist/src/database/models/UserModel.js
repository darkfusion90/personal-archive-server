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
exports.UserSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const kPasswordSalt = 14;
const UserSchema = new mongoose_1.default.Schema({
    username: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
        trim: true
    },
    password: {
        type: mongoose_1.default.Schema.Types.String,
        required: true
    }
});
exports.UserSchema = UserSchema;
UserSchema.methods.doesPasswordMatch = function (password) {
    return bcrypt_1.default.compare(password, this.password);
};
UserSchema.methods.filterSensitiveData = function () {
    const { username, email } = this;
    return { username, email };
};
UserSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = this;
        // user.isNew will also be handled by this condition (a new user's password is always "modified")
        if (!user.isModified('password')) {
            return next();
        }
        try {
            user.password = yield bcrypt_1.default.hash(user.password, kPasswordSalt);
            next();
        }
        catch (err) {
            console.log('Error hashing password: ', err);
            next(err);
        }
    });
});
const UserModel = mongoose_1.default.model('user', UserSchema);
exports.default = UserModel;
