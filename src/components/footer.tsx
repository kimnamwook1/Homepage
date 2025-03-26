import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10 border-t">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <Link href="/">
            <span className="text-xl font-semibold"><span className="font-bold">T</span>he <span className="font-bold">JPC</span></span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/about-us" className="block mb-3 hover:underline">About Us</Link>
            <Link href="/social-responsibility" className="block mb-3 hover:underline">Social Responsibility</Link>
            <Link href="/careers" className="block mb-3 hover:underline">Careers</Link>
          </div>
          <div>
            <Link href="/foundation" className="block mb-3 hover:underline">Foundation</Link>
            <Link href="/privacy-policy" className="block mb-3 hover:underline">Privacy</Link>
            <Link href="/terms-of-use" className="block mb-3 hover:underline">Terms</Link>
          </div>
          <div>
            <Link href="/newsroom" className="block mb-3 hover:underline">Newsroom</Link>
            <Link href="/contact" className="block mb-3 hover:underline">Contact Us</Link>
            <Link href="/human-rights" className="block mb-3 hover:underline">Human Rights</Link>
          </div>
        </div>

        <div className="mt-10 flex items-center">
          <span className="mr-4">Follow us:</span>
          <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="mr-3">
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
