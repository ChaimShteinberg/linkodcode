import type { inputPost } from "../interfaces/inputPost.ts";

export const serverPath = "http://localhost:1568";

export async function getPosts() {
  try {
    const res = await fetch(`${serverPath}/posts/getAll`);
    const result = await res.json();
    if (result.msg === "The posts were successfully loaded") {
      return result;
    }
    throw new Error(result.msg);
  } catch {
    return { msg: "Error loading posts" };
  }
}

export async function getPostById(newPost: inputPost) {
  try {
    const res = await fetch(`${serverPath}/posts/getAll`, {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "content-type": "application/json",
      },
    });
    const result = await res.json();
    if (result.msg === "The posts were successfully loaded") {
      return result;
    }
    throw new Error(result.msg);
  } catch {
    return { msg: "Error loading posts" };
  }
}

export async function addPost(newPost: any) {
  try {
    const res = await fetch(`${serverPath}/posts/addpost`, {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "content-type": "application/json",
      },
    });
    const result = await res.json();
    if (result.msg === "The posts were successfully loaded") {
      return result;
    }
    throw new Error(result.msg);
  } catch {
    return { msg: "Error loading posts" };
  }
}
