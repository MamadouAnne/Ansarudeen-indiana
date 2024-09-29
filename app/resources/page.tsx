'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBook, FaFileAlt, FaVideo, FaHeadphones, FaExternalLinkAlt, FaSearch } from 'react-icons/fa';

const resources = [
  {
    id: 1,
    title: "Introduction to Tijaniyya",
    type: "E-Book",
    description: "A comprehensive guide to the foundations of the Tijaniyya order.",
    link: "/resources/intro-to-tijaniyya.pdf",
    icon: FaBook,
    category: "Books"
  },
  {
    id: 2,
    title: "Dhikr Recitation Guide",
    type: "PDF",
    description: "Step-by-step instructions for daily Tijaniyya dhikr practices.",
    link: "/resources/dhikr-guide.pdf",
    icon: FaFileAlt,
    category: "Guides"
  },
  {
    id: 3,
    title: "The Life of Cheikh Ahmada Tijani",
    type: "Video",
    description: "A documentary exploring the life and teachings of the founder.",
    link: "https://youtube.com/watch?v=example",
    icon: FaVideo,
    category: "Videos"
  },
  {
    id: 4,
    title: "Tijaniyya Litanies Audio",
    type: "Audio",
    description: "Recordings of essential Tijaniyya litanies and prayers.",
    link: "/resources/tijaniyya-litanies.mp3",
    icon: FaHeadphones,
    category: "Audio"
  },
  {
    id: 5,
    title: "Sufi Ethics in Modern Times",
    type: "Article",
    description: "An exploration of applying Sufi ethical principles in contemporary life.",
    link: "/blog/sufi-ethics-modern-times",
    icon: FaFileAlt,
    category: "Articles"
  },
  {
    id: 6,
    title: "Tijaniyya Genealogy Chart",
    type: "PDF",
    description: "A visual representation of the spiritual lineage in the Tijaniyya order.",
    link: "/resources/tijaniyya-genealogy.pdf",
    icon: FaFileAlt,
    category: "Guides"
  }
];

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(resources.map(r => r.category)))];

  const filteredResources = resources.filter(resource =>
    (activeCategory === "All" || resource.category === activeCategory) &&
    resource.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-cream-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold mb-4 text-green-900">Tijaniyya Resources</h1>
          <p className="text-xl text-green-800 max-w-2xl mx-auto">
            Explore our collection of books, guides, videos, and audio resources to deepen your understanding of the Tijaniyya path.
          </p>
        </section>

        {/* Search and Filter Section */}
        <section className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search resources..."
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

        {/* Resources Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource) => (
              <div key={resource.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <resource.icon className="text-3xl text-green-600 mr-3" />
                    <h3 className="text-xl font-serif font-bold text-green-800">{resource.title}</h3>
                  </div>
                  <p className="text-green-700 mb-4">{resource.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-green-600 font-semibold">{resource.type}</span>
                    <Link href={resource.link} className="inline-flex items-center text-green-600 hover:text-green-800 font-semibold">
                      Access Resource
                      <FaExternalLinkAlt className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-serif font-bold mb-4 text-green-900">Contribute to Our Resources</h2>
          <p className="text-xl mb-6 text-green-800">
            Have a valuable resource to share with the community? We welcome contributions from our members.
          </p>
          <Link href="/contact" className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300 inline-block">
            Submit a Resource
          </Link>
        </section>
      </div>
    </div>
  );
}