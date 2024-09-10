'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

type MediaItem = {
  type: 'image' | 'video';
  src: string;
  alt?: string;
};

const mediaItems: MediaItem[] = [
  { type: 'image', src: '/images/slide1.jpg', alt: 'Slide 1' },
  { type: 'video', src: '/videos/slide2.mp4' },
  { type: 'image', src: '/images/slide3.jpg', alt: 'Slide 3' },
  // Add more items as needed
];

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const currentItem = mediaItems[currentIndex];

  return (
    <div className="relative w-full h-96">
      {currentItem.type === 'image' ? (
        <Image
          src={currentItem.src}
          alt={currentItem.alt || ''}
          layout="fill"
          objectFit="cover"
        />
      ) : (
        <video
          src={currentItem.src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
}