"use client";
import Header from "@/components/header";
import Hamburger from "@/components/hamburger";

export default function AboutUs() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 헤더 */}
      <Header />

      {/* 햄버거 메뉴 */}
      <Hamburger />

      {/* 중앙 콘텐츠 - 흰색 블록 전체 페이지 확장 */}
      <div className="container mx-auto px-4 md:px-8 pt-64 pb-16">
        <div className="mb-12 py-2 px-0">
          <h2 className="text-2xl md:text-3xl font-semibold mb-0 text-black border-b border-gray-300 pb-2">About TheJPC</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          {/* 좌측 컬럼 - 임팩트 문구 */}
          <div className="md:col-span-4">
            <h3 className="impact-statement text-3xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
              Pioneering the future of digital innovation.
            </h3>
          </div>
          
          {/* 우측 컬럼 - 설명 텍스트 */}
          <div className="md:col-span-8">
            <p className="text-base md:text-lg text-black">
              (Example) TheJPC is a forward-thinking organization dedicated to pushing the boundaries of digital innovation across multiple industries. Founded on the principle that technology should enhance human potential, our team combines technical expertise with creative vision to deliver cutting-edge solutions that address complex challenges and create new opportunities. With a focus on emerging technologies including artificial intelligence, immersive environments, and real-time visualization, we collaborate with clients to develop customized solutions that drive meaningful results. Our interdisciplinary approach brings together specialists from diverse backgrounds, fostering innovation through the cross-pollination of ideas and methodologies. We believe in the transformative power of technology when guided by human insight and ethical considerations. Our work is characterized by a commitment to quality, a passion for innovation, and a deep understanding of the contexts in which our solutions operate. We strive not just to meet current needs, but to anticipate future challenges and opportunities. As we continue to grow and evolve, our mission remains constant: to harness the potential of cutting-edge technology to create experiences and solutions that inspire, empower, and transform. We invite you to join us on this journey as we shape the future of digital innovation together.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
