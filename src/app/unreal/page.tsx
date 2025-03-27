"use client";
import Header from "@/components/header";
import Hamburger from "@/components/hamburger";

export default function Unreal() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 헤더 */}
      <Header />

      {/* 햄버거 메뉴 */}
      <Hamburger />

      {/* 중앙 콘텐츠 - 흰색 블록 전체 페이지 확장 */}
      <div className="container mx-auto px-4 md:px-8 pt-64 pb-16">
        {/* Section Title */}
        <div className="section-title-box mb-12 py-2 px-4 rounded-md shadow-md border border-gray-200 bg-white">
          <h2 className="text-2xl md:text-3xl font-semibold mb-0 text-black">Studio</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-16">
          {/* 우측 컬럼 - 영상 2개 (순서를 먼저 배치) */}
          <div className="md:col-span-8 order-first">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 첫 번째 영상 영역 */}
              <div className="relative w-full pb-[56.25%] bg-gray-200 rounded-md overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500">영상 (링크) 삽입 영역</span>
                </div>
              </div>
              
              {/* 두 번째 영상 영역 */}
              <div className="relative w-full pb-[56.25%] bg-gray-200 rounded-md overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500">영상 (링크) 삽입 영역</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* 좌측 컬럼 - 임팩트 문구 (순서를 나중에 배치) */}
          <div className="md:col-span-4 order-last">
            <h3 className="impact-statement text-2xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
              LOOKSTEN's<br/>
              Unreal Engine based<br/>
              Providing services for<br/>
              Virtual game production<br/>
              Virtual streamer Studio
            </h3>
          </div>
        </div>
      </div>
    </main>
  );
}
