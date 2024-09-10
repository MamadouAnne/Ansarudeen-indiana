'use client';

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-gradient-to-br from-green-400 to-blue-500">
      {/* Remove the Spiritual Inspiration section */}
      
      {/* Prophet's Name in Arabic */}
      <div className="absolute top-32 sm:top-36 left-1/2 transform -translate-x-1/2 z-50 w-full px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-arabic animate-glow text-center">
          محمد رسول الله صلى الله عليه وسلم
        </h2>
      </div>

      {/* 3D Firework/Smoke Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-40">
        <div className="firework"></div>
        <div className="firework"></div>
        <div className="firework"></div>
      </div>

      {/* Background with dots */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.2)" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-white px-4">
        <div className="text-center z-10 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-lg">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-shadow">Spreading Divine Light and Wisdom</h2>
          <p className="text-xl sm:text-2xl mb-8 text-shadow font-light">Illuminating hearts through timeless teachings</p>
          <Link href="/contact" className="bg-white text-green-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300 shadow-lg">
            Join Our Community
          </Link>
        </div>

        {/* Down Arrow */}
        <div className="mt-16 animate-bounce">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Our Mission</h2>
          <p className="text-lg text-white leading-relaxed mb-6">
            Ansarudeen Indiana is dedicated to spreading the timeless wisdom of Cheikh Ahmada Tijani and Cheikh Ibrahim Niass,
            fostering spiritual growth, and building a vibrant community rooted in Islamic teachings and Tijaniyya principles.
          </p>
          <div className="flex justify-center">
            <Link href="/teachings" className="bg-white text-green-800 px-6 py-3 rounded-full hover:bg-opacity-90 transition duration-300 text-lg font-semibold shadow-md">
              Explore Our Teachings
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Upcoming Event", content: "Join us for Mawlid Naby, the celebration of the birth of Prophet Muhammad (Peace be upon him) on Sunday, October 15th.", link: "/events" },
              { title: "Words of Wisdom", content: "\"The path to Allah is as numerous as the breaths of creatures.\" - Cheikh Ahmada Tijani", link: "/teachings" },
              { title: "Community Spotlight", content: "\"Ansarudeen Indiana has transformed my spiritual journey and connected me with an amazing community.\" - Zakirou Anne, Member since 2011", link: "/about" }
            ].map((feature, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300">
                <h3 className="text-xl font-bold mb-2 text-center text-white">{feature.title}</h3>
                <p className="text-white text-center mb-4">{feature.content}</p>
                <div className="text-center">
                  <Link href={feature.link} className="text-green-300 hover:text-green-100 transition duration-300">Learn More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-16 px-4 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Join Our Spiritual Journey</h2>
          <p className="text-xl mb-8 text-white">Discover the beauty of Tijaniyya teachings and connect with a vibrant community.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact" className="bg-white text-green-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300 shadow-lg">
              Get in Touch
            </Link>
            <Link href="/contact#donate" className="bg-green-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300 shadow-lg">
              Donate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
