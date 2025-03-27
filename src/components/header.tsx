"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { useMenu } from "@/lib/MenuContext";
import Hamburger from "./hamburger";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const { setActivePage, setMenuActive } = useMenu();
  
  // 항상 라이트 모드로 고정
  const logoSrc = "/images/TheJPC_logo_Blacked.png";
  
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
      
      // 스크롤 위치에 따라 배경 추가 여부 결정
      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
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
  }, [lastScrollY]);
  
  // 메뉴 토글 함수
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // 헤더 배경색 항상 흰색으로 설정
  const headerBg = 'bg-white';
  
  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerBg} shadow-sm ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      } ${menuOpen ? 'md:pr-96' : ''}`}
    >
      <div className="container mx-auto relative py-4 px-4 md:py-6 md:px-8 flex justify-between items-center">
        <div>
          <Link 
            href="/" 
            onClick={() => {
              setActivePage(null);
              setMenuActive(false);
            }}
          >
            <Image 
              src={logoSrc}
              alt="The JPC Logo" 
              width={120} 
              height={48} 
              priority
              className="w-[80px] md:w-[120px]"
            />
          </Link>
        </div>
        
        {/* 햄버거 메뉴 버튼 */}
        <Hamburger isOpen={menuOpen} setIsOpen={setMenuOpen} />
      </div>
    </header>
  );
}
