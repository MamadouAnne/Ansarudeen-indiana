import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 bg-opacity-50 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Ansarudeen Indiana</h3>
            <p className="text-gray-300">Spreading Divine Light and Wisdom</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul className="text-gray-300">
              <li className="mb-2"><Link href="/" className="hover:text-white">Home</Link></li>
              <li className="mb-2"><Link href="/about" className="hover:text-white">About</Link></li>
              <li className="mb-2"><Link href="/events" className="hover:text-white">Events</Link></li>
              <li className="mb-2"><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">Connect With Us</h3>
            <ul className="text-gray-300">
              <li className="mb-2"><a href="#" className="hover:text-white">Facebook</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Twitter</a></li>
              <li className="mb-2"><a href="#" className="hover:text-white">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Ansarudeen Indiana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;