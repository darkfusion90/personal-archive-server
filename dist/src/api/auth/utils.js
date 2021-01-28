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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserAuthStatus = exports.performMultifactorLogout = exports.performMultifactorLogin = exports.performSimpleLogin = exports.performLoginRequestHandler = void 0;
const utils_1 = require("../../utils");
const auth_details_1 = require("../../database/controllers/auth-details");
exports.performLoginRequestHandler = (user) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authenticatedUser = yield exports.performSimpleLogin(user, req);
        res.json(authenticatedUser);
    }
    catch (err) {
        next(err);
    }
});
exports.performSimpleLogin = (user, req) => {
    return new Promise((resolve, reject) => {
        req.login(user, err => {
            if (err) {
                reject(err);
            }
            resolve(user.filterSensitiveData());
        });
    });
};
exports.performMultifactorLogin = (req) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        if (!req.session) {
            return reject('Session missing from req object');
        }
        req.session.multifactorAuthenticated = true;
        req.session.save((err) => {
            if (err) {
                console.log('Error saving session on multifactor login: ');
                return reject(err);
            }
            console.log('After session save on multifactor login: ', req.session);
            resolve();
        });
    });
});
exports.performMultifactorLogout = (req) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        if (!req.session) {
            return reject('Session missing from req object');
        }
        req.session.multifactorAuthenticated = false;
        req.session.save((err) => {
            if (err) {
                console.log('Error saving session on multifactor logout: ');
                return reject(err);
            }
            console.log('After session save on multifactor logout: ', req.session);
            resolve();
        });
    });
});
exports.getUserAuthStatus = (req) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const basicLoggedIn = req.isAuthenticated();
    if (!basicLoggedIn) {
        console.log('Not logged in at all');
        return { user: null, loggedIn: false };
    }
    const user = utils_1.sessionUser(req);
    if (!user) {
        console.log('No user in session');
        return { user, loggedIn: false };
    }
    const authDetails = yield auth_details_1.getUserAuthDetails(user.id);
    if (!authDetails) {
        console.log('Auth details not available; no need to check multifactor');
        // Auth details not available; no need to check multifactor
        return {
            user,
            loggedIn: true,
            singleFactorLoggedIn: true
        };
    }
    const multifactorAuthEnabled = authDetails.multiFactorAuthEnabled;
    if (!multifactorAuthEnabled) {
        console.log('Multifactor auth not enabled. Will not perform multifactor checks');
        return {
            user,
            loggedIn: true,
            singleFactorLoggedIn: true,
            multifactorAuthEnabled,
            emailVerified: authDetails.emailVerified
        };
    }
    const loggedIn = Boolean(basicLoggedIn && ((_a = req.session) === null || _a === void 0 ? void 0 : _a.multifactorAuthenticated));
    return {
        user,
        loggedIn,
        singleFactorLoggedIn: true,
        multifactorAuthEnabled,
        emailVerified: authDetails.emailVerified
    };
});
