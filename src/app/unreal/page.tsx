"use client";
import Header from "@/components/header";
import { useAnimation, AnimatedSection, AnimatedText } from "@/lib/AnimationContext";
export default function Unreal() {
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
        <AnimatedSection className="flex flex-col items-center justify-center my-48">
          <AnimatedText delay={100} className="text-6xl md:text-8xl font-bold text-white opacity-70 mb-4">TBD</AnimatedText>
          <AnimatedText delay={300} className="text-2xl sm:text-3xl md:text-6xl font-medium text-white opacity-70">(Working In Progress)</AnimatedText>
        </AnimatedSection>
      </div>
    </main>
  );
}
