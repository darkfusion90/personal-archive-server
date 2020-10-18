"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logout = (req, res) => {
    const success = () => res.json({ message: 'Logged out successfully' });
    if (req.session) {
        req.session.destroy(err => {
            if (err) {
                res.status(500).json({});
            }
            else {
                success();
            }
        });
    }
    else {
        // TODO: Maybe specify that session could not be found?
        success();
    }
};
exports.default = logout;
