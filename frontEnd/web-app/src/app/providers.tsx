"use client";

import { ThemeProvider } from "next-themes";
import React from "react";


export function Providers({ children }: { children: React.ReactNode }) {
  return (
    // Wrap your children with the ThemeProvider
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}
