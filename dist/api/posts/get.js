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
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('req.query: ', req.query);
    const filterOpts = parseQuery(req.query);
    const { postId } = req.params;
    let resource;
    if (postId) {
        resource = yield posts_1.default.getPostById(postId);
    }
    else {
        const user = utils_1.sessionUser(req);
        if (user) {
            resource = yield posts_1.default.getAllPostsOfUser(user.id, filterOpts);
        }
        else {
            resource = [];
        }
    }
    res.respondResource(resource, 'posts');
});
const parseQuery = (reqQuery) => {
    const { tags, sort, query, order } = reqQuery;
    const parsedTags = tags ? tags.split(',') : undefined;
    return { sort, query, order, tags: parsedTags };
};
exports.default = get;
