"use client";
import Header from "@/components/header";
import { AnimatedSection, AnimatedText } from "@/lib/AnimationContext";

export default function AboutUs() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 헤더 */}
      <Header />

      {/* 중앙 콘텐츠 - 흰색 블록 전체 페이지 확장 */}
      <div className="container mx-auto px-4 md:px-8 pt-64 pb-16">
        <AnimatedSection delay={100} className="mb-12 py-2 px-0">
          <h2 className="text-2xl md:text-3xl font-semibold mb-0 text-black border-b border-gray-300 pb-2">About TheJPC</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          {/* 좌측 컬럼 - 임팩트 문구 */}
          <AnimatedSection delay={300} className="md:col-span-4">
            <h3 className="impact-statement text-3xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
              Expert-driven. Innovation-led. Story-first.
            </h3>
          </AnimatedSection>
          
          {/* 우측 컬럼 - 설명 텍스트 */}
          <div className="md:col-span-8">
            <div className="space-y-6 text-base md:text-lg text-black">
              <AnimatedText delay={300}>
                <p>
                  For the past decade, The JPC has been at the forefront of content creation, production, and distribution—spanning across film, drama, digital media, and immersive formats such as MR, VR, and XR. Today, we are expanding those creative boundaries even further by seamlessly integrating cutting-edge AI technologies into the core of our content development process.
                </p>
              </AnimatedText>
              
              <AnimatedText delay={500}>
                <p>
                  From concept to completion, our work has reached audiences not only in Korea but around the world. Our original content has been distributed through major global platforms including Netflix, Disney+, Amazon Prime Video, Hulu, and YouTube Originals, showcasing our ability to adapt across formats, cultures, and markets.
                </p>
              </AnimatedText>
              
              <AnimatedText delay={700}>
                <p>
                  Now, with the rapid evolution of generative AI, The JPC is redefining how media is made. From this very website to our internal creative systems and beyond—AI is now embedded in everything we do. Our proprietary models, creative pipelines, and data-driven strategy allow us to produce smarter, faster, and more resonant content than ever before.
                </p>
              </AnimatedText>
              
              <AnimatedText delay={900}>
                <p>
                  The JPC isn't just a production company—we're a next-generation media studio that blends creativity with technology to reshape the entertainment landscape. As we continue to explore new frontiers in AI, immersive storytelling, and real-time production, we remain committed to delivering meaningful innovation that inspires, connects, and elevates.
                </p>
              </AnimatedText>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
