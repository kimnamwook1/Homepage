"use client";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "@/components/hamburger";
import useDarkMode from "@/lib/useDarkMode";

export default function DigitalMedia() {
  const isDarkMode = useDarkMode();
  
  // 다크모드에 따라 로고 이미지 선택
  const logoSrc = isDarkMode ? "/images/TheJPC_logo_White.png" : "/images/thejpc-logo.svg";
  
  return (
    <main className="min-h-screen flex flex-col">
      {/* 상단 섹션 - Bordeaux 빨간색 배경 */}
      <section className="bg-[#9B2335] text-white h-[50vh] flex flex-col justify-between relative">
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

        {/* Digital Media 제목 */}
        <div className="container mx-auto px-8 pb-32 mt-auto pl-[13rem]">
          <h1 className="text-7xl md:text-[9.6rem] font-bold tracking-tighter">Digital Media</h1>
        </div>
      </section>

      {/* 중앙 콘텐츠 섹션 - 흰색 배경 */}
      <section className={`${isDarkMode ? 'bg-[#121212] text-white' : 'bg-white text-black'} py-16`}>
        <div className="container mx-auto px-8 pl-[13rem]">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">About Digital Media</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* 좌측 컬럼 - 임팩트 문구 */}
            <div>
              <h3 className="text-4xl md:text-6xl font-bold text-[#9B2335] leading-tight mb-6">
                Bringing innovation to digital platforms.
              </h3>
            </div>
            
            {/* 우측 컬럼 - 설명 텍스트 */}
            <div className="space-y-6">
              <p className="text-lg">
                The digital media department centers our agency's creator, digital, and social-first monetization expertise, focusing on the creator economy, which includes talent representation, corporate advisory, and emerging media.
              </p>
              
              <p className="text-lg">
                We represent digital-first creators across key verticals including gaming, lifestyle, fashion and beauty. We support traditional talent clients across all areas of their social communities and direct-to-consumer businesses.
              </p>
              
              <p className="text-lg">
                We advise corporate brands, media companies, and tech startups in navigating the creator economy and digital ecosystem.
              </p>
              
              <p className="text-lg">
                As emerging technology impacts storytelling, our team canvases the media landscape to provide opportunities across the agency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 하단 섹션 - 선택된 클라이언트 (빨간색 배경) */}
      <section className={`bg-[#9B2335] text-white py-16`}>
        <div className="container mx-auto px-8 pl-[13rem]">
          <h2 className="text-3xl font-semibold mb-12">Select Clients</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* 클라이언트 그리드 아이템들 */}
            {Array.from({ length: 8 }).map((_, index) => (
              <div 
                key={index} 
                className="aspect-square bg-white/10 rounded-md flex items-center justify-center p-4 hover:bg-white/20 transition-colors"
              >
                <div className="text-center">
                  <p className="font-medium text-xl">Client {index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
