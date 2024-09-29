import Image from 'next/image';

export default function Gallery() {
  const images = [
    { src: '/images/event1.jpg', alt: 'Community gathering' },
    { src: '/images/event2.jpg', alt: 'Charity drive' },
    { src: '/images/event3.jpg', alt: 'Youth program' },
    { src: '/images/event4.jpg', alt: 'Islamic calligraphy workshop' },
    // Add more images as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-6">Our Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div key={index} className="bg-white bg-opacity-90 rounded-lg overflow-hidden shadow-lg">
            <Image 
              src={img.src} 
              alt={img.alt} 
              width={400} 
              height={300} 
              className="w-full h-48 object-cover"
            />
            <p className="p-4 text-center">{img.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}