"use client";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "@/components/hamburger";
import useDarkMode from "@/lib/useDarkMode";

export default function AboutUs() {
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
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-black dark:text-white">About TheJPC</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* 좌측 컬럼 - 임팩트 문구 */}
          <div>
            <h3 className={`text-3xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white leading-tight mb-6`}>
              Pioneering the future of digital innovation.
            </h3>
          </div>
          
          {/* 우측 컬럼 - 설명 텍스트 */}
          <div className="space-y-6">
            <p className={`text-base md:text-lg ${isDarkMode ? 'text-white' : 'text-black'}`}>
              (Example) TheJPC is a forward-thinking organization dedicated to pushing the boundaries of digital innovation across multiple industries. Founded on the principle that technology should enhance human potential, our team combines technical expertise with creative vision to deliver cutting-edge solutions that address complex challenges and create new opportunities. With a focus on emerging technologies including artificial intelligence, immersive environments, and real-time visualization, we collaborate with clients to develop customized solutions that drive meaningful results. Our interdisciplinary approach brings together specialists from diverse backgrounds, fostering innovation through the cross-pollination of ideas and methodologies. We believe in the transformative power of technology when guided by human insight and ethical considerations. Our work is characterized by a commitment to quality, a passion for innovation, and a deep understanding of the contexts in which our solutions operate. We strive not just to meet current needs, but to anticipate future challenges and opportunities. As we continue to grow and evolve, our mission remains constant: to harness the potential of cutting-edge technology to create experiences and solutions that inspire, empower, and transform. We invite you to join us on this journey as we shape the future of digital innovation together.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
