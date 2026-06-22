import { Link } from "react-router-dom";
import "./Login.css";

function Register() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Create Account</h2>

        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button>Register</button>
        <p>
             Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;