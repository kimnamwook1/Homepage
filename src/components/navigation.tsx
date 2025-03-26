import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

const Navigation = ({ transparent = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = transparent
    ? `main-navigation ${isScrolled ? "white-bg" : ""}`
    : "main-navigation white-bg";
    
  // Text color based on transparency and scroll state
  const textColor = transparent && !isScrolled ? "text-white" : "text-black";

  return (
    <div className="relative">
      <nav className={navClass}>
        <div className="flex justify-between w-full">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src={transparent && !isScrolled ? "/images/thejpc-logo.svg" : "/images/thejpc-logo-dark.svg"}
                alt="TheJPC Logo"
                width={100}
                height={40}
                priority
              />
            </Link>
          </div>

          <div className="desktop-menu hidden md:flex items-center space-x-8">
            <button 
              className={`font-medium text-sm ${textColor} hover:text-primary-caa-red border-none bg-transparent cursor-pointer`}
              onClick={() => setActiveMenu(activeMenu === 'consulting' ? null : 'consulting')}
            >
              For Consulting
            </button>
            <button 
              className={`font-medium text-sm ${textColor} hover:text-primary-caa-red border-none bg-transparent cursor-pointer`}
              onClick={() => setActiveMenu(activeMenu === 'mvai' ? null : 'mvai')}
            >
              For MVAI
            </button>
            <button 
              className={`font-medium text-sm ${textColor} hover:text-primary-caa-red border-none bg-transparent cursor-pointer`}
              onClick={() => setActiveMenu(activeMenu === 'unreal' ? null : 'unreal')}
            >
              For Unreal
            </button>
            <button 
              className={`font-medium text-sm ${textColor} hover:text-primary-caa-red border-none bg-transparent cursor-pointer`}
              onClick={() => setActiveMenu(activeMenu === 'enterprise' ? null : 'enterprise')}
            >
              For Enterprise
            </button>
            <Link href="/about-us" className={`font-medium text-xs ${textColor} hover:text-primary-caa-red ml-4`}>
              About
            </Link>
            <Link href="/careers" className={`font-medium text-xs ${textColor} hover:text-primary-caa-red`}>
              Careers
            </Link>
            <Link href="/contact" className={`font-medium text-xs ${textColor} hover:text-primary-caa-red`}>
              Contact
            </Link>
          </div>

          <button
            className="mobile-menu-button border-none bg-transparent cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} className={textColor} />
          </button>
        </div>
      </nav>

      {/* 세로형 메뉴 - 각 메뉴별로 활성화 될 때 표시 */}
      {activeMenu && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-20 z-40"
          onClick={() => setActiveMenu(null)}
        ></div>
      )}

      {activeMenu === 'consulting' && (
        <div className="vertical-menu flex flex-col items-start absolute left-1/4 top-20 transform -translate-x-1/2 space-y-4 bg-white p-6 z-50 shadow-lg">
          <Link href="/consulting" className="font-medium text-lg text-primary-caa-red font-bold">
            For Consulting
          </Link>
          <Link href="/mvai" className="font-medium text-lg hover:text-primary-caa-red">
            For MVAI
          </Link>
          <Link href="/unreal" className="font-medium text-lg hover:text-primary-caa-red">
            For Unreal
          </Link>
          <Link href="/enterprise" className="font-medium text-lg hover:text-primary-caa-red">
            For Enterprise
          </Link>
          
          <div className="mt-8">
            <Link href="/about-us" className="font-medium text-base hover:text-primary-caa-red block mb-2">
              About
            </Link>
            <Link href="/contact" className="font-medium text-base hover:text-primary-caa-red block">
              Contact
            </Link>
          </div>
        </div>
      )}
      
      {activeMenu === 'mvai' && (
        <div className="vertical-menu flex flex-col items-start absolute left-1/4 top-20 transform -translate-x-1/2 space-y-4 bg-white p-6 z-50 shadow-lg">
          <Link href="/consulting" className="font-medium text-lg hover:text-primary-caa-red">
            For Consulting
          </Link>
          <Link href="/mvai" className="font-medium text-lg text-primary-caa-red font-bold">
            For MVAI
          </Link>
          <Link href="/unreal" className="font-medium text-lg hover:text-primary-caa-red">
            For Unreal
          </Link>
          <Link href="/enterprise" className="font-medium text-lg hover:text-primary-caa-red">
            For Enterprise
          </Link>
          
          <div className="mt-8">
            <Link href="/about-us" className="font-medium text-base hover:text-primary-caa-red block mb-2">
              About
            </Link>
            <Link href="/contact" className="font-medium text-base hover:text-primary-caa-red block">
              Contact
            </Link>
          </div>
        </div>
      )}

      {activeMenu === 'unreal' && (
        <div className="vertical-menu flex flex-col items-start absolute left-1/4 top-20 transform -translate-x-1/2 space-y-4 bg-white p-6 z-50 shadow-lg">
          <Link href="/consulting" className="font-medium text-lg hover:text-primary-caa-red">
            For Consulting
          </Link>
          <Link href="/mvai" className="font-medium text-lg hover:text-primary-caa-red">
            For MVAI
          </Link>
          <Link href="/unreal" className="font-medium text-lg text-primary-caa-red font-bold">
            For Unreal
          </Link>
          <Link href="/enterprise" className="font-medium text-lg hover:text-primary-caa-red">
            For Enterprise
          </Link>
          
          <div className="mt-8">
            <Link href="/about-us" className="font-medium text-base hover:text-primary-caa-red block mb-2">
              About
            </Link>
            <Link href="/contact" className="font-medium text-base hover:text-primary-caa-red block">
              Contact
            </Link>
          </div>
        </div>
      )}
      
      {activeMenu === 'enterprise' && (
        <div className="vertical-menu flex flex-col items-start absolute left-1/4 top-20 transform -translate-x-1/2 space-y-4 bg-white p-6 z-50 shadow-lg">
          <Link href="/consulting" className="font-medium text-lg hover:text-primary-caa-red">
            For Consulting
          </Link>
          <Link href="/mvai" className="font-medium text-lg hover:text-primary-caa-red">
            For MVAI
          </Link>
          <Link href="/unreal" className="font-medium text-lg hover:text-primary-caa-red">
            For Unreal
          </Link>
          <Link href="/enterprise" className="font-medium text-lg text-primary-caa-red font-bold">
            For Enterprise
          </Link>
          
          <div className="mt-8">
            <Link href="/about-us" className="font-medium text-base hover:text-primary-caa-red block mb-2">
              About
            </Link>
            <Link href="/contact" className="font-medium text-base hover:text-primary-caa-red block">
              Contact
            </Link>
          </div>
        </div>
      )}

      {isMenuOpen && (
        <div className="mobile-menu absolute top-full left-0 right-0 bg-white shadow-md z-50 md:hidden">
          <div className="p-4">
            <button 
              className="block py-2 font-medium w-full text-left"
              onClick={() => {
                setActiveMenu('consulting');
                setIsMenuOpen(false);
              }}
            >
              For Consulting
            </button>
            <button 
              className="block py-2 font-medium w-full text-left"
              onClick={() => {
                setActiveMenu('mvai');
                setIsMenuOpen(false);
              }}
            >
              For MVAI
            </button>
            <button 
              className="block py-2 font-medium w-full text-left"
              onClick={() => {
                setActiveMenu('unreal');
                setIsMenuOpen(false);
              }}
            >
              For Unreal
            </button>
            <button 
              className="block py-2 font-medium w-full text-left"
              onClick={() => {
                setActiveMenu('enterprise');
                setIsMenuOpen(false);
              }}
            >
              For Enterprise
            </button>
            <Link href="/about-us" className="block py-2 font-medium">
              About
            </Link>
            <Link href="/careers" className="block py-2 font-medium">
              Careers
            </Link>
            <Link href="/contact" className="block py-2 font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
