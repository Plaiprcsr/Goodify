"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  //const
  const router = useRouter();

  return (
    <div className="global-container">
      <div className="login-container">
        <img
          src="/images/back.png"
          style={{ alignSelf: "flex-start", cursor: "pointer" }}
          onClick={() => {
            router.push("/forgot/confirmReset");
          }}
        ></img>
        <img
          src="/images/shield.png"
          style={{ marginTop: "48px", marginBottom: "8px" }}
        ></img>
        <div className="mb-32"></div>
        <h1 className="login-heading-1">Successful</h1>
        <div className="mb-8"></div>
        <h2 className="forgot-h2">
          Congratulations! Your password has been changed. Click continue to
          login
        </h2>
        <div className="mb-32"></div>
        <button
          className="login-button"
          onClick={() => {
            router.push("/");
          }}
        >
          Back to login
        </button>
      </div>
    </div>
  );
}
