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
    } else {
      // 슬라이드 아웃 애니메이션 후 완전히 숨김
      const timer = setTimeout(() => {
        setIsVisible(false);
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
      className={`fixed top-0 right-0 w-full md:w-96 h-full bg-[#23272D] z-50 transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <button 
        className="absolute top-8 right-8 text-white text-3xl"
        onClick={toggleMenu}
        aria-label="Close menu"
      >
        ×
      </button>

      <div className="p-12 pt-24 text-white">
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
  return (
    <button 
      className="fixed top-8 right-8 z-50 flex flex-col justify-center items-center w-10 h-10"
      onClick={toggleMenu}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <span className={`block w-6 h-0.5 bg-black dark:bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
      <span className={`block w-6 h-0.5 bg-black dark:bg-white mt-1.5 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
      <span className={`block w-6 h-0.5 bg-black dark:bg-white mt-1.5 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
    </button>
  );
};

// 햄버거 메뉴 컨테이너
export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HamburgerButton toggleMenu={toggleMenu} isOpen={isOpen} />
      <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
}
