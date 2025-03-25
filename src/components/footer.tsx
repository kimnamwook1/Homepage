import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto">
        <div className="footer-logo">
          <Link href="/">
            <Image
              src="/images/thejpc-logo.svg"
              alt="TheJPC Logo"
              width={100}
              height={40}
              priority
            />
          </Link>
        </div>

        <div className="footer-links mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <Link href="/about-us" className="block mb-2">About Us</Link>
              <Link href="/social-responsibility" className="block mb-2">Social Responsibility</Link>
              <Link href="/careers" className="block mb-2">Careers</Link>
            </div>
            <div>
              <Link href="/foundation" className="block mb-2">Foundation</Link>
              <Link href="/privacy-policy" className="block mb-2">Privacy</Link>
              <Link href="/terms-of-use" className="block mb-2">Terms</Link>
            </div>
            <div>
              <Link href="/newsroom" className="block mb-2">Newsroom</Link>
              <Link href="/contact-us" className="block mb-2">Contact Us</Link>
              <Link href="/human-rights" className="block mb-2">Human Rights</Link>
            </div>
          </div>
        </div>

        <div className="social-links">
          <p className="mr-2 text-sm">Follow us:</p>
          <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/instagram-icon.svg"
              alt="Instagram"
              width={24}
              height={24}
              className="invert"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
