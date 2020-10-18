"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostById = exports.getAllPostsOfUser = void 0;
const PostModel_1 = __importDefault(require("../../models/PostModel"));
function getSortOpts({ sort, order }) {
    const getSortOrder = () => {
        switch (order) {
            case 'desc':
                return -1;
            case 'asc':
            default:
                return 1;
        }
    };
    const sortOrder = getSortOrder();
    switch (sort) {
        case 'title':
            return { title: sortOrder };
        case 'date':
            return { createdAt: sortOrder };
        default:
            return {};
    }
}
function getTagsRegex(tags) {
    // 'i' makes regex case insensitive
    return tags.map(tag => new RegExp(tag, 'i'));
}
exports.getAllPostsOfUser = (userId, { tags, query: searchQuery, sort, order } = {}) => {
    const query = {
        user: userId
    };
    if (tags) {
        query.tags = {
            $in: getTagsRegex(tags),
        };
    }
    if (searchQuery) {
        const searchRegex = new RegExp(searchQuery, 'i');
        query.$or = [
            { title: { $regex: searchRegex } },
            { comment: { $regex: searchRegex } }
        ];
    }
    return PostModel_1.default.find(query)
        // using collation, the sort will be case insensitive (Defaults to prefer A-Z over a-z)
        .collation({ locale: 'en' })
        .sort(getSortOpts({ sort, order }))
        .exec();
};
function getPostById(id) {
    return PostModel_1.default.findById(id).exec();
}
exports.getPostById = getPostById;
