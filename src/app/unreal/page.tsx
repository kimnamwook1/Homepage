"use client";
import Header from "@/components/header";
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
      {/* 헤더 */}
      <Header />

      {/* 햄버거 메뉴 */}
      <Hamburger />

      {/* 중앙 콘텐츠 - 흰색 블록 전체 페이지 확장 */}
      <div className="container mx-auto px-4 md:px-8 pt-64 pb-16">
        <div className="mb-12 py-2 px-4 bg-white dark:bg-[#1e1e1e] rounded-md shadow-md border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl md:text-3xl font-semibold mb-0 text-black dark:text-white">Studio</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-16">
          {/* 좌측 컬럼 - 임팩트 문구 */}
          <div className="md:col-span-4">
            <h3 className={`text-2xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white leading-tight mb-6`}>
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
