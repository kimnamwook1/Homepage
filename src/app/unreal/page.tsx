"use client";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "@/components/hamburger";
import useDarkMode from "@/lib/useDarkMode";

export default function Unreal() {
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
          <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-black dark:text-white">Studio</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* 좌측 컬럼 - 임팩트 문구 */}
          <div>
            <h3 className={`text-3xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white leading-tight mb-6`}>
              Revolutionary visual experiences powered by Unreal Engine.
            </h3>
          </div>
          
          {/* 우측 컬럼 - 설명 텍스트 */}
          <div className="space-y-6">
            <p className={`text-base md:text-lg ${isDarkMode ? 'text-white' : 'text-black'}`}>
              Our Unreal Engine services harness the power of one of the world's most advanced real-time 3D creation tools to deliver stunning visual experiences across multiple platforms and industries. With photorealistic rendering capabilities and unmatched flexibility, we create immersive environments that captivate audiences and push the boundaries of digital content creation.
            </p>
            
            <p className={`text-base md:text-lg ${isDarkMode ? 'text-white' : 'text-black'}`}>
              Our team of skilled developers and artists leverages Unreal Engine's extensive toolset to create everything from interactive architectural visualizations and product configurators to cutting-edge virtual production setups and immersive training simulations. We combine technical expertise with creative vision to bring your ideas to life with unprecedented visual fidelity.
            </p>
            
            <p className={`text-base md:text-lg ${isDarkMode ? 'text-white' : 'text-black'}`}>
              We specialize in optimizing Unreal Engine projects for performance across a wide range of hardware, ensuring smooth experiences on everything from high-end workstations to mobile devices. Our technical pipeline incorporates the latest advancements in real-time rendering, physics simulation, and animation to create dynamic, responsive environments.
            </p>
            
            <p className={`text-base md:text-lg ${isDarkMode ? 'text-white' : 'text-black'}`}>
              Whether you're looking to create interactive marketing experiences, virtual sets for film and television, or immersive gameplay environments, our Unreal Engine services provide the expertise and creative vision needed to exceed expectations and deliver compelling visual experiences that stand out in today's digital landscape.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
