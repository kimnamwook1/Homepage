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

      {/* 중앙 콘텐츠 */}
      <div className="container mx-auto px-4 md:px-8 pt-64 pb-16 relative z-10">
        {/* TBD 텍스트 화면 중앙에 표시 - 위치 조정 및 부제목 추가 */}
        <div className="flex flex-col items-center justify-center my-48">
          <h1 className="text-6xl md:text-8xl font-bold text-white opacity-70 mb-4">TBD</h1>
          <p className="text-5xl md:text-6xl font-medium text-white opacity-70">(Working In Progress)</p>
        </div>
      </div>
    </main>
  );
}
