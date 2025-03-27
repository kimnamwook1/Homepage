"use client";
import Header from "@/components/header";
import Hamburger from "@/components/hamburger";

export default function MVAI() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 헤더 */}
      <Header />

      {/* 햄버거 메뉴 */}
      <Hamburger />

      {/* 중앙 콘텐츠 - 흰색 블록 전체 페이지 확장 */}
      <div className="container mx-auto px-4 md:px-8 pt-64 pb-16">
        {/* Section Title */}
        <div className="section-title-box mb-12 py-2 px-4 rounded-md shadow-md border border-gray-200 bg-white">
          <h2 className="text-2xl md:text-3xl font-semibold mb-0 text-black">Portfolio</h2>
        </div>
        
        {/* 영상 3개를 위한 영역 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {/* 첫 번째 영상 영역 */}
          <div className="relative w-full pb-[56.25%] bg-gray-200 rounded-md overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-500">영상 (링크) 삽입 영역 1</span>
            </div>
          </div>
          
          {/* 두 번째 영상 영역 */}
          <div className="relative w-full pb-[56.25%] bg-gray-200 rounded-md overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-500">영상 (링크) 삽입 영역 2</span>
            </div>
          </div>
          
          {/* 세 번째 영상 영역 */}
          <div className="relative w-full pb-[56.25%] bg-gray-200 rounded-md overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-gray-500">영상 (링크) 삽입 영역 3</span>
            </div>
          </div>
        </div>
        
        {/* Impact Statement와 Description Text */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          {/* 좌측 컬럼 - 임팩트 문구 */}
          <div className="md:col-span-4">
            <h3 className="impact-statement text-3xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
              We turn every sound into a story
            </h3>
          </div>
          
          {/* 우측 컬럼 - 설명 텍스트 */}
          <div className="md:col-span-7">
            <div className="text-base md:text-lg text-black space-y-4">
              <p>The JPC's MVAI is an AI-powered music video generation solution designed to revolutionize the way artists visualize their music.</p>
              
              <p>By deeply analyzing songs through our proprietary AI model—trained on artist styles, lyrics, tempo, instrumentation, and emotional tone—we create tailored video production plans that truly reflect each artist's identity and creative intent.
              Through the seamless integration of generative AI and our production expertise, MVAI produces high-quality, concept-driven music videos in a fraction of the time and cost of traditional production methods.</p>
              
              <p>This innovation enables artists, regardless of scale or budget, to turn their sound into stunning visuals—without compromise.
              At the core of MVAI is <strong>The JPC's internalized AI framework</strong>, combining music intelligence, visual generation, and post-production automation.</p>
              
              <p>We believe that music video creation should no longer be a privilege for the few, but a powerful storytelling tool accessible to all artists.
              MVAI is not just a product.</p>
              
              <p>It's a creative engine that empowers music to move, inspire, and reach further—visually, emotionally, and globally.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
