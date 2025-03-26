import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

const Navigation = ({ transparent = false, activePage = null }) => {
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

  const navClass = transparent
    ? `fixed top-0 left-0 right-0 z-50 ${isScrolled ? "bg-white" : "bg-transparent"}`
    : "fixed top-0 left-0 right-0 z-50 bg-white";
    
  // Text color based on transparency and scroll state
  const textColor = transparent && !isScrolled ? "text-white" : "text-black";
  
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
              <Image
                src={transparent && !isScrolled ? "/images/thejpc-logo.svg" : "/images/thejpc-logo-dark.svg"}
                alt="TheJPC Logo"
                width={100}
                height={40}
                priority
              />
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
        className={`fixed left-0 top-0 h-full bg-dark-blue text-white pt-40 pl-10 pr-20 z-40 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'md:translate-x-0 -translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-6">
          <Link 
            href="/consulting" 
            className={`font-medium text-xl hover:text-primary-caa-red ${activePage === 'consulting' ? 'text-primary-caa-red' : ''}`}
          >
            For Consulting
          </Link>
          <Link 
            href="/mvai" 
            className={`font-medium text-xl hover:text-primary-caa-red ${activePage === 'mvai' ? 'text-primary-caa-red' : ''}`}
          >
            For MVAI
          </Link>
          <Link 
            href="/unreal" 
            className={`font-medium text-xl hover:text-primary-caa-red ${activePage === 'unreal' ? 'text-primary-caa-red' : ''}`}
          >
            For Unreal
          </Link>
          <Link 
            href="/enterprise" 
            className={`font-medium text-xl hover:text-primary-caa-red ${activePage === 'enterprise' ? 'text-primary-caa-red' : ''}`}
          >
            For Enterprise
          </Link>
          
          <div className="mt-10 space-y-3">
            <Link href="/about-us" className="font-medium text-base hover:text-primary-caa-red block">
              About
            </Link>
            <Link href="/careers" className="font-medium text-base hover:text-primary-caa-red block">
              Careers
            </Link>
            <Link href="/contact" className="font-medium text-base hover:text-primary-caa-red block">
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
