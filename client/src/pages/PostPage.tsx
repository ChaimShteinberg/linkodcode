import "../styles/PostPage.css";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { getPostById } from "../api/posts.ts";
import type { post } from "../interfaces/post.interface.ts";
import Post from "../components/Post.tsx";

function PostPage() {
  const navigate = useNavigate();

  const params = useParams();
  const [post, setPost] = useState<null | post>(null);

  useEffect(() => {
    async function allPosts() {
      const result = await getPostById(params.id);
      if (result.msg === "The posts were successfully loaded") {
        setPost(result.post);
      } else if (result.msg === "You must log in to the system") {
        navigate("/login");
      }
    }
    allPosts();
  }, []);

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
          <p>loading</p>
        )}
      </section>
    </>
  );
}

export default PostPage;
