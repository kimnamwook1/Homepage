"use client";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "@/components/hamburger";
import useDarkMode from "@/lib/useDarkMode";

export default function MVAI() {
  const isDarkMode = useDarkMode();
  
  // 다크모드에 따라 로고 이미지 선택
  const logoSrc = isDarkMode 
    ? "/images/TheJPC_logo_White.png" 
    : "/images/TheJPC_logo_Blacked.png";
  
  return (
    <main className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-[#121212]' : 'bg-white'}`}>
      {/* 로고 */}
      <div className="header">
        <Link href="/" className="logo">
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

      {/* 중앙 콘텐츠 - 흰색 블록 전체 페이지 확장 */}
      <div className="container mx-auto px-4 md:px-8 pt-32 pb-16">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-black dark:text-white">Portfolio</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* 좌측 컬럼 - 임팩트 문구 */}
          <div className="md:col-span-1">
            <h3 className={`text-3xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white leading-tight mb-6`}>
              Metaverse enhanced by artificial intelligence.
            </h3>
          </div>
          
          {/* 우측 컬럼 - 설명 텍스트 */}
          <div className="md:col-span-3">
            <p className={`text-base md:text-lg ${isDarkMode ? 'text-white' : 'text-black'}`}>
              (Example) Our MVAI (Metaverse AI) services represent the cutting edge of immersive digital experiences, combining the expansive potential of metaverse environments with the transformative power of artificial intelligence. We create seamless, intelligent virtual worlds that adapt and respond to user interactions in real-time. Through advanced machine learning algorithms and neural networks, our AI systems continuously improve and evolve, providing increasingly personalized and engaging experiences. From intelligent virtual assistants to dynamic environment generation, our AI capabilities enhance every aspect of the metaverse experience. We leverage cutting-edge technologies including computer vision, natural language processing, and reinforcement learning to create virtual environments that feel natural, responsive, and truly interactive. Our solutions blur the line between the physical and digital worlds, creating immersive experiences that captivate and inspire. Whether you're looking to create virtual training simulations, immersive entertainment experiences, or innovative marketing campaigns, our MVAI services provide the tools and expertise needed to bring your vision to life in the rapidly expanding metaverse landscape.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
