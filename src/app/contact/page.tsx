"use client";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "@/components/hamburger";
import useDarkMode from "@/lib/useDarkMode";

export default function Contact() {
  const isDarkMode = useDarkMode();
  
  // 다크모드에 따라 로고 이미지 선택 - 상단에는 항상 흰색 로고 사용
  const logoSrc = "/images/TheJPC_logo_White.png";
  return (
    <main className="min-h-screen flex flex-col">
      {/* 상단 섹션 - Bordeaux 빨간색 배경 */}
      <section className="bg-[#9B2335] text-white pt-5 pb-40 md:pb-80 h-1/2 relative">
        {/* 로고 */}
        <div className="header">
          <Link href="/" className="logo">
            <Image 
              src={logoSrc}
              alt="The JPC Logo" 
              width={120} 
              height={48} 
              priority
            />
          </Link>
        </div>

        {/* 햄버거 메뉴 */}
        <Hamburger />

        {/* Contact 제목 */}
        <div className="container mx-auto px-4 pt-24 md:pt-32 pb-60 md:pb-80">
          <h1 className="text-8xl md:text-[12rem] font-bold tracking-tighter">Contact</h1>
        </div>
      </section>

      {/* 하단 콘텐츠 섹션 */}
      <section className={`${isDarkMode ? 'bg-[#121212] text-white' : 'bg-white text-black'} py-10 md:py-16`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 좌측 섹션 */}
            <div className="md:pr-8">
              <h2 className="text-5xl md:text-8xl font-bold mb-6">Seoul</h2>
              <div className="h-1 w-16 bg-[#9B2335] mb-8"></div>
            </div>

            {/* 우측 섹션 - 서울 주소 */}
            <div className="md:pl-8">
              <div className="space-y-2 text-lg md:mt-6 mt-8">
                <p>180, Bangbae-ro, Seocho-gu</p>
                <p>Seoul, Republic of Korea 06586</p>
                <p className="mt-4">E: jonathankim@thejpc.kr</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
