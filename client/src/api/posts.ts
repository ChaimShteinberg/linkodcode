export const serverPath = "http://localhost:1568";

// Sends an API request to get all posts
export async function getPostsApi() {
  try {
    const res = await fetch(`${serverPath}/posts/getAll`, {
      credentials: "include",
    });
    const result = await res.json();
    return result;
  } catch {
    return { msg: "Error loading posts" };
  }
}
// Sends an API request to get a post by ID
export async function getPostByIdApi(id: string | undefined) {
  try {
    if (!id) {
      throw new Error("id is not defined");
    }
    const res = await fetch(`${serverPath}/posts/${id}`, {
      credentials: "include",
    });
    const result = await res.json();
    return result;
  } catch {
    return { msg: "Error loading posts" };
  }
}

// Sends an API request with a new post to add to the posts list
export async function addPostApi(newPost: FormData) {
  try {
    const res = await fetch(`${serverPath}/posts/addpost`, {
      method: "POST",
      body: newPost,
      credentials: "include",
    });
    const result = await res.json();
    return result;
  } catch {
    return { msg: "Error loading posts" };
  }
}
