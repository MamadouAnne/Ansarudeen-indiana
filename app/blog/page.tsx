'use client';

import Image from 'next/image';
import Link from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Extended mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: 'Breaking: Major Tijaniyya Conference Announced',
    excerpt: 'Global leaders of the Tijaniyya order to convene in Senegal next month...',
    author: 'Imam Abdullah',
    date: 'June 15, 2023',
    imageUrl: '/images/conference.jpg',
    category: 'Events',
  },
  {
    id: 2,
    title: 'The Spiritual Science of Dhikr',
    excerpt: 'New study reveals the neurological benefits of regular Dhikr practice...',
    author: 'Dr. Aisha Rahman',
    date: 'June 10, 2023',
    imageUrl: '/images/dhikr.jpg',
    category: 'Research',
  },
  {
    id: 3,
    title: 'Profile: Rising Star in Islamic Scholarship',
    excerpt: 'Meet the young Tijaniyya scholar making waves in contemporary Islamic thought...',
    author: 'Yusuf Ali',
    date: 'June 5, 2023',
    imageUrl: '/images/scholar.jpg',
    category: 'People',
  },
  {
    id: 4,
    title: 'Tijaniyya Teachings: A Modern Perspective',
    excerpt: 'How ancient wisdom is finding new relevance in the digital age...',
    author: 'Shaykh Ibrahim',
    date: 'May 30, 2023',
    imageUrl: '/images/modern-tijani.jpg',
    category: 'Opinion',
  },
  {
    id: 5,
    title: 'Exclusive: Interview with Tijaniyya Grand Imam',
    excerpt: 'Rare insights into the future direction of the Tijaniyya order...',
    author: 'Fatima Hassan',
    date: 'May 25, 2023',
    imageUrl: '/images/grand-imam.jpg',
    category: 'Interview',
  },
  {
    id: 6,
    title: 'Tijaniyya Youth Movement Gains Momentum',
    excerpt: 'How young followers are revitalizing the Tijaniyya tradition...',
    author: 'Ahmed Seck',
    date: 'May 20, 2023',
    imageUrl: '/images/youth-movement.jpg',
    category: 'Trends',
  },
  {
    id: 7,
    title: 'The Role of Women in Tijaniyya Spirituality',
    excerpt: 'Exploring the significant contributions of women in shaping the Tijaniyya path...',
    author: 'Maryam Diop',
    date: 'May 15, 2023',
    imageUrl: '/images/women-tijaniyya.jpg',
    category: 'Feature',
  },
  {
    id: 8,
    title: 'Tijaniyya and Social Justice: A Call to Action',
    excerpt: 'How Tijaniyya principles are inspiring community service and social reform...',
    author: 'Omar Faye',
    date: 'May 10, 2023',
    imageUrl: '/images/social-justice.jpg',
    category: 'Community',
  },
  {
    id: 9,
    title: 'The Art of Tijaniyya Calligraphy',
    excerpt: 'Discover the beauty and spiritual significance of Tijaniyya-inspired Islamic art...',
    author: 'Aisha Bah',
    date: 'May 5, 2023',
    imageUrl: '/images/calligraphy.jpg',
    category: 'Culture',
  },
  {
    id: 10,
    title: 'Tijaniyya in the Digital Age: Online Communities',
    excerpt: 'How virtual spaces are connecting Tijaniyya followers across the globe...',
    author: 'Malik Sy',
    date: 'April 30, 2023',
    imageUrl: '/images/digital-tijaniyya.jpg',
    category: 'Technology',
  },
  {
    id: 11,
    title: 'The Ecological Teachings of Tijaniyya',
    excerpt: 'Exploring the environmental wisdom embedded in Tijaniyya philosophy...',
    author: 'Aminata Tall',
    date: 'April 25, 2023',
    imageUrl: '/images/eco-tijaniyya.jpg',
    category: 'Environment',
  },
  {
    id: 12,
    title: 'Tijaniyya and Interfaith Dialogue',
    excerpt: 'How Tijaniyya leaders are fostering understanding across religious boundaries...',
    author: 'Ibrahim Ndiaye',
    date: 'April 20, 2023',
    imageUrl: '/images/interfaith.jpg',
    category: 'Dialogue',
  },
];

const featuredPosts = blogPosts.slice(0, 5); // Use the first 5 posts as featured

export default function Blog() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-blue-500 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-12 text-center">Ansarudeen Indiana News</h1>
        
        {/* Featured Posts Slider */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Featured Posts</h2>
          <Slider {...sliderSettings}>
            {featuredPosts.map((post) => (
              <div key={post.id} className="px-2">
                <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg overflow-hidden shadow-lg">
                  <div className="relative">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      width={1200}
                      height={600}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-0 left-0 bg-green-500 text-white px-2 py-1 text-sm font-bold">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-200 mb-4">{post.excerpt}</p>
                    <Link href={`/blog/${post.id}`} className="inline-block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Regular Blog Posts Grid */}
        <h2 className="text-3xl font-bold mb-6 text-center">All Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <div className="relative">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  width={800}
                  height={500}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 left-0 bg-green-500 text-white px-2 py-1 text-sm font-bold">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col h-full">
                <h2 className="font-bold mb-2 text-xl">{post.title}</h2>
                <p className="text-sm text-gray-200 mb-4">
                  By {post.author} | {post.date}
                </p>
                <p className="text-gray-100 mb-4 flex-grow">{post.excerpt}</p>
                <div className="text-right">
                  <Link href={`/blog/${post.id}`} className="inline-block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}