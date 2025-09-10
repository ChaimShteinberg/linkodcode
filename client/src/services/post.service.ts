import type { NavigateFunction } from "react-router";
import { getPostByIdApi, getPostsApi } from "../api/posts.ts";

export function getPostsService(
  setLoad: Function,
  setPosts: Function,
  navigate: NavigateFunction
): void {
  async function allPosts() {
    const result = await getPostsApi();
    if (result.msg === "The posts were successfully loaded") {
      setLoad("posts");
      setPosts(result.posts);
    } else if (result.msg === "You must log in to the system") {
      navigate("/login");
    } else {
      setLoad(result.msg);
    }
  }
  allPosts();
}

export function getPostService(
  id: string | undefined,
  setPost: Function,
  navigate: NavigateFunction
) {
  async function getPost() {
    const result = await getPostByIdApi(id);
    if (result.msg === "The posts were successfully loaded") {
      setPost(result.post);
    } else if (result.msg === "You must log in to the system") {
      navigate("/login");
    }
  }
  getPost();
}
