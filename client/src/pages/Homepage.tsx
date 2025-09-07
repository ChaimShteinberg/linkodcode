import "../styles/homepage.css";
import posts from "../assets/posts.json";
import Header from "../components/Header.tsx";
import type { post } from "../interfaces/post.interface.ts";
import Post from "../components/Post.tsx";

function Homepage() {
  return (
    <>
      <Header />
      <main>
        <h2>home</h2>
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
      </main>
    </>
  );
}

export default Homepage;
