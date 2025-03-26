import Link from "next/link";
import Image from "next/image";

type NavigationProps = {
  activePage?: string | null;
  transparent?: boolean; // 추가: transparent 속성(실제로는 사용하지 않음)
};

const Navigation = ({ activePage = null, transparent = false }: NavigationProps) => {
  return (
    <>
      {/* Logo */}
      <div className="header">
        <Link href="/" className="logo">
          <Image 
            src="/images/TheJPC_logo_cropped.png" 
            alt="The JPC Logo" 
            width={120} 
            height={48} 
            priority
          />
        </Link>
      </div>

      {/* Main navigation */}
      <nav className="main-navigation">
        <ul>
          <li className="main-menu-item">
            <Link 
              href="/consulting" 
              className={`main-menu-link ${activePage === 'consulting' ? 'active' : ''}`}
            >
              For Consulting
            </Link>
          </li>
          <li className="main-menu-item">
            <Link 
              href="/mvai" 
              className={`main-menu-link ${activePage === 'mvai' ? 'active' : ''}`}
            >
              For MVAI
            </Link>
          </li>
          <li className="main-menu-item">
            <Link 
              href="/unreal" 
              className={`main-menu-link ${activePage === 'unreal' ? 'active' : ''}`}
            >
              For Unreal
            </Link>
          </li>
          <li className="main-menu-item">
            <Link 
              href="/enterprise" 
              className={`main-menu-link ${activePage === 'enterprise' ? 'active' : ''}`}
            >
              For Enterprise
            </Link>
          </li>
          
          {/* Footer navigation */}
          <li className="footer-navigation">
            <ul>
              <li>
                <Link href="/about-us">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
