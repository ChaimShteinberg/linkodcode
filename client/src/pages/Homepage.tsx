import "../styles/homepage.css";
import type { post } from "../interfaces/post.interface.ts";
import Post from "../components/Post.tsx";
import { getPosts } from "../api/posts.ts";
import { useEffect, useState } from "react";

function Homepage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function allPosts() {
      setPosts(await getPosts());
    }
    allPosts();
  });

  return (
    <>
      <h2>home</h2>
      {/* A loop that goes through all posts and displays each one in a separate component */}
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
