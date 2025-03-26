"use client";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "@/components/hamburger";

export default function Consulting() {
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
        <h1 className="text-[#bb1c33] text-4xl md:text-6xl font-bold mb-12">For Consulting</h1>
        <h2 className="text-[#121212] text-5xl md:text-8xl font-bold text-center work-in-progress">Work In Progress</h2>
      </div>
    </main>
  );
}
