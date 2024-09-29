'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaCalendar, FaClock, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

const events = [
  {
    id: 1,
    title: "Annual Mawlid Celebration",
    date: "2023-10-15",
    time: "19:00",
    location: "Ansarudeen Indiana Mosque",
    description: "Join us for our annual celebration of the birth of Prophet Muhammad (Peace be upon him).",
    image: "/images/events/mawlid.jpg",
    category: "Celebration"
  },
  {
    id: 2,
    title: "Weekly Dhikr Gathering",
    date: "2023-09-22",
    time: "20:00",
    location: "Ansarudeen Indiana Mosque",
    description: "Participate in our weekly communal dhikr session to remember Allah and purify our hearts.",
    image: "/images/events/dhikr.jpg",
    category: "Spiritual Practice"
  },
  {
    id: 3,
    title: "Tijaniyya Teachings Workshop",
    date: "2023-09-30",
    time: "10:00",
    location: "Community Center",
    description: "An in-depth workshop exploring the core teachings of the Tijaniyya order.",
    image: "/images/events/workshop.jpg",
    category: "Education"
  },
  {
    id: 4,
    title: "Charity Food Drive",
    date: "2023-10-07",
    time: "09:00",
    location: "Local Food Bank",
    description: "Help us collect and distribute food to those in need in our community.",
    image: "/images/events/charity.jpg",
    category: "Community Service"
  },
  {
    id: 5,
    title: "Youth Quranic Recitation Competition",
    date: "2023-10-21",
    time: "14:00",
    location: "Ansarudeen Indiana Mosque",
    description: "Encouraging our youth to connect with the Quran through a friendly recitation competition.",
    image: "/images/events/quran.jpg",
    category: "Youth"
  },
  {
    id: 6,
    title: "Interfaith Dialogue: Sufism and Modern Society",
    date: "2023-11-05",
    time: "18:00",
    location: "City Library Auditorium",
    description: "Join us for an enlightening discussion on the role of Sufism in modern society with leaders from various faith traditions.",
    image: "/images/events/interfaith.jpg",
    category: "Dialogue"
  }
];

export default function Events() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(events.map(e => e.category)))];

  const filteredEvents = events.filter(event =>
    (activeCategory === "All" || event.category === activeCategory) &&
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="min-h-screen bg-cream-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold mb-4 text-green-900">Upcoming Events</h1>
          <p className="text-xl text-green-800 max-w-2xl mx-auto">
            Join us in our spiritual gatherings, educational workshops, and community service activities.
          </p>
        </section>

        {/* Search and Filter Section */}
        <section className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search events..."
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

        {/* Events Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <div className="relative h-48">
                  <Image
                    src={event.image}
                    alt={event.title}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 rounded-bl-lg">
                    {event.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2 text-green-800">{event.title}</h3>
                  <p className="text-green-700 mb-4">{event.description}</p>
                  <div className="flex items-center text-green-600 mb-2">
                    <FaCalendar className="mr-2" />
                    <span>{new Date(event.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-green-600 mb-2">
                    <FaClock className="mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-green-600 mb-4">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <Link href={`/events/${event.id}`} className="inline-block bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition duration-300">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-serif font-bold mb-4 text-green-900">Get Involved</h2>
          <p className="text-xl mb-6 text-green-800">
            Our events are open to all. Join us in fostering spiritual growth and building a stronger community.
          </p>
          <Link href="/contact" className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300 inline-block">
            Contact Us
          </Link>
        </section>
      </div>
    </div>
  );
}