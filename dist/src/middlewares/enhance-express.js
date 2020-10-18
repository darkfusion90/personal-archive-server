"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enhanceExpress = (_, res, next) => {
    res.respondResource = function (data, dataFieldName) {
        const resourceName = dataFieldName ? dataFieldName : 'data';
        if (data === null || typeof data === 'undefined') {
            return res.status(404).json({ message: `${resourceName} not found` });
        }
        if (Array.isArray(data)) {
            res.json({
                [resourceName]: data,
                length: data.length
            });
        }
        else {
            res.json(data);
        }
    };
    next();
};
exports.default = enhanceExpress;
