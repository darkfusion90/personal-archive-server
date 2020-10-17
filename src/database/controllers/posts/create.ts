import PostModel from "../../models/PostModel";

interface ICreatePostOpts {
    title: string
    link: string
    comment: string
    tags: string[]
    user: string
}

export function createPost({ title, link, comment, tags, user }: ICreatePostOpts) {
    const post = new PostModel({ title, link, comment, tags, user })
    return post.save()
}