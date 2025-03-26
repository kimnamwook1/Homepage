import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

type NavigationProps = {
  transparent?: boolean;
  activePage?: string | null;
};

const Navigation = ({ transparent = false, activePage = null }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const navClass = "fixed top-0 left-0 right-0 z-50 bg-white text-black";
  
  // Text color is now always black
  const textColor = "text-black";
  
  // Only show the active page name in the top right for desktop
  const getActivePageName = () => {
    switch(activePage) {
      case 'consulting': return 'For Consulting';
      case 'mvai': return 'For MVAI';
      case 'unreal': return 'For Unreal';
      case 'enterprise': return 'For Enterprise';
      default: return '';
    }
  };

  return (
    <>
      {/* Top navigation - only shows the current page on desktop */}
      <div className={navClass}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-semibold"><span className="font-bold">T</span>he <span className="font-bold">JPC</span></span>
            </Link>
          </div>

          {/* Show only the active page name in top right for desktop */}
          <div className="hidden md:block">
            {activePage && (
              <span className={`font-medium text-sm ${textColor}`}>
                {getActivePageName()}
              </span>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden border-none bg-transparent cursor-pointer ${textColor}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Left side vertical navigation - visible on desktop or when mobile menu is open */}
      <div 
        className={`fixed left-0 top-0 h-full bg-white border-r text-black pt-40 pl-10 pr-20 z-40 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'md:translate-x-0 -translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-6">
          <Link 
            href="/consulting" 
            className={`font-medium text-xl hover:text-primary-caa-red ${activePage === 'consulting' ? 'text-primary-caa-red' : 'text-black'}`}
          >
            For Consulting
          </Link>
          <Link 
            href="/mvai" 
            className={`font-medium text-xl hover:text-primary-caa-red ${activePage === 'mvai' ? 'text-primary-caa-red' : 'text-black'}`}
          >
            For MVAI
          </Link>
          <Link 
            href="/unreal" 
            className={`font-medium text-xl hover:text-primary-caa-red ${activePage === 'unreal' ? 'text-primary-caa-red' : 'text-black'}`}
          >
            For Unreal
          </Link>
          <Link 
            href="/enterprise" 
            className={`font-medium text-xl hover:text-primary-caa-red ${activePage === 'enterprise' ? 'text-primary-caa-red' : 'text-black'}`}
          >
            For Enterprise
          </Link>
          
          <div className="mt-10 space-y-3">
            <Link href="/about-us" className="font-medium text-base text-black hover:text-primary-caa-red block">
              About
            </Link>
            <Link href="/careers" className="font-medium text-base text-black hover:text-primary-caa-red block">
              Careers
            </Link>
            <Link href="/contact" className="font-medium text-base text-black hover:text-primary-caa-red block">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;
