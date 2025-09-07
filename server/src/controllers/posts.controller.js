import { readposts } from "../dal/post.dal.js";

export function readAllPostsController(req, res) {
  const posts = readposts();
  res.json(posts);
}
