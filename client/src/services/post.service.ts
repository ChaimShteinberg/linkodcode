import type { NavigateFunction } from "react-router";
import { getPostsApi } from "../api/posts";

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
