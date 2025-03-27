"use client";
import Header from "@/components/header";

export default function Unreal() {
  // 배경 이미지 스타일
  const backgroundStyle = {
    backgroundImage: 'url("/images/unreal-background.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };
  return (
    <main className="min-h-screen flex flex-col" style={backgroundStyle}>
      {/* 헤더 */}
      <Header />

      {/* 중앙 콘텐츠 - 흰색 블록 전체 페이지 확장 */}
      <div className="container mx-auto px-4 md:px-8 pt-64 pb-16 relative z-10">
        {/* 배경 여백을 위한 오버레이 */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-lg -z-10"></div>
        {/* Section Title */}
        <div className="mb-12 py-2 px-0">
          <h2 className="text-2xl md:text-3xl font-semibold mb-0 text-white border-b border-gray-400 pb-2">Studio</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-16">
          {/* 좌측 컬럼 - 임팩트 문구 (모바일에서는 아래, PC에서는 좌측) */}
          <div className="order-last md:order-first md:col-span-4">
            <h3 className="impact-statement text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 drop-shadow-md">
              LOOKSTEN's<br/>
              Unreal Engine based<br/>
              Providing services for<br/>
              Virtual game production<br/>
              Virtual streamer Studio
            </h3>
          </div>
          
          {/* 우측 컬럼 - 영상 2개 (모바일에서는 위, PC에서는 우측) */}
          <div className="order-first md:order-last md:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 첫 번째 영상 영역 */}
              <div className="relative w-full pb-[56.25%] bg-gray-800/50 rounded-md overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-300">영상 (링크) 삽입 영역</span>
                </div>
              </div>
              
              {/* 두 번째 영상 영역 */}
              <div className="relative w-full pb-[56.25%] bg-gray-800/50 rounded-md overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-300">영상 (링크) 삽입 영역</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
