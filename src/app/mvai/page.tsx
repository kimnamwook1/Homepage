"use client";
import Header from "@/components/header";
import Hamburger from "@/components/hamburger";
import useDarkMode from "@/lib/useDarkMode";
import { useEffect } from "react";

export default function MVAI() {
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
          <h2 className={`text-2xl md:text-3xl font-semibold mb-0 ${isDarkMode ? 'text-white' : 'text-black'}`}>Portfolio</h2>
        </div>
        
        {/* 영상 3개를 위한 영역 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {/* 첫 번째 영상 영역 */}
          <div className="relative w-full pb-[56.25%] bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">영상 (링크) 삽입 영역 1</span>
            </div>
          </div>
          
          {/* 두 번째 영상 영역 */}
          <div className="relative w-full pb-[56.25%] bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">영상 (링크) 삽입 영역 2</span>
            </div>
          </div>
          
          {/* 세 번째 영상 영역 */}
          <div className="relative w-full pb-[56.25%] bg-gray-200 dark:bg-gray-700 rounded-md overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">영상 (링크) 삽입 영역 3</span>
            </div>
          </div>
        </div>
        
        {/* Impact Statement와 Description Text */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          {/* 좌측 컬럼 - 임팩트 문구 */}
          <div className="md:col-span-4">
            <h3 className={`impact-statement text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>
              Metaverse enhanced by artificial intelligence.
            </h3>
          </div>
          
          {/* 우측 컬럼 - 설명 텍스트 */}
          <div className="md:col-span-7">
            <p className={`text-base md:text-lg ${isDarkMode ? 'text-white' : 'text-black'}`}>
              (Example) Our MVAI (Metaverse AI) services represent the cutting edge of immersive digital experiences, combining the expansive potential of metaverse environments with the transformative power of artificial intelligence. We create seamless, intelligent virtual worlds that adapt and respond to user interactions in real-time. Through advanced machine learning algorithms and neural networks, our AI systems continuously improve and evolve, providing increasingly personalized and engaging experiences. From intelligent virtual assistants to dynamic environment generation, our AI capabilities enhance every aspect of the metaverse experience. We leverage cutting-edge technologies including computer vision, natural language processing, and reinforcement learning to create virtual environments that feel natural, responsive, and truly interactive. Our solutions blur the line between the physical and digital worlds, creating immersive experiences that captivate and inspire. Whether you're looking to create virtual training simulations, immersive entertainment experiences, or innovative marketing campaigns, our MVAI services provide the tools and expertise needed to bring your vision to life in the rapidly expanding metaverse landscape.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
