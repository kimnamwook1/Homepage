import Link from "next/link";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="content-container">
        <div className="gutter-container">
          <div className="footer-standard">
            <div className="footer-logo-column">
              <Link href="/" title="Home" rel="home" className="logo">
                <span className="text-xl font-semibold">
                  <span className="font-bold">T</span>he <span className="font-bold">JPC</span>
                </span>
              </Link>
            </div>

            <nav className="overlay-footer">
              <ul>
                <li>
                  <Link href="/about-us" title="About Us">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/social-responsibility" title="Social Responsibility">
                    Social Responsibility
                  </Link>
                </li>
                <li>
                  <Link href="/careers" title="Careers">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/foundation" title="Foundation">
                    Foundation
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" title="Privacy">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-use" title="Terms">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/newsroom" title="Newsroom">
                    Newsroom
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" title="Contact Us">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/human-rights" title="Human Rights">
                    Human Rights
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
