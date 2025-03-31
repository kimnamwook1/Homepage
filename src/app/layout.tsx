import type { Metadata } from "next";
import "./globals.css";
import { pfdintextpro } from "./fonts";
import { MenuProvider } from "@/lib/MenuContext";
import { AnimationProvider } from "@/lib/AnimationContext";

export const metadata: Metadata = {
  title: "TheJPC",
  description: "We create opportunity.",
  openGraph: {
    title: "TheJPC",
    description: "We create opportunity.",
    url: "https://www.thejpc.kr",
    siteName: "TheJPC",
    images: [
      {
        url: "/images/thejpc-og-image.png", // 새 OG 이미지 경로
        width: 1200,
        height: 630,
        alt: "TheJPC",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TheJPC",
    description: "We create opportunity.",
    images: ["/images/thejpc-og-image.png"], // 트위터용 이미지도 동일하게 설정
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
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
