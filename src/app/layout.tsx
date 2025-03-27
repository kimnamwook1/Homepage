import type { Metadata } from "next";
import "./globals.css";
import { pfdintextpro } from "./fonts";
import { MenuProvider } from "@/lib/MenuContext";

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
    <html lang="en" className="dark">
      <body className={`${pfdintextpro.variable}`}>
        <MenuProvider>
          {children}
        </MenuProvider>
      </body>
    </html>
  );
}
