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
      <section className="bg-[#9B2335] text-white relative" style={{ height: '50vh' }}>
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

        {/* Contact 제목 - 정확한 위치 지정 */}
        <div className="absolute bottom-[15%] left-[10%]" style={{ width: '80%' }}>
          <h1 style={{ fontSize: 'clamp(4rem, 10vw, 9.6rem)' }} className="font-bold tracking-tighter">Contact</h1>
        </div>
      </section>

      {/* 하단 콘텐츠 섹션 */}
      <section className={`${isDarkMode ? 'bg-[#121212] text-white' : 'bg-black text-white'} relative`} style={{ height: '50vh' }}>
        <div className="absolute top-[20%] left-[10%] right-[10%]">
          <div className="flex flex-col md:flex-row gap-8">
            {/* 좌측 섹션 */}
            <div className="md:w-1/3">
              <h2 style={{ fontSize: 'clamp(3rem, 6vw, 7rem)' }} className="font-bold">Seoul</h2>
            </div>

            {/* 우측 섹션 - 서울 주소 */}
            <div className="md:w-2/3 md:pl-8">
              <div className="space-y-2" style={{ fontSize: 'clamp(1rem, 1.2vw, 1.25rem)' }}>
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
