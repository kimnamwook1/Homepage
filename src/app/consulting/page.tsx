"use client";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "@/components/hamburger";
import useDarkMode from "@/lib/useDarkMode";

export default function Consulting() {
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
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-black dark:text-white">About consulting service</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          {/* 좌측 컬럼 - 임팩트 문구 */}
          <div className="md:col-span-4">
            <h3 className={`text-3xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white leading-tight mb-6`}>
              Strategic solutions for complex challenges.
            </h3>
          </div>
          
          {/* 우측 컬럼 - 설명 텍스트 */}
          <div className="md:col-span-7">
            <p className={`text-base md:text-lg ${isDarkMode ? 'text-white' : 'text-black'}`}>
              (Example) Our consulting services combine industry expertise with innovative thinking to help clients navigate complex challenges and achieve sustainable growth. We work closely with businesses of all sizes to develop tailored strategies that address their unique needs and objectives. Using a data-driven approach, we analyze market trends, consumer behavior, and competitive landscapes to identify opportunities and develop actionable recommendations. Our team of experienced consultants brings diverse perspectives and specialized knowledge to every engagement. We believe in building lasting partnerships with our clients, going beyond traditional consulting to provide ongoing support and guidance as they implement our recommendations and adapt to changing market conditions. From strategic planning and market analysis to organizational transformation and operational efficiency, our comprehensive suite of services is designed to help clients achieve their goals and unlock new opportunities for growth and innovation.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
