'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/" className="font-semibold text-xl tracking-tight">Ansarudeen Indiana</Link>
      </div>
      <div className="block lg:hidden">
        <button onClick={toggleMenu} className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </button>
      </div>
      <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:ml-auto ${isOpen ? 'block' : 'hidden'}`}>
        <div className="text-sm lg:flex lg:justify-end lg:flex-grow">
          <Link href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4" onClick={closeMenu}>
            About
          </Link>
          <Link href="/teachings" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4" onClick={closeMenu}>
            Teachings
          </Link>
          <Link href="/events" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4" onClick={closeMenu}>
            Events
          </Link>
          <Link href="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white" onClick={closeMenu}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;