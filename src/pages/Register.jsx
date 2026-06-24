import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleRegister = () => {
  if (!name) {
    alert("Please enter name");
    return;
  }

  if (!email) {
    alert("Please enter email");
    return;
  }

  if (!password) {
    alert("Please enter password");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  const user = {
    name,
    email,
    password,
  };

  localStorage.setItem("user", JSON.stringify(user));

  alert("Registration Successful");

  console.log(localStorage.getItem("user"));
};


  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleRegister}>
          Register
        </button>

        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;