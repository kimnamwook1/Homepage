import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

const Navigation = ({ transparent = false }) => {
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
    ? `main-navigation ${isScrolled ? "white-bg" : ""}`
    : "main-navigation white-bg";

  return (
    <nav className={navClass}>
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
        <div className="dropdown relative">
          <button className="font-medium text-sm hover:text-primary-caa-red">
            For Talent
          </button>
          <div className="dropdown-menu">
            <Link href="/talent/entertainment">
              <div className="px-4 py-2 hover:bg-gray-100">Entertainment</div>
            </Link>
            <Link href="/talent/sports">
              <div className="px-4 py-2 hover:bg-gray-100">Sports</div>
            </Link>
            <Link href="/talent/music">
              <div className="px-4 py-2 hover:bg-gray-100">Music</div>
            </Link>
          </div>
        </div>

        <div className="dropdown relative">
          <button className="font-medium text-sm hover:text-primary-caa-red">
            For Brands
          </button>
          <div className="dropdown-menu">
            <Link href="/brands/consulting">
              <div className="px-4 py-2 hover:bg-gray-100">Brand Consulting</div>
            </Link>
            <Link href="/brands/partnerships">
              <div className="px-4 py-2 hover:bg-gray-100">Partnerships</div>
            </Link>
          </div>
        </div>

        <div className="dropdown relative">
          <button className="font-medium text-sm hover:text-primary-caa-red">
            For Enterprise
          </button>
          <div className="dropdown-menu">
            <Link href="/enterprise/business">
              <div className="px-4 py-2 hover:bg-gray-100">Business Solutions</div>
            </Link>
            <Link href="/enterprise/advisory">
              <div className="px-4 py-2 hover:bg-gray-100">Advisory</div>
            </Link>
          </div>
        </div>

        <Link href="/about-us" className="font-medium text-sm hover:text-primary-caa-red">
          About
        </Link>
        <Link href="/careers" className="font-medium text-sm hover:text-primary-caa-red">
          Careers
        </Link>
        <Link href="/contact" className="font-medium text-sm hover:text-primary-caa-red">
          Contact
        </Link>
      </div>

      <button
        className="mobile-menu-button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Menu size={24} />
      </button>

      {isMenuOpen && (
        <div className="mobile-menu absolute top-full left-0 right-0 bg-white shadow-md z-50 md:hidden">
          <div className="p-4">
            <Link href="/talent" className="block py-2 font-medium">
              For Talent
            </Link>
            <Link href="/brands" className="block py-2 font-medium">
              For Brands
            </Link>
            <Link href="/enterprise" className="block py-2 font-medium">
              For Enterprise
            </Link>
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
    </nav>
  );
};

export default Navigation;
