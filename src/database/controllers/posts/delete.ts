import PostModel from "../../models/PostModel";

export function deletePost(postId: string) {
    return PostModel.findByIdAndDelete(postId).exec()
}