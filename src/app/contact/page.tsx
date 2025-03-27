"use client";
import Header from "@/components/header";

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 헤더 */}
      <Header />

      {/* 중앙 콘텐츠 - 흰색 블록 전체 페이지 확장 */}
      <div className="container mx-auto px-4 md:px-8 pt-64 pb-16">
        <div className="mb-12 py-2 px-0">
          <h2 className="text-2xl md:text-3xl font-semibold mb-0 text-black border-b border-gray-300 pb-2">Contact</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          {/* 좌측 컬럼 - 임팩트 문구와 주소 정보 */}
          <div className="md:col-span-4">
            <h3 className="impact-statement text-3xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
              Seoul
            </h3>
            
            <div className="space-y-2 text-lg text-black">
              <p>180, Bangbae-ro, Seocho-gu</p>
              <p>Seoul, Republic of Korea 06586</p>
              <p className="mt-4">E: <a href="mailto:jonathankim@thejpc.kr" className="underline hover:text-[#bb1c33] transition-colors">jonathankim@thejpc.kr</a></p>
            </div>
          </div>
          
          {/* 우측 컬럼 - 구글 지도 */}
          <div className="md:col-span-8 h-[400px] rounded-md overflow-hidden shadow-md mt-2">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.551566317906!2d126.98094691222431!3d37.49240372831373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15a2c5465fd%3A0xda7dfb01fe3cbe6a!2s180%20Bangbae-ro%2C%20Seocho-gu%2C%20Seoul!5e0!3m2!1sen!2skr!4v1712125089133!5m2!1sen!2skr" 
              width="100%" 
              height="100%" 
              style={{ border:0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
