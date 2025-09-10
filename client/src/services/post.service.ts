import type { NavigateFunction } from "react-router";
import { getPosts } from "../api/posts";

export function getPostService(setLoad: Function, setPosts:Function, navigate:NavigateFunction): void {
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
}
