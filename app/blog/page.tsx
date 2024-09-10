import Image from 'next/image';
import Link from 'next/link';
import FeaturedArticles from '../components/FeaturedArticles';
import ClientSlider from '../components/ClientSlider';

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
  {
    id: 3,
    title: "The Global Impact of Cheikh Ibrahim Niass",
    excerpt: "Discover how Cheikh Ibrahim Niass spread the Tijaniyya teachings worldwide...",
    date: "2023-04-20",
    author: "Prof. Mariam Diallo",
    category: "History",
    imageUrl: "/images/cheikh-ibrahim-niass.jpg"
  },
  {
    id: 4,
    title: "Dhikr in Daily Life: Remembrance of Allah",
    excerpt: "Learn practical ways to incorporate dhikr into your daily routine...",
    date: "2023-04-10",
    author: "Shaykh Abdul Karim",
    category: "Practice",
    imageUrl: "/images/dhikr.jpg"
  },
  {
    id: 5,
    title: "The Wisdom of Jawahir al-Ma'ani",
    excerpt: "An in-depth analysis of key teachings from this seminal Tijaniyya text...",
    date: "2023-03-28",
    author: "Dr. Fatima Zahra",
    category: "Literature",
    imageUrl: "/images/jawahir-al-maani.jpg"
  },
  {
    id: 6,
    title: "The Role of Sufism in Modern Society",
    excerpt: "Exploring how Sufi teachings can address contemporary challenges...",
    date: "2023-03-15",
    author: "Dr. Hassan Ali",
    category: "Spirituality",
    imageUrl: "/images/sufism-modern-society.jpg"
  },
  {
    id: 7,
    title: "Women Scholars in the Tijaniyya Tradition",
    excerpt: "Highlighting the contributions of female scholars to Tijaniyya teachings...",
    date: "2023-03-01",
    author: "Prof. Amina Sow",
    category: "History",
    imageUrl: "/images/women-scholars.jpg"
  },
  {
    id: 8,
    title: "The Concept of Fayda in Tijaniyya",
    excerpt: "Understanding the spiritual flood and its significance in Tijaniyya...",
    date: "2023-02-15",
    author: "Shaykh Ibrahim Faye",
    category: "Spirituality",
    imageUrl: "/images/fayda-concept.jpg"
  },
];

export default function Blog() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-5xl font-bold mb-12 text-center text-white">Ansarudeen Indiana Blog</h1>
      
      {/* Featured Articles Slider */}
      <FeaturedArticles blogPosts={blogPosts} />

      {/* Recent Articles Slider */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-green-300">Recent Articles</h2>
        <ClientSlider settings={sliderSettings}>
          {blogPosts.map((post) => (
            <div key={post.id} className="px-2">
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-20 h-full">
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
            </div>
          ))}
        </ClientSlider>
      </section>

      {/* Categories section removed */}
    </div>
  );
}