import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-semibold mb-4">DeLegal</h3>
          <p className="text-sm">
            Platform hukum untuk membantu Anda mengelola dokumen dan layanan
            hukum dengan mudah.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Navigasi</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Beranda
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline">
                Layanan
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Kontak
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Sumber Daya</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/faq" className="hover:underline">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:underline">
                Kebijakan Privasi
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:underline">
                Syarat & Ketentuan
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Ikuti Kami</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:underline"
              >
                <FaTwitter />
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:underline"
              >
                <FaFacebook />
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:underline"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:underline"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} DeLegal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
