"use client";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "@/components/hamburger";
import useDarkMode from "@/lib/useDarkMode";

export default function Contact() {
  const isDarkMode = useDarkMode();
  
  // 다크모드에 따라 로고 이미지 선택
  const logoSrc = isDarkMode ? "/images/TheJPC_logo_White.png" : "/images/thejpc-logo.svg";
  return (
    <main className="min-h-screen flex flex-col">
      {/* 상단 섹션 - Bordeaux 빨간색 배경 */}
      <section className="bg-[#9B2335] text-white h-[50vh] flex flex-col justify-between relative">
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
        <div className="container mx-auto px-8 pb-20">
          <h1 className="text-8xl md:text-[12rem] font-bold tracking-tighter">Contact</h1>
        </div>
      </section>

      {/* 하단 콘텐츠 섹션 */}
      <section className={`${isDarkMode ? 'bg-[#121212] text-white' : 'bg-white text-black'} h-[50vh] py-20`}>
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* 좌측 섹션 */}
            <div className="md:pr-8">
              <h2 className="text-6xl md:text-7xl font-bold">Seoul</h2>
            </div>

            {/* 우측 섹션 - 서울 주소 */}
            <div className="md:pl-8">
              <div className="space-y-2 text-lg mt-4 md:mt-1">
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
