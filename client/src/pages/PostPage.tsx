import "../styles/PostPage.css";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import type { post } from "../interfaces/post.interface.ts";
import Post from "../components/Post.tsx";
import { getPostService } from "../services/post.service.ts";

// This page is designed to display one post.
function PostPage() {
  const navigate = useNavigate();
  const params = useParams();
  const [post, setPost] = useState<null | post>(null);

  useEffect(() => getPostService(params.id, setPost, navigate), []);

  return (
    <>
      <section id="postSection">
        {post ? (
          <Post
            id={post.id}
            filename={post.filename}
            description={post.description}
            name={post.name}
            time={post.time}
            likes={post.likes}
          />
        ) : (
          <p>loading...</p>
        )}
      </section>
    </>
  );
}

export default PostPage;
