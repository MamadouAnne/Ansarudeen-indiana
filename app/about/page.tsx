'use client';

import Image from "next/image";
import Link from "next/link";
import { FaQuoteLeft, FaHistory, FaLandmark, FaUsers } from 'react-icons/fa';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="relative mb-16">
        <div className="bg-green-800 text-white py-20 px-8 rounded-lg shadow-xl">
          <h1 className="text-5xl font-bold mb-4 text-center">About Ansarudeen Indiana</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover our journey, mission, and the vibrant community that makes Ansarudeen Indiana a beacon of spiritual growth and enlightenment.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="mb-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-green-800">Our Story</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <Image
                src="/images/founder.jpg"
                alt="Founder of Ansarudeen Indiana"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg text-gray-700 mb-4">
                Ansarudeen Indiana was founded in 2010 by a group of dedicated followers of Cheikh Ibrahim Nass, inspired by the teachings of Cheikh Ahmada Tijani and Cheikh Ibrahim Niass.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Over the years, we have grown from a small gathering of believers to a thriving community, united in our pursuit of spiritual growth and service to humanity.
              </p>
              <p className="text-lg text-gray-700">
                Today, we continue to honor our founders' vision while adapting to the needs of our modern community, providing a welcoming space for all who seek to deepen their faith and understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission and Values */}
      <section className="mb-16">
        <div className="bg-green-50 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-green-800 text-center">Our Mission and Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: FaHistory, title: "Preserve Tradition", content: "We are committed to preserving and sharing the rich spiritual heritage of the Tijaniyya order." },
              { icon: FaLandmark, title: "Foster Growth", content: "We provide a nurturing environment for spiritual and personal development, guided by timeless wisdom." },
              { icon: FaUsers, title: "Build Community", content: "We strive to create a strong, supportive community that extends beyond our local boundaries." }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <value.icon className="text-4xl text-green-800 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2 text-center text-green-800">{value.title}</h3>
                <p className="text-gray-700 text-center">{value.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Testimonials */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-green-800 text-center">Voices from Our Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { name: "Aisha Johnson", role: "Member since 2010", quote: "Ansarudeen Indiana has been a guiding light in my spiritual journey, providing me with knowledge, support, and a sense of belonging." },
            { name: "Omar Patel", role: "Youth Program Participant", quote: "The youth programs at Ansarudeen have helped me connect with my faith in a meaningful way and build lasting friendships." },
            { name: "Fatima Diallo", role: "Volunteer Coordinator", quote: "Being part of Ansarudeen's outreach initiatives has shown me the true power of community service and compassion." },
            { name: "Ibrahim Hassan", role: "Elder Member", quote: "I've witnessed the growth of our community over decades, and I'm inspired by how we've stayed true to our core values while embracing positive change." }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <FaQuoteLeft className="text-3xl text-green-800 mb-4" />
              <p className="text-lg text-gray-700 mb-4 italic">{testimonial.quote}</p>
              <p className="font-bold text-green-800">{testimonial.name}</p>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Team */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-green-800 text-center">Our Leadership</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            { name: "Imam Yusuf Ali", role: "Spiritual Leader", image: "/images/leader1.jpg" },
            { name: "Dr. Amina Sow", role: "Education Director", image: "/images/leader2.jpg" },
            { name: "Baba Ousmane", role: "Community Outreach", image: "/images/leader3.jpg" },
            { name: "Hajia Zainab", role: "Women's Affairs", image: "/images/leader4.jpg" }
          ].map((leader, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={leader.image}
                alt={leader.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg text-green-800">{leader.name}</h3>
                <p className="text-gray-600">{leader.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-800 text-white rounded-lg shadow-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
        <p className="text-xl mb-6">
          Whether you're new to the Tijaniyya teachings or looking to deepen your spiritual practice, we welcome you to join our vibrant community.
        </p>
        <Link href="/contact" className="bg-white text-green-800 px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-100 transition duration-300 inline-block">
          Get Involved
        </Link>
      </section>
    </div>
  );
}