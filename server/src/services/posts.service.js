import { readposts } from "../dal/post.dal.js";

export function getAllPostsService() {
  const posts = readposts();
  if (posts.msg === "The posts were successfully loaded") return posts;
  return { msg: "Error loading posts" };
}

export function getPostByIdService(id) {
  try {
    const posts = readposts();
    for (const post of posts.posts) {
      if (post.id === id) {
        return { msg: posts.msg, post };
      }
    }
  } catch (err) {
    return { msg: "Error loading post" };
  }
}
