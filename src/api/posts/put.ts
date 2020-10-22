import posts from '../../database/controllers/posts'

import { sessionUser } from '../../utils'
import PutHandler, { PutRequest } from './typings/put'

const getUserId = (req: PutRequest): string => {
    const user = sessionUser(req)
    return user ? user.id : null
}

const post: PutHandler = async (req, res) => {
    const user = getUserId(req)
    const { postId } = req.params
    const { tags, title, comment, link } = req.body

    const resource = await posts.editPost(postId, { tags, title, comment, link, user })
    res.respondResource(resource, 'posts')
}

export default post