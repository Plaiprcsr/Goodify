"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  //const
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  // login validation
  const handleLogin = async (e) => {
    e.preventDefault();
    const mockResponse =
      email === "plai@hotmail.com" && password === "123456"
        ? { success: true, message: "Login successful!" }
        : {
            success: false,
            message: "Invalid email or password. Please try again.",
          };
    try {
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve(mockResponse), 500)
      );

      if (!response.success) {
        setErrorMessage(response.message);
        setIsInvalid(true);
      } else {
        setErrorMessage("");
        setIsInvalid(false);
        console.log("email", email);
        console.log("password", password);
        const formData = {
          email: email,
          password: password,
        };
        console.log(formData);
        alert("Login successful!");
        // nav
        // router.push("/home")
      }
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again.");
      setIsInvalid(true);
    }
  };
  //logs

  // navigate
  const router = useRouter();

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
          {errorMessage && (
            <div className="login-error-message">{errorMessage}</div>
          )}
          <label className={`login-input-label ${isInvalid ? "error" : ""}`}>
            Email
          </label>
          <input
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`login-input-field ${email ? "filled" : ""}`}
          />
          <label className={`login-input-label ${isInvalid ? "error" : ""}`}>
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
          <span
            className="login-forgot"
            onClick={() => router.push("/forgot")}
            style={{ cursor: "pointer" }}
          >
            Forgot password?
          </span>
          <button
            type="submit"
            className="login-button"
            disabled={!isFormValid}
          >
            Login
          </button>
          <div className="login-double-text">
            <span className="login-no-account">Don't have an account?</span>
            <span
              className="login-register"
              onClick={() => router.push("/register")}
              style={{ cursor: "pointer" }}
            >
              Register here
            </span>
          </div>
        </form>
        <div className="social-login-container">
          <div className="divider">
            <div className="divider-line"></div>
            <span className="divider-text">OR</span>
          </div>

          <div className="social-login">
            <p className="login-text">Login with</p>
            <div className="social-buttons">
              <button className="social-button">
                <img
                  src="/images/google.png"
                  alt="Login with Google"
                  className="social-icon"
                  style={{ cursor: "pointer" }}
                />
              </button>
              <button className="social-button">
                <img
                  src="/images/facebook.png"
                  alt="Login with Facebook"
                  className="social-icon"
                  style={{ cursor: "pointer" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
