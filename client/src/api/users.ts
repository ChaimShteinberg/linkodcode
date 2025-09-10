export const serverPath = "http://localhost:1568";

export async function registerApi(username: string, password: string) {
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
      message: result.msg,
    };
  } catch (err) {
    return { message: err };
  }
}

export async function loginApi(username: string, password: string) {
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
      message: result.msg,
    };
  } catch (err) {
    return { message: err };
  }
}
