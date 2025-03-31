"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { useMenu } from "@/lib/MenuContext";
import Hamburger from "./hamburger";

export default function Header({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const { setActivePage, setMenuActive } = useMenu();
  
  // 투명 여부에 따라 로고 색상 설정
  const logoSrc = transparent ? "/images/TheJPC_logo_White.png" : "/images/TheJPC_logo_Blacked.png";
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // 스크롤 방향 감지 - 모든 기기에서 동일하게 작동
      if (currentScrollY > lastScrollY) {
        // 아래로 스크롤
        if (currentScrollY > 50) { // 민감도 증가 (100 → 50)
          setHidden(true);
        }
      } else {
        // 위로 스크롤
        setHidden(false);
      }
      
      // transparent가 아닐 때만 스크롤에 따라 배경 추가
      if (!transparent) {
        if (currentScrollY > 20) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
      
      setLastScrollY(currentScrollY);
    };
    
    // handleScroll 함수를 passive: true로 등록하여 성능 향상
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // 컴포넌트 마운트 시 초기 스크롤 위치 저장
    setLastScrollY(window.scrollY);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, transparent]);
  
  // 메뉴 토글 함수
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // 홈으로 이동 함수
  const goToHome = (e: React.MouseEvent) => {
    e.preventDefault();
    setActivePage(null);
    setMenuActive(false);
    window.location.href = '/';
  };

  // 헤더 배경색 설정 - transparent 옵션에 따라 투명 또는 흰색으로 설정
  const headerBg = transparent ? '' : (scrolled ? 'bg-white' : '');
  const headerShadow = transparent ? '' : (scrolled ? 'shadow-sm' : '');
  
  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${headerBg} ${headerShadow} ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="container mx-auto relative py-4 px-4 md:py-6 md:px-8 flex justify-between items-center z-50">
        <div>
          <a 
            href="/" 
            onClick={goToHome}
          >
            <Image 
              src={logoSrc}
              alt="The JPC Logo" 
              width={120} 
              height={48} 
              priority
              className="w-[80px] md:w-[120px]"
            />
          </a>
        </div>
        
        {/* 햄버거 메뉴 버튼 */}
        <Hamburger isOpen={menuOpen} setIsOpen={setMenuOpen} isTransparent={transparent} />
      </div>
    </header>
  );
}
