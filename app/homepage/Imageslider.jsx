"use client"; // ✅ Required for Swiper (runs only in browser)

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function ImageSlider() {
  const images = [
    "https://picsum.photos/id/1015/600/600",
    "https://picsum.photos/id/1016/600/600",
    "https://picsum.photos/id/1018/600/600",
    "https://picsum.photos/id/1020/600/600",
    "https://picsum.photos/id/1024/600/600",
    "https://picsum.photos/id/1025/600/600",
  ];

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="text-xl font-semibold hover:text-pink-600 transition duration-300"
        >
          Follow us on Instagram
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 hover:text-pink-600 transition duration-300"
        >
          @Studioinphotography
        </a>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={2}
        navigation
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative group">
              <img
                src={src}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay effect on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500 rounded-lg"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
