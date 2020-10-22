"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("../api");
const delete_validator_1 = __importDefault(require("../api/posts/middlewares/validators/delete-validator"));
function postsRouter(app) {
    const { middlewares: { validators: { getValidator, postValidator } } } = api_1.posts, posts = __rest(api_1.posts, ["middlewares"]);
    app.post(['/api/users/:userId/posts', '/api/posts'], postValidator, posts.post);
    app.get('/api/posts/:postId?', getValidator, posts.get);
    app.delete('/api/posts/:postId', delete_validator_1.default, posts._delete);
    app.put('/api/posts/:postId', postValidator, posts.put);
}
exports.default = postsRouter;
