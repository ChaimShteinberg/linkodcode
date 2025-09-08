import express from "express";
import { getPostByIdController, readAllPostsController } from "../controllers/posts.controller.js";

const postsRoute = express.Router();

postsRoute.get("/getAll", readAllPostsController);

postsRoute.get("/:id", getPostByIdController)

export default postsRoute;
