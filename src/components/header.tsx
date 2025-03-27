"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import useDarkMode from "@/lib/useDarkMode";
import { useMenu } from "@/lib/MenuContext";

export default function Header() {
  const isDarkMode = useDarkMode();
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const { setActivePage, setMenuActive } = useMenu();
  
  // 모든 페이지에서 동일한 로고 사용
  const logoSrc = isDarkMode 
    ? "/images/TheJPC_logo_White.png" 
    : "/images/TheJPC_logo_Blacked.png";
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // 스크롤 방향 감지
      if (currentScrollY > lastScrollY) {
        // 아래로 스크롤
        if (currentScrollY > 100) {
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
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  
  // 스크롤 시 배경 추가
  const headerBg = scrolled 
    ? (isDarkMode ? 'bg-[#121212]/90' : 'bg-white/90') 
    : 'bg-transparent';
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerBg} ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="fixed top-[70px] left-[120px] z-50">
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
          />
        </Link>
      </div>
    </header>
  );
}
