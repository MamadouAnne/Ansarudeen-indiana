'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="bg-green-800 bg-opacity-80 text-white p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Ansarudeen Indiana</Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-green-200">Home</Link>
          <Link href="/about" className="hover:text-green-200">About</Link>
          <Link href="/teachings" className="hover:text-green-200">Teachings</Link>
          <Link href="/events" className="hover:text-green-200">Events</Link>
          <Link href="/gallery" className="hover:text-green-200">Gallery</Link>
          <Link href="/resources" className="hover:text-green-200">Resources</Link>
          <Link href="/contact" className="hover:text-green-200">Contact</Link>
        </div>
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <Link href="/" className="block py-2 hover:text-green-200">Home</Link>
          <Link href="/about" className="block py-2 hover:text-green-200">About</Link>
          <Link href="/teachings" className="block py-2 hover:text-green-200">Teachings</Link>
          <Link href="/events" className="block py-2 hover:text-green-200">Events</Link>
          <Link href="/gallery" className="block py-2 hover:text-green-200">Gallery</Link>
          <Link href="/resources" className="block py-2 hover:text-green-200">Resources</Link>
          <Link href="/contact" className="block py-2 hover:text-green-200">Contact</Link>
        </div>
      )}
    </nav>
  );
}