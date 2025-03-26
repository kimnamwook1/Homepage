import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useMenu } from "@/lib/MenuContext";

type NavigationProps = {
  transparent?: boolean; // 추가: transparent 속성(실제로는 사용하지 않음)
};

const Navigation = ({ transparent = false }: NavigationProps) => {
  const pathname = usePathname();
  const { activePage, menuActive, setActivePage, setMenuActive } = useMenu();

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

  return (
    <>
      {/* Logo */}
      <div className="header">
        <Link href="/" className="logo" onClick={() => {
          setActivePage(null);
          setMenuActive(false);
        }}>
          <Image 
            src="/images/TheJPC_logo_cropped.png" 
            alt="The JPC Logo" 
            width={120} 
            height={48} 
            priority
          />
        </Link>
      </div>

      {/* Main navigation - 메뉴 클릭 시 menu-clicked 클래스 추가 */}
      <nav className={`main-navigation ${menuActive ? 'menu-clicked' : ''}`}>
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
          <li className="main-menu-item">
            <Link 
              href="/enterprise" 
              className={`main-menu-link ${activePage === 'enterprise' ? 'active' : ''}`}
              onClick={() => {
                setActivePage('enterprise');
                setMenuActive(true);
              }}
            >
              For Enterprise
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
