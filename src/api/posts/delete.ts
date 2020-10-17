import { DeleteHandler } from './typings'
import { deletePost } from '../../database/controllers/posts'

const _delete: DeleteHandler = async (req, res) => {
    await deletePost(req.params.postId)
    res.json({ success: true, message: 'Post deleted successfully' })
}

export default _delete