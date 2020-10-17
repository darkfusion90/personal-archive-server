import mongoose from 'mongoose'

export interface IPostDocument extends mongoose.Document {
    title: string
    link?: string
    comment?: string
    tags?: string[],
    user: string
}

const PostSchema = new mongoose.Schema<IPostDocument>({
    title: {
        type: mongoose.Schema.Types.String,
        required: true,
        text: true,
        trim: true
    },
    link: {
        type: mongoose.Schema.Types.String,
        trim: true
    },
    comment: {
        type: mongoose.Schema.Types.String,
        text: true,
        trim: true
    },
    tags: {
        type: [mongoose.Schema.Types.String],
        index: true,
        default: []
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true })

const PostModel = mongoose.model<IPostDocument>('post', PostSchema)

export { PostSchema }
export default PostModel
