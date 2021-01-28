"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionUserId = void 0;
exports.sessionUserId = (req) => {
    // TODO: Maybe better throw error on no session present
    const user = sessionUser(req);
    return user ? user.id : null;
};
function sessionUser(req) {
    return req.user;
}
exports.default = sessionUser;
