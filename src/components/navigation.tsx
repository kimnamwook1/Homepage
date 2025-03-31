"use client";

import { useRouter } from "next/navigation";
import Header from "./header";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useMenu } from "@/lib/MenuContext";

type NavigationProps = {
  transparent?: boolean;
};

const Navigation = ({ transparent = false }: NavigationProps) => {
  const pathname = usePathname();
  const router = useRouter();
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

  // 네비게이션 핸들러 - 정적 내보내기에서도 작동하는 방식으로 수정
  const handleNavigation = (page: string, path: string) => {
    setActivePage(page);
    setMenuActive(true);
    
    // 정적 내보내기에서 작동하도록 href 속성으로 이동처리
    window.location.href = path;
  };

  return (
    <>
      {/* Logo */}
      <Header />

      {/* Main navigation - 메뉴 클릭 시 menu-clicked 클래스와 애니메이션 클래스 추가 */}
      <nav className={`main-navigation ${menuActive ? 'menu-clicked' : ''} ${animateIn ? 'animate-in' : ''}`}>
        <ul>
          <li className="main-menu-item">
            <a 
              href="/consulting" 
              className={`main-menu-link ${activePage === 'consulting' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('consulting', '/consulting');
              }}
            >
              For Consulting
            </a>
          </li>
          <li className="main-menu-item">
            <a 
              href="/mvai" 
              className={`main-menu-link ${activePage === 'mvai' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('mvai', '/mvai');
              }}
            >
              For MVAI
            </a>
          </li>
          <li className="main-menu-item">
            <a 
              href="/unreal" 
              className={`main-menu-link ${activePage === 'unreal' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('unreal', '/unreal');
              }}
            >
              For Unreal
            </a>
          </li>

          
          {/* Footer navigation */}
          <li className="footer-navigation">
            <ul>
              <li>
                <a 
                  href="/about-us"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('about-us', '/about-us');
                  }}
                  className={activePage === 'about-us' ? 'active' : ''}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation('contact', '/contact');
                  }}
                  className={activePage === 'contact' ? 'active' : ''}
                >
                  Contact
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
