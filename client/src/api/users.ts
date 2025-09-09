import type { NavigateFunction } from "react-router";

export const serverPath = "http://localhost:1568";

export async function handleSubmit(
  e: React.FormEvent<HTMLFormElement>,
  username: string,
  password: string,
  currentForm: string,
  navigate: NavigateFunction
) {
  e.preventDefault();
  let result;
  if (currentForm === "Login") {
    result = await login(username, password);
  } else if (currentForm === "Register") {
    result = await register(username, password);
  }
  if (result && result.bool) {
    navigate("/");
  } else {
    // alert(result.message);
  }
}

export async function register(username: string, password: string) {
  try {
    const res = await fetch(`${serverPath}/users/register`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
    });
    const result = await res.json();
    return {
      bool: result.msg === "new user created successfully",
      message: result.message,
    };
  } catch (err) {
    console.log(err);
  }
}

export async function login(username: string, password: string) {
  try {
    const res = await fetch(`${serverPath}/users/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
    });
    const result = await res.json();
    return {
      bool: result.msg === "found user",
      message: result.message,
    };
  } catch (err) {
    console.log(err);
  }
}
