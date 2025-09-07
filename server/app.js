import express from "express";
import postsRoute from "./src/routes/posts.route.js";

const app = express();

app.use(express.static("public"));

app.use(express.json());

app.use("/posts", postsRoute);

app.listen(process.env.PORT, () => {
  console.log("lisenning...");
});
