'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Teachings', path: '/teachings' },
    { name: 'Events', path: '/events' },
    { name: 'Resources', path: '/resources' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-2 bg-white bg-opacity-70 backdrop-blur-md' : 'py-4 bg-transparent'
    }`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="flex items-center">
          <div className="enhanced-artistic-logo">
            <div className="logo-background bg-gradient-to-r from-blue-200 to-green-200"></div>
            <span className="logo-text">Ansarudeen</span>
            <span className="logo-subtext">Indiana</span>
            <div className="logo-decoration logo-decoration-1"></div>
            <div className="logo-decoration logo-decoration-2"></div>
            <div className="logo-decoration logo-decoration-3"></div>
            <div className="logo-glow"></div>
          </div>
        </Link>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <ul className={`md:flex md:space-x-8 ${isMenuOpen ? 'block' : 'hidden'} absolute md:relative top-full left-0 right-0 bg-white bg-opacity-90 md:bg-transparent p-6 md:p-0 shadow-lg md:shadow-none rounded-b-lg md:rounded-none`}>
          {navItems.map((item) => (
            <li key={item.name} className="mb-4 md:mb-0">
              <Link href={item.path} className="text-white hover:text-green-300 transition duration-300 block py-2 md:py-0 text-lg font-semibold relative overflow-hidden group">
                <span className="relative z-10">{item.name}</span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-25 transition-opacity duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}