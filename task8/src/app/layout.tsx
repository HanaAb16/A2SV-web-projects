// src/app/layout.tsx
import React from "react";
import './globals.css';

export const metadata = {
  title: "My App",
  description: "My Next.js 13 App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
