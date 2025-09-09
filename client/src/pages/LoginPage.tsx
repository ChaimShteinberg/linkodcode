import "../styles/LoginPage.css";
import { useState } from "react";
import FormSection from "../components/FormSection.tsx";

function LoginPage() {
  const [currentForm, setCurrentForm] = useState("Login");
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

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

      <form onSubmit={async () => {}}>
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

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </main>
  );
}

export default LoginPage;
