"use client";
import Header from "@/components/header";
import Hamburger from "@/components/hamburger";
import useDarkMode from "@/lib/useDarkMode";
import { useEffect } from "react";

export default function Contact() {
  const isDarkMode = useDarkMode();
  
  useEffect(() => {
    // 테스트를 위해 강제 다크모드 적용
    document.documentElement.classList.add('dark');
  }, []);
  
  return (
    <main className="min-h-screen flex flex-col">
      {/* 상단 섹션 - Bordeaux 빨간색 배경 */}
      <section className="bg-[#9B2335] text-white h-[50vh] flex flex-col justify-between relative">
        {/* 헤더 */}
        <Header />

        {/* 햄버거 메뉴 */}
        <Hamburger />

        {/* Contact 제목 */}
        <div className="container mx-auto px-8 pb-32 mt-auto pl-[13rem]">
          <h1 className="text-7xl md:text-[9.6rem] font-bold tracking-tighter">Contact</h1>
        </div>
      </section>

      {/* 하단 콘텐츠 섹션 */}
      <section className={`${isDarkMode ? 'bg-[#121212] text-white' : 'bg-black text-white'} h-[50vh] py-20`}>
        <div className="container mx-auto px-8 pl-[13rem]">
          <div className="flex flex-col md:flex-row gap-8">
            {/* 좌측 섹션 */}
            <div className="md:pr-8 pl-0 md:w-1/3">
              <h2 className="text-6xl md:text-7xl font-bold">Seoul</h2>
            </div>

            {/* 우측 섹션 - 서울 주소 */}
            <div className="md:pl-8 md:w-2/3">
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
