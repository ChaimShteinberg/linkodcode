import { registerService } from "../services/users.service.js";

export async function registerController(req, res) {
  const { username, password } = req.body;
  const result = await registerService(username, password);
  res.json(result)
}
