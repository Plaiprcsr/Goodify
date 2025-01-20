"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false); // State for showing the popup

  const handleResetPassWord = async (e) => {
    e.preventDefault();
    //formdata for sai
    console.log("email", email);
  };

  // navigate
  const router = useRouter();

  return (
    <div className="global-container">
      <div className="login-container">
        <img
          src="/images/back.png"
          style={{ alignSelf: "flex-start", cursor: "pointer" }}
          onClick={() => {
            router.push("/");
          }}
        />
        <div className="mb-32"></div>
        <h1 className="login-heading-1">Forgot Password</h1>
        <div className="mb-8"></div>
        <h2 className="forgot-h2">
          Don’t worry! We can help you reset your password quickly.
        </h2>
        <div className="mb-24"></div>
        <form onSubmit={handleResetPassWord} className="login-form">
          <label className="login-input-label">Email</label>
          <input
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={`login-input-field ${email ? "filled" : ""}`}
          />

          <div
            className="login-error-message"
            style={{
              backgroundColor: "transparent",
              color: "#5F58B0",
              marginTop: "-8px",
            }}
          >
            We’ll send you a link to reset your password
          </div>
          <div className="mb-4"></div>
          <button type="submit" className="login-button" disabled={!email}>
            Send Email
          </button>
        </form>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-container">
            <img
              src="/images/close.png"
              style={{
                alignSelf: "right",
                justifySelf: "right",
                cursor: "pointer",
              }}
              onClick={() => setShowPopup(false)}
            />
            <div className="mb-12"></div>
            <img
              src="/images/popup-mail.png"
              style={{ alignSelf: "center", justifySelf: "center" }}
            />
            <div className="mb-12"></div>
            <h2 className="popup-title">Password reset link sent!</h2>
            <p className="popup-text">
              Please check your inbox and follow the instructions to reset your
              password. If you don’t see the email, check your spam folder or
              request a new link.
            </p>
            <button
              className="popup-close-button"
              onClick={() => setShowPopup(false)}
            >
              Got it
            </button>
          </div>
        </div>
      )}

      {/* Add some styling for the popup */}
      <style jsx>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(255, 255, 255, 0.9);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .popup-container {
          background: white;
          padding: 16px 16px 21px 16px;
          border-radius: 24px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
          width: 328px;
          height: 470px;
          border: 2px solid #9895f3;
        }

        .popup-close-button {
          width: 168px;
          height: 48px;
          padding: 12px 16px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 4px;
          border-radius: 8px;
          background-color: #4f46e5;
          color: white;
          font-family: Inter;
          font-size: 14px;
          font-style: normal;
          font-weight: 600;
          line-height: 20px; /* 142.857% */
          letter-spacing: 0.5px;
        }

        .popup-title {
          font-family: Inter;
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          line-height: 24px; /* 150% */
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }

        .popup-text {
          color: rgba(21, 25, 32, 0.5);
          text-align: center;
          font-family: Inter;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 18px; /* 150% */
          letter-spacing: 0.5px;
          margin-bottom: 32px;
        }
      `}</style>
    </div>
  );
}
