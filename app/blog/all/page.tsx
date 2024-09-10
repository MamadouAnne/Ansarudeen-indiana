import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
}

const blogPosts: BlogPost[] = [
  // ... (copy the blogPosts array from app/blog/page.tsx)
];

export default function AllBlogPosts() {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-5xl font-bold mb-12 text-center text-white">All Blog Posts</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-20">
            <Image src={post.imageUrl} alt={post.title} width={400} height={200} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="uppercase tracking-wide text-sm text-green-300 font-semibold">{post.category}</div>
              <Link href={`/blog/${post.id}`} className="block mt-2 text-xl leading-tight font-bold text-white hover:underline">{post.title}</Link>
              <p className="mt-2 text-gray-300">{post.excerpt}</p>
              <div className="mt-4">
                <span className="text-gray-400">{post.date} | By {post.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <Link href="/blog" className="bg-green-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300 shadow-lg">
          Back to Blog
        </Link>
      </div>
    </div>
  );
}