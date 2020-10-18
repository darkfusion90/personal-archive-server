"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../config"));
function default_1() {
    mongoose_1.default.connection.on('open', () => console.log('Connected'));
    return new Promise((resolve, reject) => {
        mongoose_1.default.connect(config_1.default.mongoUrl, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
            useCreateIndex: true
        }, err => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
}
exports.default = default_1;
