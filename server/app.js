import express from "express";
import cors from "cors";
import multer from "multer";
import postsRoute from "./src/routes/posts.route.js";

const upload = multer({ dest: "uploads" });

const app = express();

app.use(cors());

app.use(express.static("public"));

app.use(express.json());

app.use("/posts", upload.array("files"), postsRoute);

app.listen(process.env.PORT, () => {
  console.log("lisenning...");
});
