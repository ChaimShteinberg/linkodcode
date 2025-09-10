import type { NavigateFunction } from "react-router";
import { addPostApi, getPostByIdApi, getPostsApi } from "../api/posts.ts";

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

export function addPostService(
  e: React.FormEvent<HTMLFormElement>,
  image: FileList | null,
  description: string,
  name: string,
  navigate: NavigateFunction
) {
  e.preventDefault();
  const formData = new FormData();
  if (image) formData.append("image", image[0]);
  formData.append("description", description);
  formData.append("name", name);
  formData.append("time", new Date().toLocaleString());
  async function add() {
    const result = await addPostApi(formData);
    if (result.msg === "The post was added successfully") {
      navigate("/");
    } else if (result.msg === "You must log in to the system") {
      navigate("/login");
    }
  }
  add();
}
