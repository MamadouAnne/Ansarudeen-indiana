import Link from "next/link";

export default function Teachings() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-5xl font-bold mb-12 text-center text-white">Teachings</h1>
      
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-green-300">Core Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Islamic Spirituality", content: "Explore the depths of Islamic spirituality through the Tijaniyya approach." },
            { title: "Sufism", content: "Learn about the mystical dimension of Islam and its role in personal transformation." },
            { title: "Tijaniyya Principles", content: "Discover the unique teachings and practices of the Tijaniyya order." }
          ].map((category) => (
            <div key={category.title} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-md rounded-lg p-6 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-20 hover:shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-green-200">{category.title}</h3>
              <p className="mb-4 text-white">{category.content}</p>
              <Link href="#" className="text-green-300 hover:text-green-100 transition duration-300">Learn More</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-green-300">Educational Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Articles', 'Video Lectures', 'Audio Recordings'].map((category) => (
            <div key={category} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-md rounded-lg p-6 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-20 hover:shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-green-200">{category}</h3>
              <ul className="list-disc list-inside text-white">
                <li><Link href="#" className="text-green-300 hover:text-green-100 transition duration-300">Introduction to Tijaniyya</Link></li>
                <li><Link href="#" className="text-green-300 hover:text-green-100 transition duration-300">The Importance of Dhikr</Link></li>
                <li><Link href="#" className="text-green-300 hover:text-green-100 transition duration-300">Understanding Tarbiya</Link></li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-green-300">Quote of the Day</h2>
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-20 hover:shadow-lg">
          <blockquote className="text-xl italic mb-4 text-white">
            "The essence of knowledge is to know God, not to know many things."
          </blockquote>
          <p className="text-right text-green-200">- Cheikh Ibrahim Niass</p>
        </div>
      </section>
    </div>
  );
}