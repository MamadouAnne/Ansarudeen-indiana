import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  content: string;
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
    content: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
    date: "2023-05-15",
    author: "Dr. Aisha Rahman",
    category: "Biography",
    imageUrl: "/images/cheikh-ahmada-tijani.jpg"
  },
  // ... add more blog posts here
];

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find(post => post.id === parseInt(params.id));

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto py-16 px-4">
      <Link href="/blog" className="text-green-300 hover:text-green-100 transition duration-300 mb-8 inline-block">
        &larr; Back to Blog
      </Link>
      <article className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-white">{post.title}</h1>
        <div className="mb-4 text-green-300">
          <span>{post.date}</span> | <span>{post.author}</span> | <span>{post.category}</span>
        </div>
        <Image 
          src={post.imageUrl} 
          alt={post.title} 
          width={800} 
          height={400} 
          className="w-full h-64 object-cover rounded-lg mb-8" 
        />
        <div 
          className="text-white text-lg leading-relaxed prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </article>
    </div>
  );
}