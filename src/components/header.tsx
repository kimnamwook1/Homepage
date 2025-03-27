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
  const pathname = usePathname();
  const isContactPage = pathname === '/contact';
  
  // 다크모드에 따라 로고 이미지 선택 - Contact 페이지에서는 다른 로고 사용
  const logoSrc = isContactPage
    ? (isDarkMode ? "/images/TheJPC_logo_White.png" : "/images/thejpc-logo.svg")
    : (isDarkMode ? "/images/TheJPC_logo_White.png" : "/images/TheJPC_logo_Blacked.png");
  
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
  
  // Contact 페이지의 경우 빨간색 배경
  const headerBg = isContactPage && !scrolled
    ? 'bg-transparent'
    : scrolled 
      ? (isDarkMode ? 'bg-[#121212]/90' : 'bg-white/90') 
      : 'bg-transparent';
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerBg} ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link 
          href="/" 
          className="z-50"
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
