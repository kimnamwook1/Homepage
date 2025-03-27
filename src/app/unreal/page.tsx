"use client";
import Header from "@/components/header";
import Hamburger from "@/components/hamburger";
import useDarkMode from "@/lib/useDarkMode";
import { useEffect } from "react";

export default function Unreal() {
  const isDarkMode = useDarkMode();
  
  useEffect(() => {
    // 테스트를 위해 강제 다크모드 적용
    document.documentElement.classList.add('dark');
  }, []);
  
  return (
    <main className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-[#121212]' : 'bg-white'}`}>
      {/* 헤더 */}
      <Header />

      {/* 햄버거 메뉴 */}
      <Hamburger />

      {/* 중앙 콘텐츠 - 흰색 블록 전체 페이지 확장 */}
      <div className="container mx-auto px-4 md:px-8 pt-64 pb-16">
        {/* Section Title */}
        <div className={`section-title-box mb-12 py-2 px-4 rounded-md shadow-md border ${isDarkMode ? 'bg-black text-white border-gray-800' : 'bg-white text-black border-gray-200'}`}>
          <h2 className={`text-2xl md:text-3xl font-semibold mb-0 ${isDarkMode ? 'text-white' : 'text-black'}`}>Studio</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-16">
          {/* 좌측 컬럼 - 임팩트 문구 */}
          <div className="md:col-span-4">
            <h3 className={`impact-statement text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>
              LOOKSTEN's<br/>
              Unreal Engine based<br/>
              Providing services for<br/>
              Virtual game production<br/>
              Virtual streamer Studio
            </h3>
          </div>
          
          {/* 우측 컬럼 - 영상 2개 */}
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 첫 번째 영상 영역 */}
              <div className="relative w-full pb-[56.25%] bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">영상 (링크) 삽입 영역</span>
                </div>
              </div>
              
              {/* 두 번째 영상 영역 */}
              <div className="relative w-full pb-[56.25%] bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">영상 (링크) 삽입 영역</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
