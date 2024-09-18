'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const [images] = useState([
    { src: '/images/event1.jpg', alt: 'Community gathering', caption: 'Annual community gathering' },
    { src: '/images/event2.jpg', alt: 'Charity drive', caption: 'Recent charity drive' },
    { src: '/images/event3.jpg', alt: 'Youth program', caption: 'Youth educational program' },
    { src: '/images/event4.jpg', alt: 'Workshop', caption: 'Islamic calligraphy workshop' },
    { src: '/images/event5.jpg', alt: 'Eid celebration', caption: 'Eid al-Fitr celebration' },
    { src: '/images/event6.jpg', alt: 'Quran study', caption: 'Weekly Quran study circle' },
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-white text-center">Gallery</h1>
      <p className="text-white text-lg mb-8 text-center">
        Explore images from our events and activities. These moments capture the spirit of our community.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden shadow-xl">
            <Image 
              src={image.src} 
              alt={image.alt} 
              width={400} 
              height={300} 
              className="w-full h-48 object-cover"
            />
            <p className="p-4 text-white text-center">{image.caption}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-white text-lg">
          Want to contribute to our gallery? Send your photos to gallery@ansarudeen-indiana.org
        </p>
      </div>
    </div>
  );
}