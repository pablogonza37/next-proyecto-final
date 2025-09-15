"use client"

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

export const ClientProvider = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
