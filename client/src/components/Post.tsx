import type { post } from "../interfaces/post.interface.ts";
import Like from "./Like";

function Post(props: post) {
  return (
    <>
      <img src={props.imgUrl} alt="post-img" />
      <h2>Description</h2>
      <p>{props.description}</p>
      <footer>
        <Like sum={props.likes} />
        <p>{props.name}</p>
        <time>{props.time}</time>
      </footer>
    </>
  );
}

export default Post;
