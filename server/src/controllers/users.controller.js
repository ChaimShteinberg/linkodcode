import { loginService, registerService } from "../services/users.service.js";

// Handles registration request
export async function registerController(req, res) {
  const { username, password } = req.body;
  const result = await registerService(username, password);
  if (result.token) {
    res.cookie("token", result.token, {
      httpOnly: true,
    });
  }
  res.json({ msg: result.msg });
}

// Handles login request
export async function loginController(req, res) {
  const { username, password } = req.body;
  const result = await loginService(username, password);
  if (result.token) {
    res.cookie("token", result.token, {
      httpOnly: true,
    });
  }
  res.json({ msg: result.msg });
}
