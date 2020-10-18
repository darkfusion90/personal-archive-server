"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = void 0;
const PostModel_1 = __importDefault(require("../../models/PostModel"));
function deletePost(postId) {
    return PostModel_1.default.findByIdAndDelete(postId).exec();
}
exports.deletePost = deletePost;
