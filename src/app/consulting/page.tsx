"use client";
import Header from "@/components/header";
import Hamburger from "@/components/hamburger";

export default function Consulting() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 헤더 */}
      <Header />

      {/* 햄버거 메뉴 */}
      <Hamburger />

      {/* 중앙 콘텐츠 - 흰색 블록 전체 페이지 확장 */}
      <div className="container mx-auto px-4 md:px-8 pt-64 pb-16">
        <div className="mb-12 py-2 px-0">
          <h2 className="text-2xl md:text-3xl font-semibold mb-0 text-black border-b border-gray-300 pb-2">About Consulting Service</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          {/* 좌측 컬럼 - 임팩트 문구 */}
          <div className="md:col-span-4">
            <h3 className="impact-statement text-3xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
              Creative minds. Strategic moves. Real results.
            </h3>
          </div>
          
          {/* 우측 컬럼 - 설명 텍스트 */}
          <div className="md:col-span-8">
            <div className="text-base md:text-lg text-black space-y-4">
              <p><strong>The JPC Consulting</strong> provides tailored strategic consulting for companies and projects at the intersection of Media & Entertainment and emerging technologies. Leveraging our deep expertise across content, technology, and business, we deliver actionable insights that address each client's unique goals and challenges.</p>

              <p>Our consulting approach spans the full project lifecycle—from initial strategy to execution and operations. We help define short-, mid-, and long-term objectives, assess ROI, form dedicated task forces, and lead branding, marketing, public relations, service launch, and operational advisory. In essence, we act as the total project management (PM) partner across all phases.</p>

              <p>By integrating creative vision with technological innovation, The JPC delivers flexible, business-driven strategies that keep pace with evolving markets. Our solutions are not only strategic, but also highly practical—driving measurable outcomes for our clients.</p>
              <p>We don't just advise—we collaborate, commit, and grow with our partners.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
