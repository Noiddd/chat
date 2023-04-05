"use client";

import React from "react";
import { SessionProvider as Provider } from "next-auth/react";

export default function SessionProvider({ children, session }) {
  return <Provider>{children}</Provider>;
}
