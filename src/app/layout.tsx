import type { Metadata } from "next";
import "./globals.css";
import { pfdintextpro } from "./fonts";

export const metadata: Metadata = {
  title: "TheJPC",
  description: "We create opportunity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pfdintextpro.variable}>{children}</body>
    </html>
  );
}
