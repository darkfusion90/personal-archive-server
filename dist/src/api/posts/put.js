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
const posts_1 = __importDefault(require("../../database/controllers/posts"));
const utils_1 = require("../../utils");
const getUserId = (req) => {
    const user = utils_1.sessionUser(req);
    return user ? user.id : null;
};
const post = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = getUserId(req);
    const { postId } = req.params;
    const { tags, title, comment, link } = req.body;
    const resource = yield posts_1.default.editPost(postId, { tags, title, comment, link, user });
    res.respondResource(resource, 'posts');
});
exports.default = post;
