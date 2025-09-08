import { readposts } from "../dal/post.dal.js";

export function getAllPostsService() {
  const posts = readposts();
  if (posts.msg === "The posts were successfully loaded") return posts;
  return { msg: "Error loading posts" };
}
