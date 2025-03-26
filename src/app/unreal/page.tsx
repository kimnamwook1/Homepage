"use client";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "@/components/hamburger";
import useDarkMode from "@/lib/useDarkMode";

export default function Unreal() {
  const isDarkMode = useDarkMode();
  
  // 다크모드에 따라 로고 이미지 선택
  const logoSrc = isDarkMode 
    ? "/images/TheJPC_logo_White.png" 
    : "/images/TheJPC_logo_Blacked.png";
  return (
    <main className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-[#121212]' : 'bg-white'}`}>
      {/* 좌상단 로고 */}
      <div className="fixed top-0 left-0 p-5 z-40">
        <Link href="/">
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

      {/* 중앙 콘텐츠 */}
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-[#bb1c33] text-4xl md:text-6xl font-bold mb-12">For Unreal</h1>
        <h2 className="text-[#121212] text-5xl md:text-8xl font-bold text-center work-in-progress">Work In Progress</h2>
      </div>
    </main>
  );
}
