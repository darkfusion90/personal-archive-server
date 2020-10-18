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
const passport_1 = __importDefault(require("passport"));
const users_1 = require("../database/controllers/users");
const auth_1 = __importDefault(require("./auth"));
function default_1(app) {
    passport_1.default.use(auth_1.default);
    passport_1.default.serializeUser((user, done) => done(null, user.id));
    passport_1.default.deserializeUser((id, done) => __awaiter(this, void 0, void 0, function* () {
        const user = yield users_1.getUser(id).catch(done);
        console.log(`Deserialize ${id}: `, user);
        // Why passport why :(
        done(null, user ? user : undefined);
    }));
    app.use(passport_1.default.initialize());
    app.use(passport_1.default.session());
}
exports.default = default_1;
