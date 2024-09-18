'use client';

import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-white text-center">About Ansarudeen Indiana</h1>
      <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-xl">
        <p className="text-white text-lg mb-6">
          Ansarudeen Indiana is a vibrant community dedicated to spreading the timeless wisdom of Cheikh Ahmada Tijani and Cheikh Ibrahim Niass. Our mission is to foster spiritual growth and build a community rooted in Islamic teachings and Tijaniyya principles.
        </p>
        <p className="text-white text-lg mb-6">
          Founded in [year], our organization has been a beacon of light for Muslims in Indiana, providing a space for worship, learning, and community engagement. We strive to embody the teachings of our spiritual leaders and to share their wisdom with all who seek it.
        </p>
        <h2 className="text-2xl font-bold mb-4 text-white">Our Core Values</h2>
        <ul className="list-disc list-inside text-white text-lg mb-6">
          <li>Spiritual Growth</li>
          <li>Community Service</li>
          <li>Education and Knowledge</li>
          <li>Inclusivity and Respect</li>
          <li>Peace and Unity</li>
        </ul>
        <div className="mt-8 text-center">
          <Image 
            src="/images/community.jpg" 
            alt="Ansarudeen Indiana Community" 
            width={600} 
            height={400} 
            className="rounded-lg mx-auto"
          />
          <p className="text-white mt-2 italic">Our community gathering at a recent event</p>
        </div>
      </div>
    </div>
  );
}