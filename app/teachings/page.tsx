'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaSearch, FaQuoteLeft } from 'react-icons/fa';

const teachings = [
  {
    id: 1,
    title: "The Essence of Tijaniyya",
    excerpt: "Explore the core principles and spiritual foundations of the Tijaniyya order.",
    image: "/images/teachings/tijaniyya-essence.jpg",
    category: "Fundamentals"
  },
  {
    id: 2,
    title: "Dhikr Practices",
    excerpt: "Learn about the various forms of remembrance and their significance in our spiritual path.",
    image: "/images/teachings/dhikr.jpg",
    category: "Practices"
  },
  {
    id: 3,
    title: "The Life of Cheikh Ahmada Tijani",
    excerpt: "Discover the inspiring journey of the founder of the Tijaniyya order.",
    image: "/images/teachings/cheikh-ahmada-tijani.jpg",
    category: "History"
  },
  {
    id: 4,
    title: "Fayda Tijaniyya",
    excerpt: "Understand the concept of divine effusion in the Tijaniyya tradition.",
    image: "/images/teachings/fayda.jpg",
    category: "Concepts"
  },
  {
    id: 5,
    title: "Adab in Sufism",
    excerpt: "Explore the importance of spiritual etiquette in the Sufi path.",
    image: "/images/teachings/adab.jpg",
    category: "Practices"
  },
  {
    id: 6,
    title: "The Wisdom of Cheikh Ibrahim Niass",
    excerpt: "Delve into the teachings of one of the most influential figures in modern Tijaniyya.",
    image: "/images/teachings/cheikh-ibrahim-niass.jpg",
    category: "History"
  }
];

export default function Teachings() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(teachings.map(t => t.category)))];

  const filteredTeachings = teachings.filter(teaching =>
    (activeCategory === "All" || teaching.category === activeCategory) &&
    teaching.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-cream-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold mb-4 text-green-900">Tijaniyya Teachings</h1>
          <p className="text-xl text-green-800 max-w-2xl mx-auto">
            Embark on a journey of spiritual enlightenment through the timeless wisdom of the Tijaniyya order.
          </p>
        </section>

        {/* Search and Filter Section */}
        <section className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search teachings..."
                className="w-full pl-10 pr-4 py-2 border-b-2 border-green-600 focus:outline-none focus:border-green-800 text-green-900 bg-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-3 text-green-600" />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full ${activeCategory === category ? 'bg-green-600 text-white' : 'bg-green-100 text-green-800'} hover:bg-green-500 hover:text-white transition duration-300`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Teachings Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTeachings.map((teaching) => (
              <div key={teaching.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <div className="relative h-48">
                  <Image
                    src={teaching.image}
                    alt={teaching.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2 text-green-800">{teaching.title}</h3>
                  <p className="text-green-700 mb-4">{teaching.excerpt}</p>
                  <Link href={`/teachings/${teaching.id}`} className="text-green-600 hover:text-green-800 font-semibold">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Quote */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
            <FaQuoteLeft className="text-4xl text-green-600 mb-4 mx-auto" />
            <blockquote className="text-2xl font-serif text-green-800 italic mb-4">
              "The path to Allah is as numerous as the breaths of creatures."
            </blockquote>
            <p className="text-lg font-semibold text-green-700">- Cheikh Ahmada Tijani</p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-serif font-bold mb-4 text-green-900">Deepen Your Understanding</h2>
          <p className="text-xl mb-6 text-green-800">
            Join our classes and workshops to explore these teachings in depth and connect with fellow seekers on the spiritual path.
          </p>
          <Link href="/events" className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300 inline-block">
            View Upcoming Classes
          </Link>
        </section>
      </div>
    </div>
  );
}