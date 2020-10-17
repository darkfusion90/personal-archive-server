import { Application } from 'express'
import { posts as postsHandler } from '../api'
import deleteValidator from '../api/posts/middlewares/validators/delete-validator'

export default function postsRouter(app: Application) {
    const {
        middlewares: { validators: { getValidator, postValidator } },
        ...posts
    } = postsHandler

    app.post(
        ['/api/users/:userId/posts', '/api/posts'],
        postValidator,
        posts.post
    )
    app.get(
        '/api/posts/:postId?',
        getValidator,
        posts.get
    )
    app.delete(
        '/api/posts/:postId',
        deleteValidator,
        posts._delete
    )
}