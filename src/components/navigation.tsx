import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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

  // Control body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const headerClass = transparent
    ? `site-header ${isScrolled ? "white-bg" : ""}`
    : "site-header white-bg";

  return (
    <>
      {/* Header with logo and menu trigger */}
      <header id="header" className={headerClass}>
        <div className="site-header-container">
          <Link href="/" className="logo" aria-label="Home">
            <span className="text-xl font-semibold">
              <span className="font-bold">T</span>he <span className="font-bold">JPC</span>
            </span>
          </Link>

          <button
            id="nav-trigger"
            className={`nav-trigger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Full screen menu overlay */}
      <div className={`nav-overlay ${isMenuOpen ? 'active' : ''}`} id="navigation">
        <div className="menu-container">
          <nav className="global-nav">
            <ul>
              <li>
                <Link 
                  href="/consulting" 
                  className={activePage === 'consulting' ? 'active' : ''}
                >
                  For Consulting
                </Link>
                <ul>
                  <li><Link href="/consulting/services" className="linkTo">Services</Link></li>
                  <li><Link href="/consulting/clients" className="linkTo">Clients</Link></li>
                </ul>
              </li>

              <li>
                <Link 
                  href="/mvai" 
                  className={activePage === 'mvai' ? 'active' : ''}
                >
                  For MVAI
                </Link>
                <ul>
                  <li><Link href="/mvai/portfolio" className="linkTo">Portfolio</Link></li>
                  <li><Link href="/mvai/services" className="linkTo">Services</Link></li>
                </ul>
              </li>

              <li>
                <Link 
                  href="/unreal" 
                  className={activePage === 'unreal' ? 'active' : ''}
                >
                  For Unreal
                </Link>
                <ul>
                  <li><Link href="/unreal/studio" className="linkTo">Studio</Link></li>
                  <li><Link href="/unreal/services" className="linkTo">Services</Link></li>
                </ul>
              </li>

              <li>
                <Link 
                  href="/enterprise" 
                  className={activePage === 'enterprise' ? 'active' : ''}
                >
                  For Enterprise
                </Link>
                <ul>
                  <li><Link href="/enterprise/business" className="linkTo">Business Solutions</Link></li>
                  <li><Link href="/enterprise/advisory" className="linkTo">Advisory</Link></li>
                </ul>
              </li>
            </ul>
          </nav>

          <div className="overlay-footer">
            <div className="homepage-ft">
              <nav>
                <ul>
                  <li><Link href="/about-us">About</Link></li>
                  <li><Link href="/careers">Careers</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
