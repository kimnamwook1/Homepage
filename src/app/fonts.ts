import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const pfdintextpro = localFont({
  src: [
    {
      path: "../../public/fonts/pfdintextpro-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/pfdintextpro-medium-webfont.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/pfdintextpro-bold-webfont.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-pfdintextpro",
});
