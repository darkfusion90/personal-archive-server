import PostModel from "../../models/PostModel";
import { IPostOpts } from './shared'

export function createPost({ title, link, comment, tags, user }: IPostOpts) {
    const post = new PostModel({ title, link, comment, tags, user })
    return post.save()
}