"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const account_router_1 = __importDefault(require("./account-router"));
const auth_router_1 = __importDefault(require("./auth-router"));
const posts_router_1 = __importDefault(require("./posts-router"));
const config_1 = __importDefault(require("../config"));
function default_1(app) {
    account_router_1.default(app);
    auth_router_1.default(app);
    posts_router_1.default(app);
    if (process.env.NODE_ENV === 'production') {
        app.get('*', (_, res) => {
            res.sendFile(path_1.default.join(config_1.default.staticRoot, 'index.html'));
        });
    }
}
exports.default = default_1;
