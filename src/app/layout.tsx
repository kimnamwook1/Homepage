import type { Metadata } from "next";
import "./globals.css";
import { pfdintextpro } from "./fonts";
import { MenuProvider } from "@/lib/MenuContext";
import { AnimationProvider } from "@/lib/AnimationContext";
import Head from 'next/head';

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
        url: "https://www.thejpc.kr/images/og-image.png", // 절대 URL 사용
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
    images: ["https://www.thejpc.kr/images/og-image.png"], // 트위터용 이미지도 동일하게 설정
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        {/* 직접 메타 태그 추가 */}
        <meta property="og:title" content="TheJPC" />
        <meta property="og:description" content="We create opportunity." />
        <meta property="og:url" content="https://www.thejpc.kr" />
        <meta property="og:image" content="https://www.thejpc.kr/images/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="TheJPC" />
        <meta property="og:locale" content="ko_KR" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TheJPC" />
        <meta name="twitter:description" content="We create opportunity." />
        <meta name="twitter:image" content="https://www.thejpc.kr/images/og-image.png" />
      </head>
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
