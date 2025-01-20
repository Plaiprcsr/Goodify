"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function VerifyRegister() {
  //const
  const router = useRouter();
  return (
    <div className="global-container">
      <div className="login-container">
        <img src="/images/verify.png" style={{ alignSelf: "center" }} />
        <div className="mb-32"></div>
        <h1 className="regis-heading-24">Verify Your Email</h1>
        <div className="mb-8"></div>
        <h2 className="forgot-h2">
          Please verify your email to complete your registration. Start sharing
          good stories once your email is confirmed!
        </h2>
      </div>
    </div>
  );
}
