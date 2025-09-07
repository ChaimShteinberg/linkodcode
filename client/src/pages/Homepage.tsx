import "../styles/homepage.css";
import posts from "../assets/posts.json";
import type { post } from "../interfaces/post.interface.ts";
import Post from "../components/Post.tsx";

function Homepage() {
  return (
    <>
      <h2>home</h2>
      <article>
        {posts.map((post: post, index: number) => (
          <Post
            key={index}
            imgUrl={post.imgUrl}
            description={post.description}
            name={post.name}
            time={post.time}
            likes={post.likes}
          />
        ))}
      </article>
    </>
  );
}

export default Homepage;
