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
