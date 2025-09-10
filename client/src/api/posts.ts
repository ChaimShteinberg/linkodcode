export const serverPath = "http://localhost:1568";

export async function getPosts() {
  try {
    const res = await fetch(`${serverPath}/posts/getAll`, {
      credentials: "include",
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

export async function getPostById(id: string | undefined) {
  try {
    if (!id) {
      throw new Error("id is not defined");
    }
    const res = await fetch(`${serverPath}/posts/${id}`, {
      credentials: "include",
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

export async function addPost(newPost: FormData) {
  try {
    const res = await fetch(`${serverPath}/posts/addpost`, {
      method: "POST",
      body: newPost,
      credentials: "include",
    });
    const result = await res.json();
    if (result.msg === "The post was added successfully") {
      return result;
    }
    throw new Error(result.msg);
  } catch {
    return { msg: "Error loading posts" };
  }
}
