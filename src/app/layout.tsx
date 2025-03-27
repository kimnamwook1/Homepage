import type { Metadata } from "next";
import "./globals.css";
import { pfdintextpro } from "./fonts";
import { MenuProvider } from "@/lib/MenuContext";
import { AnimationProvider } from "@/lib/AnimationContext";

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
    <html lang="en" className="">
      <body className={`${pfdintextpro.variable}`}>
        <MenuProvider>
          <AnimationProvider>
            {children}
          </AnimationProvider>
        </MenuProvider>
      </body>
    </html>
  );
}
