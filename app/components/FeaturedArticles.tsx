'use client';

import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const ClientSlider = dynamic(() => import('./ClientSlider'), { ssr: false });

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
}

interface FeaturedArticlesProps {
  blogPosts: BlogPost[];
}

export default function FeaturedArticles({ blogPosts }: FeaturedArticlesProps) {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-green-300">Featured Articles</h2>
      <ClientSlider settings={sliderSettings}>
        {blogPosts.slice(0, 5).map((post) => (
          <div key={post.id} className="px-2">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden shadow-lg">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <Image src={post.imageUrl} alt={post.title} width={500} height={300} className="h-48 w-full object-cover md:h-full md:w-48" />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-green-300 font-semibold">{post.category}</div>
                  <Link href={`/blog/${post.id}`} className="block mt-1 text-2xl leading-tight font-bold text-white hover:underline">{post.title}</Link>
                  <p className="mt-2 text-gray-300">{post.excerpt}</p>
                  <div className="mt-4">
                    <span className="text-gray-400">{post.date} | By {post.author}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </ClientSlider>
    </section>
  );
}