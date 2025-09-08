import express from "express";
import {
  addPostController,
  getPostByIdController,
  readAllPostsController,
} from "../controllers/posts.controller.js";

const postsRoute = express.Router();

postsRoute.get("/getAll", readAllPostsController);

postsRoute.get("/:id", getPostByIdController);

postsRoute.post("addPost", addPostController);

export default postsRoute;
