import "../styles/homepage.css";
import type { post } from "../interfaces/post.interface.ts";
import Post from "../components/Post.tsx";
import { getPosts } from "../api/posts.ts";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

function Homepage() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [load, setLoad] = useState("loading");

  useEffect(() => {
    async function allPosts() {
      const result = await getPosts();
      if (result.msg === "The posts were successfully loaded") {
        setLoad("posts");
        setPosts(result.posts);
      } else if (result.msg === "You must log in to the system") {
        navigate("/login");
      } else {
        setLoad("error");
      }
    }
    allPosts();
  }, []);

  return (
    <>
      <h2>home</h2>
      <Link to="/addPost" className="btn">
        Add new post
      </Link>
      {/* A loop that goes through all posts and displays each one in a separate component */}
      {load === "posts" ? (
        <article>
          {posts.map((post: post) => (
            <Post
              key={post.id}
              id={post.id}
              filename={post.filename}
              description={post.description}
              name={post.name}
              time={post.time}
              likes={post.likes}
            />
          ))}
        </article>
      ) : load === "loading" ? (
        <p>Loading posts...</p>
      ) : (
        <p>Error loading posts</p>
      )}
    </>
  );
}

export default Homepage;
