import { PostHandler, PostRequest } from './typings'
import posts from '../../database/controllers/posts'

import { sessionUser } from '../../utils'

const getUserId = (req: PostRequest): string => {
    if (req.params.userId) {
        return req.params.userId
    }

    const user = sessionUser(req)
    return user ? user.id : null
}

const post: PostHandler = async (req, res) => {
    const user = getUserId(req)
    const { tags, title, comment, link } = req.body

    const resource = await posts.createPost({ tags, title, comment, link, user })
    res.respondResource(resource, 'posts')
}

export default post