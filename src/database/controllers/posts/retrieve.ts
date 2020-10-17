import PostModel, { IPostDocument } from "../../models/PostModel";
import { FilterQuery } from "mongoose";

export type IPostSortType = 'title' | 'date'
export type IPostSortOrder = 'asc' | 'desc'

interface IPostSortOpts {
    sort?: IPostSortType,
    order?: IPostSortOrder
}

export interface IPostRetrieveFilterOpts {
    tags?: string[]
    query?: string
    sort?: IPostSortType
    order?: IPostSortOrder
}

function getSortOpts({ sort, order }: IPostSortOpts) {
    const getSortOrder = () => {
        switch (order) {
            case 'desc':
                return -1
            case 'asc':
            default:
                return 1
        }
    }

    const sortOrder = getSortOrder()
    switch (sort) {
        case 'title':
            return { title: sortOrder }
        case 'date':
            return { createdAt: sortOrder }
        default:
            return {}
    }
}

function getTagsRegex(tags: string[]) {
    // 'i' makes regex case insensitive
    return tags.map(tag => new RegExp(tag, 'i'))
}

export const getAllPostsOfUser = (
    userId: string,
    {
        tags,
        query: searchQuery,
        sort,
        order
    }: IPostRetrieveFilterOpts = {}
) => {
    const query: FilterQuery<IPostDocument> = {
        user: userId
    }

    if (tags) {
        query.tags = {
            $in: getTagsRegex(tags),
        }
    }

    if (searchQuery) {
        const searchRegex = new RegExp(searchQuery, 'i')
        query.$or = [
            { title: { $regex: searchRegex } },
            { comment: { $regex: searchRegex } }
        ]
    }

    return PostModel.find(query)
        // using collation, the sort will be case insensitive (Defaults to prefer A-Z over a-z)
        .collation({ locale: 'en' })
        .sort(getSortOpts({ sort, order }))
        .exec()
}

export function getPostById(id: string) {
    return PostModel.findById(id).exec()
}