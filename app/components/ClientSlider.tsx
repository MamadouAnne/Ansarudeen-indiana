'use client';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ClientSliderProps {
  children: React.ReactNode;
  settings: {
    [key: string]: any;
  };
}

export default function ClientSlider({ children, settings }: ClientSliderProps) {
  return <Slider {...settings}>{children}</Slider>;
}