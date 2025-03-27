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
      {/* 헤더 - 투명한 옵션 적용 */}
      <Header transparent={true} />

      {/* 중앙 콘텐츠 - 흰색 블록 전체 페이지 확장 */}
      <div className="container mx-auto px-4 md:px-8 pt-64 pb-16 relative z-10">
        {/* 배경 여백을 위한 오버레이 */}
        {/* 오버레이 제거 */}
        {/* Section Title */}
        <div className="mb-12 py-2 px-0">
          <h2 className="text-2xl md:text-3xl font-semibold mb-0 text-white border-b border-gray-400 pb-2">Studio</h2>
        </div>
        
        {/* TBD 텍스트 화면 중앙에 표시 */}
        <div className="flex items-center justify-center my-32">
          <h1 className="text-6xl md:text-8xl font-bold text-white opacity-70">TBD</h1>
        </div>
      </div>
    </main>
  );
}
