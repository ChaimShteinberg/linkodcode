import { readposts, writePosts } from "../dal/post.dal.js";

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

export function addPostService(newPost) {
  const posts = readposts();
  newPost["likes"] = 0;
  newPost["id"] = posts.posts[0].id + 1;
  posts.posts.unshift(newPost);
  const res = writePosts(posts.posts);
  if (res.msg === "The post was added successfully") return res;
  return { msg: "Error adding post" };
}
