import type { Metadata } from "next";
import "./globals.css";
import { pfdintextpro } from "./fonts";
import { MenuProvider } from "@/lib/MenuContext";
import { AnimationProvider } from "@/lib/AnimationContext";
import Script from 'next/script';

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
        url: "https://www.thejpc.kr/images/og-image.jpg",
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
    images: ["https://www.thejpc.kr/images/og-image.jpg"],
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
        <meta property="og:image" content="https://www.thejpc.kr/images/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="TheJPC" />
        <meta property="og:locale" content="ko_KR" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TheJPC" />
        <meta name="twitter:description" content="We create opportunity." />
        <meta name="twitter:image" content="https://www.thejpc.kr/images/og-image.jpg" />
      </head>
      
      <Script id="og-meta-tags" strategy="afterInteractive">
        {`
          (function() {
            // 기존 메타 태그 제거 시도 (HTML 콤텐트가 초기화될 때 문제가 발생할 수 있으므로 트라이/캩0치 해야 함)
            try {
              document.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"]').forEach(el => {
                try { el.remove(); } catch(e) {}
              });
              
              // OG 태그 추가
              const metaTags = [
                { property: "og:title", content: "TheJPC" },
                { property: "og:description", content: "We create opportunity." },
                { property: "og:url", content: "https://www.thejpc.kr" },
                { property: "og:image", content: "https://www.thejpc.kr/images/og-image.jpg" },
                { property: "og:image:width", content: "1200" },
                { property: "og:image:height", content: "630" },
                { property: "og:type", content: "website" },
                { property: "og:site_name", content: "TheJPC" },
                { property: "og:locale", content: "ko_KR" },
                { name: "twitter:card", content: "summary_large_image" },
                { name: "twitter:title", content: "TheJPC" },
                { name: "twitter:description", content: "We create opportunity." },
                { name: "twitter:image", content: "https://www.thejpc.kr/images/og-image.jpg" }
              ];
              
              metaTags.forEach(({ property, name, content }) => {
                const meta = document.createElement('meta');
                if (property) meta.setAttribute('property', property);
                if (name) meta.setAttribute('name', name);
                meta.setAttribute('content', content);
                document.head.appendChild(meta);
              });
            } catch(e) {
              console.error('Error updating meta tags:', e);
            }
          })();
        `}
      </Script>
      
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
