'use client';

import Link from "next/link";

export default function Teachings() {
  const teachings = [
    { title: "The Path of Tijaniyya", content: "Explore the foundational principles of the Tijaniyya Sufi order." },
    { title: "Wisdom of Cheikh Ahmada Tijani", content: "Delve into the teachings and spiritual insights of our order's founder." },
    { title: "Lessons from Cheikh Ibrahim Niass", content: "Discover the profound wisdom of Cheikh Ibrahim Niass and its relevance today." },
    { title: "Islamic Spirituality", content: "Learn about the spiritual dimensions of Islam and how to cultivate inner peace." },
    { title: "Community and Brotherhood", content: "Understand the importance of community in our spiritual journey." },
    { title: "Daily Practices", content: "Guidance on daily spiritual practices to enhance your connection with Allah." },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-white text-center">Our Teachings</h1>
      <p className="text-white text-lg mb-8 text-center">
        Explore the wisdom and teachings of Cheikh Ahmada Tijani and Cheikh Ibrahim Niass, guiding us on the path of spiritual enlightenment.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachings.map((teaching, index) => (
          <div key={index} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-xl shadow-xl">
            <h3 className="text-xl font-bold mb-2 text-white">{teaching.title}</h3>
            <p className="text-white mb-4">{teaching.content}</p>
            <Link href={`/teachings/${teaching.title.toLowerCase().replace(/ /g, '-')}`} className="text-green-300 hover:text-green-100 transition duration-300">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}