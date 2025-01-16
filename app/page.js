"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logging in with email: ${email} and password: ${password}`);
  };

  const isFormValid = email !== "" && password !== "";
  return (
    <div className="global-container">
      <div className="login-container">
        <img src="/images/bubbles.png" style={{ marginBottom: "8%" }}></img>
        <h1 className="login-heading-1">Welcome to Goodify!</h1>
        <h2 className="login-heading-2">
          Join a community spreading good vibes
        </h2>
        <div style={{ marginBottom: "8%" }}></div>
        <form onSubmit={handleLogin} className="login-form">
          <h3 className="login-heading-3">Login to your account</h3>
          <label htmlFor="email" className="login-input-label">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`login-input-field ${email ? "filled" : ""}`}
          />
          <label htmlFor="password" className="login-input-label">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={`login-input-field ${password ? "filled" : ""}`}
          />
          <span className="login-forgot">Forgot password?</span>
          <button
            type="submit"
            className="login-button"
            disabled={!isFormValid}
          >
            Login
          </button>
          <div className="login-double-text">
            <span className="login-no-account">Don't have an account?</span>
            <span className="login-register">Register here</span>
          </div>
        </form>
      </div>
    </div>
  );
}
