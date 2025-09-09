import "../styles/post.css";
import type { post } from "../interfaces/post.interface.ts";
import Like from "./Like";
import { serverPath } from "../api/posts.ts";
import { Link } from "react-router";

function Post(props: post) {
  return (
    <section className="post">
      <Link to={`/post/${props.id}`}>
        <img
          src={`${serverPath}/images/${props.filename}`}
          alt="post-img"
          className="postImg"
        />
        <section className="description">
          <h2>Description</h2>
          <p>{props.description}</p>
        </section>
      </Link>
      <footer>
        <section className="postData">
          <p>{props.name}</p>
          <time>{props.time}</time>
        </section>
        <Like sum={props.likes} />
      </footer>
    </section>
  );
}

export default Post;
