"use client";
import React, { ReactNode } from "react";
import { AOSProvider } from "./AOSContext";
interface ProvidersProps {
  children: ReactNode; // Proper type for children
}
export default function Providers({ children }: ProvidersProps) {
  return <AOSProvider>{children}</AOSProvider>;
}
