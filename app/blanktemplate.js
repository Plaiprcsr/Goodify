"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  //const
  const router = useRouter();
  return (
    <div className="global-container">
      <div className="login-container"></div>
    </div>
  );
}
