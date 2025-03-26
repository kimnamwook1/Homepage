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
      <section className="bg-[#9B2335] text-white pt-5 h-1/2 flex flex-col justify-center relative border-b border-black">
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
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-8xl md:text-[12rem] font-bold tracking-tighter">Contact</h1>
        </div>
      </section>

      {/* 하단 콘텐츠 섹션 */}
      <section className={`${isDarkMode ? 'bg-[#121212] text-white' : 'bg-white text-black'} py-10 md:pt-20`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* 좌측 섹션 */}
            <div className="md:pr-8">
              <h2 className="text-5xl md:text-8xl font-bold">Seoul</h2>
              <div className="h-0.5 w-10 bg-[#9B2335] mt-4"></div>
            </div>

            {/* 우측 섹션 - 서울 주소 */}
            <div className="md:pl-8">
              <div className="space-y-2 text-lg md:mt-1 mt-6">
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
