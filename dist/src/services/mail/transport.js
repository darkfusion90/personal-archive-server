"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const config_1 = __importDefault(require("./config"));
const transport = nodemailer_1.default.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    auth: {
        user: config_1.default.username,
        pass: config_1.default.password
    },
});
exports.sendMail = (opts) => {
    console.log({ mailConfig: config_1.default });
    return transport.sendMail(Object.assign(Object.assign({}, opts), { from: config_1.default.username }));
};
exports.default = transport;
