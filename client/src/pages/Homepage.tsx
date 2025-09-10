import "../styles/homepage.css";
import type { post } from "../interfaces/post.interface.ts";
import Post from "../components/Post.tsx";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { getPostsService } from "../services/post.service.ts";

function Homepage() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [load, setLoad] = useState("loading");

  useEffect(() => getPostsService(setLoad, setPosts, navigate), []);

  return (
    <>
      <h2>Posts</h2>
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
        <p>{load}</p>
      )}
    </>
  );
}

export default Homepage;
