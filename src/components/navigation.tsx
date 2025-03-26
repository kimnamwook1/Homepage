"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useMenu } from "@/lib/MenuContext";

type NavigationProps = {
  transparent?: boolean; // 추가: transparent 속성(실제로는 사용하지 않음)
};

const Navigation = ({ transparent = false }: NavigationProps) => {
  const pathname = usePathname();
  const { activePage, menuActive, setActivePage, setMenuActive } = useMenu();
  const [animateIn, setAnimateIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 현재 경로에 따라 activePage 업데이트
  useEffect(() => {
    if (pathname) {
      // 경로에서 첫 번째 세그먼트 추출 (예: /consulting -> consulting)
      const segment = pathname.split('/')[1];
      if (segment) {
        setActivePage(segment);
        setMenuActive(true); // 페이지가 로드되면 메뉴가 활성화된 상태로 설정
      } else {
        setActivePage(null);
        setMenuActive(false); // 홈페이지에서는 메뉴 활성화 상태 해제
      }
    }
  }, [pathname, setActivePage, setMenuActive]);

  // 페이지 로드 시 애니메이션 시작
  useEffect(() => {
    // 약간의 지연 후 애니메이션 시작
    const timer = setTimeout(() => {
      setAnimateIn(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // 다크모드 감지
  useEffect(() => {
    // 초기 다크모드 상태 감지
    if (typeof window !== 'undefined') {
      setIsDarkMode(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
      
      // 다크모드 변경 감지 이벤트 리스너
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = (e: MediaQueryListEvent) => {
        setIsDarkMode(e.matches);
      };
      
      // 이벤트 리스너 추가 (최신 브라우저)
      if (darkModeMediaQuery.addEventListener) {
        darkModeMediaQuery.addEventListener('change', handler);
      }
      
      // 클린업 함수
      return () => {
        if (darkModeMediaQuery.removeEventListener) {
          darkModeMediaQuery.removeEventListener('change', handler);
        }
      };
    }
  }, []);

  // 다크모드에 따라 로고 이미지 선택
  const logoSrc = isDarkMode 
    ? "/images/TheJPC_logo_White.png" 
    : "/images/TheJPC_logo_Blacked.png";

  return (
    <>
      {/* Logo */}
      <div className="header">
        <Link href="/" className="logo" onClick={() => {
          setActivePage(null);
          setMenuActive(false);
        }}>
          <Image 
            src={logoSrc}
            alt="The JPC Logo" 
            width={120} 
            height={48} 
            priority
          />
        </Link>
      </div>

      {/* Main navigation - 메뉴 클릭 시 menu-clicked 클래스와 애니메이션 클래스 추가 */}
      <nav className={`main-navigation ${menuActive ? 'menu-clicked' : ''} ${animateIn ? 'animate-in' : ''}`}>
        <ul>
          <li className="main-menu-item">
            <Link 
              href="/consulting" 
              className={`main-menu-link ${activePage === 'consulting' ? 'active' : ''}`}
              onClick={() => {
                setActivePage('consulting');
                setMenuActive(true);
              }}
            >
              For Consulting
            </Link>
          </li>
          <li className="main-menu-item">
            <Link 
              href="/mvai" 
              className={`main-menu-link ${activePage === 'mvai' ? 'active' : ''}`}
              onClick={() => {
                setActivePage('mvai');
                setMenuActive(true);
              }}
            >
              For MVAI
            </Link>
          </li>
          <li className="main-menu-item">
            <Link 
              href="/unreal" 
              className={`main-menu-link ${activePage === 'unreal' ? 'active' : ''}`}
              onClick={() => {
                setActivePage('unreal');
                setMenuActive(true);
              }}
            >
              For Unreal
            </Link>
          </li>

          
          {/* Footer navigation */}
          <li className="footer-navigation">
            <ul>
              <li>
                <Link 
                  href="/about-us"
                  onClick={() => {
                    setActivePage('about-us');
                    setMenuActive(true);
                  }}
                  className={activePage === 'about-us' ? 'active' : ''}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact"
                  onClick={() => {
                    setActivePage('contact');
                    setMenuActive(true);
                  }}
                  className={activePage === 'contact' ? 'active' : ''}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
