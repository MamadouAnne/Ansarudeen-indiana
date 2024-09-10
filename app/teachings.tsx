import Link from "next/link";

export default function Teachings() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8">Teachings</h1>
      
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Core Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Islamic Spirituality", content: "Explore the depths of Islamic spirituality through the Tijaniyya approach." },
            { title: "Sufism", content: "Learn about the mystical dimension of Islam and its role in personal transformation." },
            { title: "Tijaniyya Principles", content: "Discover the unique teachings and practices of the Tijaniyya order." }
          ].map((category) => (
            <div key={category.title} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
              <p className="mb-4">{category.content}</p>
              <Link href="#" className="text-green-700 hover:underline">Learn More</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Educational Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Articles', 'Video Lectures', 'Audio Recordings'].map((category) => (
            <div key={category} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4">{category}</h3>
              <ul className="list-disc list-inside">
                <li><Link href="#" className="text-blue-600 hover:underline">Introduction to Tijaniyya</Link></li>
                <li><Link href="#" className="text-blue-600 hover:underline">The Importance of Dhikr</Link></li>
                <li><Link href="#" className="text-blue-600 hover:underline">Understanding Tarbiya</Link></li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4">Quote of the Day</h2>
        <div className="bg-gray-100 p-6 rounded-lg">
          <blockquote className="text-xl italic mb-4">
            "The essence of knowledge is to know God, not to know many things."
          </blockquote>
          <p className="text-right">- Cheikh Ibrahim Niass</p>
        </div>
      </section>
    </div>
  );
}