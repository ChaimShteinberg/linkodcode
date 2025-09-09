import express from "express";
import cors from "cors";
import postsRoute from "./src/routes/posts.route.js";

const app = express();

app.use(cors());

app.use(express.static("public"));

app.use(express.json());

app.use(express.urlencoded({extended: true}))

app.use("/posts", postsRoute);

app.listen(process.env.PORT, () => {
  console.log("lisenning...");
});
