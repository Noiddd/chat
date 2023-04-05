"use client";

import React from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Login() {
  return (
    <div>
      <Image
        src="https://links.papareact.com/2i6"
        alt="logo"
        width={300}
        height={300}
      />
      <button>Sign in to use messenger</button>
    </div>
  );
}
