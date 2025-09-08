export const serverPath = "http://localhost:1568";

export async function getPosts() {
  const res = await fetch(`${serverPath}/posts/getAll`);
  const posts = await res.json();
  return posts;
}
