"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = __importDefault(require("url"));
function getAbsoluteUrl(relativeUrl) {
    const selfHost = process.env.SELF_HOST_ADDRESS || 'https://personalarchive.herokuapp.com';
    return url_1.default.resolve(selfHost, relativeUrl);
}
exports.default = getAbsoluteUrl;
