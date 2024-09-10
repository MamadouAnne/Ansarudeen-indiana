import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
}

// This would typically come from a database or API
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Spiritual Journey of Cheikh Ahmada Tijani",
    excerpt: "Explore the life and teachings of the founder of the Tijaniyya order...",
    date: "2023-05-15",
    author: "Dr. Aisha Rahman",
    category: "Biography",
    imageUrl: "/images/cheikh-ahmada-tijani.jpg"
  },
  {
    id: 2,
    title: "Understanding Tarbiya: The Path to Spiritual Growth",
    excerpt: "Delve into the concept of Tarbiya and its importance in Islamic spirituality...",
    date: "2023-05-01",
    author: "Imam Yusuf Abdullah",
    category: "Spirituality",
    imageUrl: "/images/tarbiya.jpg"
  },
  // ... (add all other blog posts here)
];

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = decodeURIComponent(params.category);
  const posts = blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());

  if (posts.length === 0) {
    notFound();
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-5xl font-bold mb-12 text-center text-white">
        {category} Articles
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-20">
            <Image src={post.imageUrl} alt={post.title} width={400} height={200} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="uppercase tracking-wide text-sm text-green-300 font-semibold">{post.category}</div>
              <Link href={`/blog/${post.id}`} className="block mt-2 text-xl leading-tight font-bold text-white hover:underline">
                {post.title}
              </Link>
              <p className="mt-2 text-gray-300">{post.excerpt}</p>
              <div className="mt-4">
                <span className="text-gray-400">{post.date} | By {post.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/blog" className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300 shadow-lg">
          Back to All Articles
        </Link>
      </div>
    </div>
  );
}