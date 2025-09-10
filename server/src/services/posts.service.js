import { readposts, writePosts } from "../dal/post.dal.js";

// Loads all posts
export function getAllPostsService() {
  const posts = readposts();
  if (posts.msg === "The posts were successfully loaded") return posts;
  return { msg: "Error loading posts" };
}

// Loads the posts and searches for the matching post by ID
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

// Adds a likes value to the post
// and also adds an ID
// and puts the post in the list of posts
export function addPostService(newPost) {
  const posts = readposts();
  newPost["likes"] = 0;
  newPost["id"] = posts.posts[0].id + 1;
  posts.posts.unshift(newPost);
  const res = writePosts(posts.posts);
  if (res.msg === "The post was added successfully") return res;
  return { msg: "Error adding post" };
}
