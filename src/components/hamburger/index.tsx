"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMenu } from '@/lib/MenuContext';

type HamburgerMenuProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, toggleMenu }) => {
  const pathname = usePathname();
  const { activePage, setActivePage, setMenuActive } = useMenu();
  const [isVisible, setIsVisible] = useState(false);

  // 메뉴 열릴 때 애니메이션 위한 상태 관리
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // 메뉴가 열릴 때 body 스크롤 막기
      document.body.style.overflow = 'hidden';
    } else {
      // 슬라이드 아웃 애니메이션 후 완전히 숨김
      const timer = setTimeout(() => {
        setIsVisible(false);
        // 메뉴가 닫힐 때 body 스크롤 복원
        document.body.style.overflow = '';
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // 메뉴 항목 클릭 핸들러
  const handleMenuItemClick = (page: string) => {
    setActivePage(page);
    setMenuActive(true);
    toggleMenu(); // 메뉴 닫기
  };

  if (!isVisible && !isOpen) {
    return null; // 메뉴가 완전히 닫히면 렌더링하지 않음
  }

  return (
    <div 
      className={`fixed top-0 right-0 w-full md:w-96 h-screen bg-[#23272D] side-menu z-50 transition-transform duration-300 ease-in-out shadow-xl border-l border-gray-700 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      style={{backgroundColor: '#23272D'}}
    >
      <button 
        className="absolute top-4 right-4 md:top-6 md:right-8 text-white font-bold z-50 w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 transition-all"
        onClick={toggleMenu}
        aria-label="Close menu"
      >
        <span className="text-lg leading-none" style={{marginTop: '-2px'}}>×</span>
      </button>

      <div className="p-12 pt-24 text-white w-full h-full bg-[#23272D]" style={{backgroundColor: '#23272D', height: '100vh', overflow: 'auto'}}>
        <ul className="space-y-6">
          <li className="text-3xl font-semibold">
            <Link 
              href="/consulting" 
              className={`block transition-colors ${activePage === 'consulting' ? 'text-[#bb1c33]' : 'hover:text-gray-300'}`}
              onClick={() => handleMenuItemClick('consulting')}
            >
              For Consulting
            </Link>
          </li>
          <li className="text-3xl font-semibold">
            <Link 
              href="/mvai" 
              className={`block transition-colors ${activePage === 'mvai' ? 'text-[#bb1c33]' : 'hover:text-gray-300'}`}
              onClick={() => handleMenuItemClick('mvai')}
            >
              For MVAI
            </Link>
          </li>
          <li className="text-3xl font-semibold">
            <Link 
              href="/unreal" 
              className={`block transition-colors ${activePage === 'unreal' ? 'text-[#bb1c33]' : 'hover:text-gray-300'}`}
              onClick={() => handleMenuItemClick('unreal')}
            >
              For Unreal
            </Link>
          </li>
          <li className="mt-12">
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/about-us"
                  className={`block transition-colors ${activePage === 'about-us' ? 'text-[#bb1c33]' : 'hover:text-gray-300'}`}
                  onClick={() => handleMenuItemClick('about-us')}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact"
                  className={`block transition-colors ${activePage === 'contact' ? 'text-[#bb1c33]' : 'hover:text-gray-300'}`}
                  onClick={() => handleMenuItemClick('contact')}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

// 햄버거 아이콘 버튼 컴포넌트
const HamburgerButton: React.FC<{ toggleMenu: () => void; isOpen: boolean }> = ({ toggleMenu, isOpen }) => {
  const lineColor = 'bg-black'; // 항상 검은색으로 설정
  
  if (isOpen) return null; // 메뉴가 열리면 햄버거 버튼 숨김
  
  return (
    <button 
      className="absolute top-4 right-4 md:top-6 md:right-8 z-[60] flex flex-col justify-center items-center w-10 h-10 p-2 rounded-md bg-white shadow-sm"
      onClick={toggleMenu}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <span className={`block w-6 h-0.5 ${lineColor} transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
      <span className={`block w-6 h-0.5 ${lineColor} mt-1.5 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
      <span className={`block w-6 h-0.5 ${lineColor} mt-1.5 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
    </button>
  );
};

// 햄버거 메뉴 컨테이너
type HamburgerProps = {
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
};

export default function Hamburger({ isOpen: externalIsOpen, setIsOpen: externalSetIsOpen }: HamburgerProps = {}) {
  // 외부에서 받은 상태가 없으면 내부 상태 사용
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  
  // 외부 상태가 있는지 여부
  const hasExternalState = externalIsOpen !== undefined && externalSetIsOpen !== undefined;
  
  // 사용할 상태와 설정 함수
  const isOpen = hasExternalState ? externalIsOpen : internalIsOpen;
  const setIsOpen = hasExternalState ? externalSetIsOpen : setInternalIsOpen;
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // ESC 키를 눌렀을 때 메뉴 닫기
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        toggleMenu();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    
    // 배경 스크롤 제어
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('has-menu-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('has-menu-open');
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen]);

  return (
    <>
      <HamburgerButton toggleMenu={toggleMenu} isOpen={isOpen} />
      <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
}
