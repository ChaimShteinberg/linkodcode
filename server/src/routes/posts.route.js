import express from "express";
import { readAllPostsController } from "../controllers/posts.controller.js";

const postsRoute = express.Router();

postsRoute.get("/getAll", readAllPostsController);

export default postsRoute;
