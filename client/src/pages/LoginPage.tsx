import "../styles/LoginPage.css";
import { useState } from "react";
import FormSection from "../components/FormSection.tsx";
import { handleSubmit } from "../api/users.ts";
import { useNavigate } from "react-router";

function LoginPage() {
  const navigate = useNavigate();

  const [currentForm, setCurrentForm] = useState("Login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [test, setTest] = useState(false)

  return (
    <main id="loginForm">
      <nav id="form-toggle">
        <button
          id={currentForm === "Login" ? "active" : ""}
          onClick={() => setCurrentForm("Login")}
        >
          Login
        </button>
        <button
          id={currentForm === "Register" ? "active" : ""}
          onClick={() => setCurrentForm("Register")}
        >
          Register
        </button>
      </nav>

      <form
        onSubmit={async (e) =>
          handleSubmit(e, username, password, currentForm, navigate, setTest)
        }
      >
        <FormSection
          label="Username"
          id="Username"
          type="text"
          setInput={setUsername}
        />

        <FormSection
          label="Password"
          id="Password"
          type="password"
          setInput={setPassword}
        />

        {test && <p>{test}</p>}

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </main>
  );
}

export default LoginPage;
