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
        <div className="container mx-auto px-[4vw] pb-[min(12vh,8rem)] mt-auto pl-[max(4vw,8rem)]">
          <h1 className="text-[clamp(3rem,8vw,9.6rem)] font-bold tracking-tighter">Contact</h1>
        </div>
      </section>

      {/* 하단 콘텐츠 섹션 */}
      <section className={`${isDarkMode ? 'bg-[#121212] text-white' : 'bg-white text-black'} min-h-[50vh] py-[min(8vh,5rem)]`}>
        <div className="container mx-auto px-[4vw] pl-[max(4vw,8rem)]">
          <div className="flex flex-col md:flex-row gap-8">
            {/* 좌측 섹션 */}
            <div className="md:pr-8 pl-0 md:w-1/3">
              <h2 className="text-[clamp(2rem,5vw,7rem)] font-bold">Seoul</h2>
            </div>

            {/* 우측 섹션 - 서울 주소 */}
            <div className="md:pl-8 md:w-2/3">
              <div className="space-y-2 text-[clamp(1rem,1.2vw,1.25rem)] mt-[clamp(1rem,2vw,1.5rem)]">
                <p>180, Bangbae-ro, Seocho-gu</p>
                <p>Seoul, Republic of Korea 06586</p>
                <p className="mt-[clamp(1rem,2vw,1.5rem)]">E: jonathankim@thejpc.kr</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
