import posts from "../assets/posts.json" with {type: "json"};

export function readposts() {
  if (posts) return {msg: "The posts were successfully loaded", posts};
  return {msg: "Error loading posts"}
}
