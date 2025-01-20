"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SuccessRegister() {
  //const
  const router = useRouter();
  return (
    <div className="global-container">
      <div className="login-container">
        <img src="/images/regissuccess.png" style={{ alignSelf: "center" }} />
        <div className="mb-32"></div>
        <h1 className="regis-heading-24">Registration Complete 🎉</h1>
        <div className="mb-8"></div>
        <h2 className="forgot-h2">
          Your registration is complete. Start sharing good stories now!
        </h2>
        <div className="mb-24"></div>
        <button
          type="button"
          className="login-button"
          onClick={() => router.push("/")}
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}
