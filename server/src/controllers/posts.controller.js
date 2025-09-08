import { getAllPostsService } from "../services/posts.service.js";

export function readAllPostsController(req, res) {
  const posts = getAllPostsService();
  if (posts.msg === "The posts were successfully loaded") res.json(posts);
  res.status(400).json({ msg: "Error loading posts" });
}
