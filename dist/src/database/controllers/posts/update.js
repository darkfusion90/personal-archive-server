"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editPost = void 0;
const PostModel_1 = __importDefault(require("../../models/PostModel"));
function editPost(postId, { title, link, comment, tags, user }) {
    return PostModel_1.default.findByIdAndUpdate(postId, { title, link, comment, tags, user }).exec();
}
exports.editPost = editPost;
