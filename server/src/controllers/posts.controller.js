import {
  getAllPostsService,
  getPostByIdService,
} from "../services/posts.service.js";

export function readAllPostsController(req, res) {
  const posts = getAllPostsService();
  if (posts.msg === "The posts were successfully loaded") {
    res.json(posts);
  } else {
    res.json({ msg: "Error loading posts" });
  }
}

export function getPostByIdController(req, res) {
  try {
    const id = Number(req.params.id);
  } catch {
    res.json({ msg: "id is not a number" });
  }
  const post = getPostByIdService(id);
  if (post.msg === "The posts were successfully loaded") {
    res.json(post);
  } else {
    res.json({ msg: "Error loading post" });
  }
}
