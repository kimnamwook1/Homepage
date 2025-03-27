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
        
        {/* MVAI 프로세스 영역 */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-black mb-8 text-center">Our MVAI Process</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {/* 1단계: AI Music Analysis */}
            <div className="bg-gray-50 p-6 rounded-md shadow-sm border border-gray-100">
              <div className="flex items-start mb-4">
                <span className="text-2xl font-bold text-gray-800 mr-2">1.</span>
                <h4 className="text-xl font-semibold text-gray-800">AI Music Analysis</h4>
              </div>
              <p className="text-gray-700">
                Analyzes various elements of the audio—such as the artist's style, lyrics, tempo, 
                and instrumentation—to extract emotional tone and structure for creative direction.
              </p>
            </div>
            
            {/* 화살표 (모바일에서는 숨김) */}
            <div className="hidden md:flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
            
            {/* 2단계: AI Music Video Generation */}
            <div className="bg-gray-50 p-6 rounded-md shadow-sm border border-gray-100">
              <div className="flex items-start mb-4">
                <span className="text-2xl font-bold text-gray-800 mr-2">2.</span>
                <h4 className="text-xl font-semibold text-gray-800">AI Music Video Generation</h4>
              </div>
              <p className="text-gray-700">
                Generative AI transforms the analyzed music data into tailored visual elements, 
                including scenes, effects, images, and motion—building the narrative flow of the video.
              </p>
            </div>
            
            {/* 화살표 (모바일에서는 숨김) */}
            <div className="hidden md:flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
            
            {/* 3단계: Post-Production */}
            <div className="bg-gray-50 p-6 rounded-md shadow-sm border border-gray-100">
              <div className="flex items-start mb-4">
                <span className="text-2xl font-bold text-gray-800 mr-2">3.</span>
                <h4 className="text-xl font-semibold text-gray-800">Post-Production</h4>
              </div>
              <p className="text-gray-700">
                Expert-led post-processing enhances quality through color grading, cinematic effects, 
                editing, and sound mixing—delivering a polished, artist-aligned final product.
              </p>
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
