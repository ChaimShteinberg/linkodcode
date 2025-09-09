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
