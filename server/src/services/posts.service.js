import { readposts } from "../dal/post.dal.js";

export function getAllPostsService() {
  const posts = readposts()
  return posts;
}
