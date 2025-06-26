import { FC } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Logo & Tagline */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              S
            </div>
            <span className="text-xl font-semibold">ShareNRent</span>
          </div>
          <p className="text-sm text-gray-400">
            A modern platform to share, rent, or buy products with ease.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/explore" className="hover:text-white">Explore</a></li>
            <li><a href="/post" className="hover:text-white">Post Ad</a></li>
            <li><a href="/account" className="hover:text-white">My Account</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Support</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/faq" className="hover:text-white">FAQ</a></li>
            <li><a href="/help" className="hover:text-white">Help Center</a></li>
            <li><a href="/terms" className="hover:text-white">Terms of Use</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
          <div className="flex space-x-4 text-gray-300">
            <a href="#" className="hover:text-white"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-white"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-white"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-white"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ShareNRent. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
