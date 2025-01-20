"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ConfirmReset() {
  // const
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordCriteria, setPasswordCriteria] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    match: false,
  });

  const [focused, setFocused] = useState(false);
  const router = useRouter();

  // password validation
  const validatePassword = (password) => {
    return {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
    };
  };

  // input changes
  const handleNewPasswordChange = (e) => {
    const value = e.target.value;
    setNewPassword(value);
    const criteria = validatePassword(value);
    setPasswordCriteria({
      ...criteria,
      match: value === confirmPassword && value !== "",
    });
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setPasswordCriteria((prev) => ({
      ...prev,
      match: newPassword === value && value !== "",
    }));
  };

  // focus handler
  const handleFocus = (field) => {
    setFocused(field);
  };

  const getConstraintsText = () => {
    return (
      <>
        {/* text cases */}
        {focused && (
          <div>
            <div className="reset-constraint-top">
              Please create a new password that meets the following
              requirements:
            </div>
            <ul>
              <li
                className="reset-constraints"
                style={{
                  color: passwordCriteria.match ? "green" : "red",
                }}
              >
                {passwordCriteria.match ? "✔" : "✕"} Passwords{" "}
                {passwordCriteria.match ? "match" : "does not match"}
              </li>
              <li
                className="reset-constraints"
                style={{
                  color: passwordCriteria.length ? "green" : "red",
                }}
              >
                {passwordCriteria.length ? "✔" : "✕"} At least 8 characters long
              </li>
              <li
                className="reset-constraints"
                style={{
                  color: passwordCriteria.number ? "green" : "red",
                }}
              >
                {passwordCriteria.number ? "✔" : "✕"} Contains at least one
                number {"(0-9)"}
              </li>
              <li
                className="reset-constraints"
                style={{
                  color: passwordCriteria.uppercase ? "green" : "red",
                }}
              >
                {passwordCriteria.uppercase ? "✔" : "✕"} Contains at least one
                uppercase letter {"(A-Z)"}
              </li>
              <li
                className="reset-constraints"
                style={{
                  color: passwordCriteria.lowercase ? "green" : "red",
                }}
              >
                {passwordCriteria.lowercase ? "✔" : "✕"} Contains at least one
                lowercase letter {"(a-z)"}
              </li>
            </ul>
          </div>
        )}
      </>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      passwordCriteria.length &&
      passwordCriteria.uppercase &&
      passwordCriteria.lowercase &&
      passwordCriteria.number &&
      passwordCriteria.match
    ) {
      //formdata for sai
      const formData = {
        newPassword: newPassword,
        confirmPassword: confirmPassword,
      };
      console.log(formData);

      // router.push("/forgot/confirmReset/success");
    }
  };

  return (
    <div className="global-container">
      <div className="login-container">
        <img
          src="/images/back.png"
          style={{ alignSelf: "flex-start", cursor: "pointer" }}
          onClick={() => {
            router.push("/forgot");
          }}
        ></img>
        <div className="mb-32"></div>
        <h1 className="login-heading-1">Set a new password</h1>
        <div className="mb-8"></div>
        <h2 className="forgot-h2">
          Create a new password. Ensure it differs from previous ones for
          security
        </h2>
        <div className="mb-24"></div>
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="login-input-label">New Password</label>
          <input
            type="password"
            placeholder="Enter your new password"
            value={newPassword}
            onChange={handleNewPasswordChange}
            onFocus={() => handleFocus(true)}
            required
            className="login-input-field"
          />
          <label className="login-input-label">Confirm Password</label>
          <input
            type="password"
            placeholder="Re-enter password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            onFocus={() => handleFocus(true)}
            required
            className="login-input-field"
          />
          {/* show text */}
          {focused && <div>{getConstraintsText()}</div>}

          <div className="mb-4"></div>
          <button
            type="submit"
            className="login-button"
            disabled={
              !passwordCriteria.length ||
              !passwordCriteria.uppercase ||
              !passwordCriteria.lowercase ||
              !passwordCriteria.number ||
              !passwordCriteria.match
            }
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
}
