"use client";

import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/Navbar";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
