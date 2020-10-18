"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.performLogin = void 0;
exports.performLogin = (user) => (req, res, next) => {
    req.login(user, err => {
        if (err) {
            return next(err);
        }
        res.json(user.filterSensitiveData());
    });
};
