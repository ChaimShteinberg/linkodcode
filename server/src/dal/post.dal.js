import { writeFileSync } from "fs"
import posts from "../assets/posts.json" with {type: "json"};

export function readposts() {
  if (posts) return {msg: "The posts were successfully loaded", posts};
  return {msg: "Error loading posts"}
}

export function writePosts(newPosts){
  writeFileSync("src/assets/posts.json", JSON.stringify(newPosts, null, 2), "utf-8" )
  return {msg: "The post was added successfully"}
}