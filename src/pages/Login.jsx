import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate();

const handleLogin = () => {

  const storedUser =
    JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    alert("No user found. Please register.");
    return;
  }

  if (
    email === storedUser.email &&
    password === storedUser.password
  ) {
    alert("Login Successful");
    navigate("/dashboard");
  } else {
    alert("Invalid Credentials");
  }
};
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>JobConnect</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          Login
        </button>

        <p>
          Don't have an account?{" "}
          <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;