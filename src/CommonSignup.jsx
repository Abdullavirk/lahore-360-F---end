import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CommonLogin.css";
import "./CommonLogin";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSign = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed.");
      }

      setSuccess("Account created successfully! Please log in.");

      // Signup ke baad login page par bhejo
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      setError(
        err.message || "Server se connection nahi ho saka."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Create Lahore360 Account</h2>

      <form onSubmit={handleSign}>
        {/* Name */}
        <div>
          <label htmlFor="name">Full Name</label>

          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            autoComplete="name"
            maxLength={70}
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email">Email</label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            autoComplete="email"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password">Password</label>

          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
            autoComplete="new-password"
            minLength={8}
            required
          />
        </div>

        {/* Error message */}
        {error && (
          <p style={{ color: "red" }} role="alert">
            {error}
          </p>
        )}

        {/* Success message */}
        {success && (
          <p style={{ color: "green" }} role="status">
            {success}
          </p>
        )}

        <button type="submit" disabled={loading}>
          {loading ? "Creating Account..." : "Sign Up"}
        </button>
      </form>

      <p style={{ textAlign: "center", marginTop: "20px" }}>
        Already have an account?{" "}
        <button
          type="button"
          onClick={() => navigate("/user/login")}
          disabled={loading}
          style={{
            width: "auto",
            padding: 0,
            background: "none",
            color: "#0f766e",
            border: "none",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </p>
    </div>
  );
}

export default Signup;