"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Escape special regex characters
// Without this, searching for '.' will match everything instead of matching only '.'
function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
exports.default = escapeRegex;
