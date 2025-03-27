"use client";
import Header from "@/components/header";
import { useEffect, useState } from "react";

export default function Unreal() {
  const [animateIn, setAnimateIn] = useState(false);

  // 페이지 로드 시 애니메이션 시작
  useEffect(() => {
    // 약간의 지연 후 애니메이션 시작
    const timer = setTimeout(() => {
      setAnimateIn(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  // 배경 이미지 스타일
  const backgroundStyle = {
    backgroundImage: 'url("/images/unreal-background.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
  return (
    <main className="min-h-screen flex flex-col" style={backgroundStyle}>
      {/* 헤더 - 투명한 옵션 적용 */}
      <Header transparent={true} />

      {/* 중앙 콘텐츠 */}
      <div className="container mx-auto px-4 md:px-8 pt-64 pb-16 relative z-10">
        {/* TBD 텍스트 화면 중앙에 표시 - 애니메이션 적용 */}
        <div className={`flex flex-col items-center justify-center my-48 ${animateIn ? 'animate-in' : ''}`}>
          <h1 className="text-6xl md:text-8xl font-bold text-white opacity-70 mb-4 animate-fade-up delay-100">TBD</h1>
          <p className="text-2xl sm:text-3xl md:text-6xl font-medium text-white opacity-70 animate-fade-up delay-300">(Working In Progress)</p>
        </div>
      </div>
    </main>
  );
}
