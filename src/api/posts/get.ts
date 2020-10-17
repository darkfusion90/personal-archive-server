import { GetHandler } from './typings'
import { IPostDocument } from '../../database/models/PostModel'
import posts, { IPostRetrieveFilterOpts } from '../../database/controllers/posts'
import { sessionUser } from '../../utils'
import { RequestQuery } from './typings/get'

const get: GetHandler = async (req, res) => {
    console.log('req.query: ', req.query)
    const filterOpts = parseQuery(req.query)
    const { postId } = req.params

    let resource: RespondResource<IPostDocument>
    if (postId) {
        resource = await posts.getPostById(postId)
    } else {
        const user = sessionUser(req as any)
        if (user) {
            resource = await posts.getAllPostsOfUser(user.id, filterOpts)
        } else {
            resource = []
        }
    }

    res.respondResource(resource, 'posts')
}

const parseQuery = (reqQuery: RequestQuery): IPostRetrieveFilterOpts => {
    const { tags, sort, query, order } = reqQuery

    const parsedTags = tags ? tags.split(',') : undefined

    return { sort, query, order, tags: parsedTags }
}

export default get