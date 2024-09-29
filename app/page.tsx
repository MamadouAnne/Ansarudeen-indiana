'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaQuoteLeft, FaCalendarAlt, FaBook, FaUsers } from 'react-icons/fa';

export default function Home() {
  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({});

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-white">
        <div className="text-center z-10 bg-green-800 bg-opacity-80 p-8 rounded-lg shadow-lg max-w-3xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">Ansarudeen Indiana</h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Spreading Divine Light and Wisdom</h2>
          <p className="text-xl sm:text-2xl mb-8 font-light">Illuminating hearts through timeless Tijaniyya teachings</p>
          <Link href="/contact" className="bg-white text-green-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300 inline-block">
            Join Our Community
          </Link>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto bg-white bg-opacity-95 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-green-800">Our Mission</h2>
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            Ansarudeen Indiana is dedicated to spreading the timeless wisdom of Cheikh Ahmada Tijani and Cheikh Ibrahim Niass,
            fostering spiritual growth, and building a vibrant community rooted in Islamic teachings and Tijaniyya principles.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed mb-6">
            We strive to create a welcoming environment where individuals can deepen their faith, expand their knowledge,
            and contribute positively to society through the guidance of Tijaniyya teachings.
          </p>
          <div className="flex justify-center">
            <Link href="/teachings" className="bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300 text-lg font-semibold">
              Explore Our Teachings
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: FaCalendarAlt, title: "Upcoming Event", content: "Join us for Mawlid Naby, the celebration of the birth of Prophet Muhammad (Peace be upon him) on Sunday, October 15th.", link: "/events" },
              { icon: FaQuoteLeft, title: "Words of Wisdom", content: "\"The path to Allah is as numerous as the breaths of creatures.\" - Cheikh Ahmada Tijani", link: "/teachings" },
              { icon: FaUsers, title: "Community Spotlight", content: "\"Ansarudeen Indiana has transformed my spiritual journey and connected me with an amazing community.\" - Zakirou Anne, Member since 2011", link: "/about" }
            ].map((feature, index) => (
              <div key={index} className="bg-white bg-opacity-95 p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300">
                <feature.icon className="text-4xl text-green-800 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2 text-center text-green-800">{feature.title}</h3>
                <p className="text-gray-800 text-center mb-4">{feature.content}</p>
                <div className="text-center">
                  <Link href={feature.link} className="text-green-700 hover:text-green-900 transition duration-300 font-semibold">Learn More</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Gallery Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Our Activities and Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { type: 'image', src: '/images/medina.jpg', alt: 'The Mosque of Medina Baye', caption: 'The Mosque of Medina Baye' },
              { type: 'video', src: '/videos/BabacarThiam.mp4', caption: 'Babacar Thiam extrait Gamou Medina Baye 1997' },
              { type: 'image', src: '/images/event2.jpg', alt: 'Charity drive', caption: 'Recent charity drive' },
              { type: 'image', src: '/images/event3.jpg', alt: 'Youth program', caption: 'Youth educational program' },
              { type: 'video', src: '/videos/celebration.mp4', caption: 'Eid celebration highlights' },
              { type: 'image', src: '/images/event4.jpg', alt: 'Workshop', caption: 'Islamic calligraphy workshop' },
            ].map((item, index) => (
              <div key={index} className="bg-white bg-opacity-95 rounded-xl overflow-hidden shadow-xl group hover:shadow-2xl transition duration-300">
                {item.type === 'image' ? (
                  imageError[item.src || ''] ? (
                    <div className="w-full h-48 flex items-center justify-center bg-gray-200 text-gray-500">
                      Image not available
                    </div>
                  ) : (
                    <Image 
                      src={item.src || ''}
                      alt={item.alt || ''}
                      width={400} 
                      height={300} 
                      className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                      onError={() => setImageError(prev => ({ ...prev, [item.src || '']: true }))}
                    />
                  )
                ) : (
                  <video src={item.src} className="w-full h-48 object-cover" controls />
                )}
                <p className="p-4 text-gray-700 text-center">{item.caption}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/gallery" className="bg-white text-green-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-100 transition duration-300 shadow-lg">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto bg-white bg-opacity-95 rounded-xl shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-green-800">Featured Video</h2>
          <div className="aspect-w-16 aspect-h-9 mb-6">
            <iframe
              src="https://www.youtube.com/embed/v94UFWLhZDQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
          <p className="text-lg text-gray-700 text-center">
            Watch our latest featured video about the Tijaniyya teachings and our community's activities.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-800 bg-opacity-95 rounded-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Join Our Spiritual Journey</h2>
          <p className="text-xl mb-8 text-white">Discover the beauty of Tijaniyya teachings and connect with a vibrant community dedicated to spiritual growth and service.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact" className="bg-white text-green-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-100 transition duration-300 shadow-lg">
              Get in Touch
            </Link>
            <Link href="/contact#donate" className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300 shadow-lg">
              Donate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

