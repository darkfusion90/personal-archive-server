"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_session_1 = __importDefault(require("express-session"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../config"));
function default_1(app) {
    const MongoStore = connect_mongo_1.default(express_session_1.default);
    app.use(express_session_1.default({
        store: new MongoStore({
            mongooseConnection: mongoose_1.default.connection
        }),
        // Removing <as string> gives error TS2322: Type 'string | undefined' is not assignable to type 'string | string[]'. 
        // TODO: Resolve
        secret: config_1.default.sessionSecret,
        resave: false,
        saveUninitialized: true,
        cookie: {
            httpOnly: false
        }
    }));
}
exports.default = default_1;
