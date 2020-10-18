"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    if (process.env.NODE_ENV === 'production') {
        return console.log('Production mode. Will not initialize using dotenv');
    }
    try {
        require('dotenv').config();
    }
    catch (err) {
        console.log('Error retrieving dotenv: ', err);
    }
};
