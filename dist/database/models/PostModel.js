"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const PostSchema = new mongoose_1.default.Schema({
    title: {
        type: mongoose_1.default.Schema.Types.String,
        required: true,
        text: true,
        trim: true
    },
    link: {
        type: mongoose_1.default.Schema.Types.String,
        trim: true
    },
    comment: {
        type: mongoose_1.default.Schema.Types.String,
        text: true,
        trim: true
    },
    tags: {
        type: [mongoose_1.default.Schema.Types.String],
        index: true,
        default: []
    },
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });
exports.PostSchema = PostSchema;
const PostModel = mongoose_1.default.model('post', PostSchema);
exports.default = PostModel;
