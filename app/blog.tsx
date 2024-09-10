import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding the Tijaniyya Order",
    excerpt: "An introduction to the principles and practices of the Tijaniyya Sufi order...",
    date: "2023-05-15",
  },
  {
    id: 2,
    title: "The Life and Teachings of Cheikh Ibrahim Niass",
    excerpt: "Exploring the profound impact of Cheikh Ibrahim Niass on Islamic spirituality...",
    date: "2023-05-01",
  },
  {
    id: 3,
    title: "Dhikr in Daily Life: Remembrance of Allah",
    excerpt: "Practical ways to incorporate dhikr into your daily routine for spiritual growth...",
    date: "2023-04-20",
  },
  // Add more blog posts as needed
];

export default function Blog() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.date}</p>
            <p className="mb-4">{post.excerpt}</p>
            <Link 
              href={`/blog/${post.id}`} 
              className="text-green-700 hover:text-green-800 font-semibold"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link 
          href="/blog/archive" 
          className="bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition duration-300"
        >
          View All Posts
        </Link>
      </div>
    </div>
  );
}