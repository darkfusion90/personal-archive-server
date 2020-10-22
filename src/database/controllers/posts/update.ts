import PostModel from "../../models/PostModel";
import { IPostOpts } from "./shared";

export function editPost(postId: string, { title, link, comment, tags, user }: IPostOpts) {
    return PostModel.findByIdAndUpdate(postId, { title, link, comment, tags, user }).exec()
}