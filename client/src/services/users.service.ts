import type { NavigateFunction } from "react-router";
import { loginApi, registerApi } from "../api/users.ts";

// Handles sending the registration/login form
export async function handleSubmit(
  e: React.FormEvent<HTMLFormElement>,
  username: string,
  password: string,
  currentForm: string,
  navigate: NavigateFunction,
  setMessage: Function
) {
  e.preventDefault();
  let result;
  if (currentForm === "Login") {
    result = await loginApi(username, password);
  } else if (currentForm === "Register") {
    result = await registerApi(username, password);
  }
  if (result && result.bool) {
    navigate("/");
  } else {
    setMessage(result?.message);
  }
}
