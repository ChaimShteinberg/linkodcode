import { getAllPostsService } from "../services/posts.service.js";

export function readAllPostsController(req, res) {
  const posts = getAllPostsService();
  res.json(posts);
}
