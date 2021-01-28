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
const utils_1 = require("./utils");
const utils_2 = require("./multi-factor-auth/utils");
const login = (req, res, next) => {
    passport_1.default.authenticate('local', (err, user, info) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('Login Handler');
        if (err) {
            console.log('Error in login handler: ', err);
            throw err;
        }
        if (!user) {
            console.log('User not found for login credentials. Login Failed');
            return res.status(401).json(info);
        }
        // Performing simple passport login here
        //      If MultiFactor auth disabled:
        //          login success, respond with user details
        //      else:
        //          If device trusted: perform multifactor login. Hence completely loggedIn
        //          If device not trusted: respond with 401 Unauthorized. Hence, partially loggedIn
        //                                 loggedIn. The partial login is required to allow access
        //                                 to token generation/verification api endpoints
        //                                 because we get user (for whom to generate token) from the session itself
        const authenticatedUser = yield utils_1.performSimpleLogin(user, req);
        const { multifactorAuthEnabled } = yield utils_1.getUserAuthStatus(req);
        if (multifactorAuthEnabled) {
            if (yield utils_2.isCurrentDeviceTrusted(req)) {
                console.log('MultifactorAuth: Current device trusted. will login');
                yield utils_1.performMultifactorLogin(req);
            }
            else {
                console.log('MultifactorAuth: Current device not trusted. Will respond login failed');
                return res.status(401).json({
                    message: 'device-not-trusted',
                    device: utils_2.getUserDeviceInfo(req)
                });
            }
        }
        if (req.session) {
            // One Week
            req.session.cookie.maxAge = 604800000;
        }
        console.log('Authentication process completed. Will respond with: ', authenticatedUser);
        res.json(authenticatedUser);
    }))(req, res, next);
};
exports.default = login;
