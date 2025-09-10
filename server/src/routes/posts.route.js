import express from "express";
import multer from "multer";
import {
  addPostController,
  getPostByIdController,
  readAllPostsController,
} from "../controllers/posts.controller.js";
import { auth } from "../middlewares/auth.middleware.js";

const storge = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: storge });

const postsRoute = express.Router();

postsRoute.use(auth);

postsRoute.get("/getAll", readAllPostsController);

postsRoute.get("/:id", getPostByIdController);

postsRoute.post("/addPost", upload.single("image"), addPostController);

export default postsRoute;
