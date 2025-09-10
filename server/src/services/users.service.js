import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { readUsers, writeUsers } from "../dal/users.dal.js";

export async function registerService(username, password) {
  const hash_password = await bcrypt.hash(password, 12);
  const users = readUsers();
  if (users.msg === "The users were successfully loaded") {
    users.users.push({ username, hash_password, role: "user" });
    const result = writeUsers(users.users);
    users.msg = result.msg;
    const token = jwt.sign({ username, role: "user" }, process.env.SECRET);
    return { msg: users.msg, username, token };
  }
  return { msg: users.msg };
}

export async function loginService(username, password) {
  const users = readUsers();
  if (users.msg === "The users were successfully loaded") {
    const user = await searchUser(users.users, username, password);
    if (user.msg === "found user") {
    }
    users.msg = user.msg;
    const token = jwt.sign({ username, role: user.role }, process.env.SECRET);
    return { msg: users.msg, username, token };
  }
  return { msg: users.msg };
}

async function searchUser(users, username, password) {
  for (const user of users) {
    if (user.username === username) {
      const passwordMatch = await bcrypt.compare(password, user.hash_password);
      if (!passwordMatch) return { msg: "Wrong password" };
      return { msg: "found user", user };
    }
  }
  return {msg: "user not found"}
}
