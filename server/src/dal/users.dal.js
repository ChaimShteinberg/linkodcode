import { writeFileSync } from "fs"
import users from "../assets/users.json" with {type: "json"};

// Loads all users from the file
export function readUsers() {
  if (users) return {msg: "The users were successfully loaded", users: users};
  return {msg: "Error loading users"}
}

// Inserts the updated list of users into the file
export function writeUsers(newUsers){
  writeFileSync("src/assets/users.json", JSON.stringify(newUsers, null, 2), "utf-8" )
  return {msg: "new user created successfully"}
}