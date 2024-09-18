'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    createBackgroundElements();
  }, []);

  const createBackgroundElements = () => {
    createStars();
    createPlanets();
    createNebulas();
    createShootingStars();
  };

  const createStars = () => {
    const starsContainer = document.querySelector('.stars-container');
    if (starsContainer) {
      for (let i = 0; i < 500; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        star.style.width = star.style.height = `${Math.random() * 2 + 1}px`;
        starsContainer.appendChild(star);
      }
    }
  };

  const createPlanets = () => {
    const planetsContainer = document.querySelector('.planets-container');
    if (planetsContainer) {
      const planetColors = ['#ff9999', '#99ff99', '#9999ff', '#ffff99', '#ff99ff'];
      for (let i = 0; i < 5; i++) {
        const planet = document.createElement('div');
        planet.className = 'planet';
        planet.style.top = `${Math.random() * 100}%`;
        planet.style.left = `${Math.random() * 100}%`;
        planet.style.backgroundColor = planetColors[i];
        planet.style.width = planet.style.height = `${Math.random() * 40 + 20}px`;
        planet.style.animationDuration = `${Math.random() * 20 + 30}s`;
        planetsContainer.appendChild(planet);
      }
    }
  };

  const createNebulas = () => {
    const nebulasContainer = document.querySelector('.nebulas-container');
    if (nebulasContainer) {
      for (let i = 0; i < 3; i++) {
        const nebula = document.createElement('div');
        nebula.className = 'nebula';
        nebula.style.top = `${Math.random() * 100}%`;
        nebula.style.left = `${Math.random() * 100}%`;
        nebula.style.animationDuration = `${Math.random() * 100 + 100}s`;
        nebulasContainer.appendChild(nebula);
      }
    }
  };

  const createShootingStars = () => {
    const shootingStarsContainer = document.querySelector('.shooting-stars');
    if (shootingStarsContainer) {
      for (let i = 0; i < 2; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        shootingStar.style.top = `${Math.random() * 100}%`;
        shootingStar.style.left = `${Math.random() * 100}%`;
        shootingStar.style.animationDuration = `${Math.random() * 10 + 5}s`;
        shootingStarsContainer.appendChild(shootingStar);
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-deep-space">
      <div className="fixed inset-0 z-0">
        <div className="stars-container absolute inset-0"></div>
        <div className="planets-container absolute inset-0"></div>
        <div className="nebulas-container absolute inset-0"></div>
        <div className="shooting-stars absolute inset-0"></div>
      </div>
      <nav className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-4 relative z-20">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-white text-2xl font-bold">Ansarudeen Indiana</Link>
          <div className="space-x-4">
            <Link href="/" className="text-white hover:text-green-300">Home</Link>
            <Link href="/about" className="text-white hover:text-green-300">About</Link>
            <Link href="/teachings" className="text-white hover:text-green-300">Teachings</Link>
            <Link href="/events" className="text-white hover:text-green-300">Events</Link>
            <Link href="/contact" className="text-white hover:text-green-300">Contact</Link>
          </div>
        </div>
      </nav>
      <main className="flex-grow relative z-10">
        {children}
      </main>
      <footer className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-4 relative z-20">
        <div className="container mx-auto text-center text-white">
          © 2023 Ansarudeen Indiana. All rights reserved.
        </div>
      </footer>
    </div>
  );
}