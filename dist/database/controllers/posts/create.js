"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPost = void 0;
const PostModel_1 = __importDefault(require("../../models/PostModel"));
function createPost({ title, link, comment, tags, user }) {
    const post = new PostModel_1.default({ title, link, comment, tags, user });
    return post.save();
}
exports.createPost = createPost;
