import "../styles/post.css";
import type { post } from "../interfaces/post.interface.ts";
import Like from "./Like";
import { serverPath } from "../api/posts.ts";

function Post(props: post) {
  return (
    <section className="post">
      <img
        src={`${serverPath}${props.imgUrl}`}
        alt="post-img"
        className="postImg"
      />
      <section className="description">
        <h2>Description</h2>
        <p>{props.description}</p>
      </section>
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
