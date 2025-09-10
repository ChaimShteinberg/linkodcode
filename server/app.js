import express from "express";
import cors from "cors";
import postsRoute from "./src/routes/posts.route.js";
import { usersRouter } from "./src/routes/auth.route.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin) return cb(null, true);
      if ("http://localhost:5173" === origin) {
        cb(null, true);
      } else {
        cb(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.static("public"));

app.use(cookieParser());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/users", usersRouter);

app.use("/posts", postsRoute);

app.listen(process.env.PORT, () => {
  console.log("lisenning...");
});
