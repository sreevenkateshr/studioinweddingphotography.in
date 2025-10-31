"use client";

import React from "react";
import Link from "next/link"; // ✅ use next/link, not react-router-dom
import Image from "next/image"; // ✅ recommended for Next.js

import wedding1 from "@/public/assets/wedding1.jpg";
import wedding2 from "@/public/assets/wedding2.jpg";
import wedding3 from "@/public/assets/wedding3.jpg";
import wedding4 from "@/public/assets/wedding4.jpg";
import wedding5 from "@/public/assets/wedding5.jpg";
import tee10 from "@/public/assets/tee10.jpg";

export default function Portfolio() {
  const portfolioItems = [
    { title: "Portraits", img: wedding1, link: "/portfolio/portraits" },
    { title: "Pre Weddings", img: wedding2, link: "/portfolio/preweddings" },
    { title: "Tamil Weddings", img: wedding3, link: "/portfolio/tamil" },
    { title: "Telugu Weddings", img: wedding4, link: "/portfolio/telugu" },
    { title: "Christian Weddings", img: wedding5, link: "/portfolio/christian" },
    { title: "Hindu Weddings", img: tee10, link: "/portfolio/hinduwedding" },
  ];

  return (
    <>
      {/* Banner Section */}
      <section className="relative h-[70vh] w-full">
        <Image
          src="https://i0.wp.com/paperboatweddingphotography.com/wp-content/uploads/2024/07/DSC00663.jpg?fit=1920%2C1280&ssl=1"
          alt="Portfolio Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 uppercase">
            Portfolio
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
            Explore our best works – where every frame tells a timeless story.
          </p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Our Portfolio
          </h2>
          <p className="uppercase tracking-widest text-gray-500 text-sm md:text-base mb-6">
            Where Every Frame Tells a Story
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Discover the artistry of Zero Vision Photography through our curated portfolio.
            From Tamil, Telugu, Christian, Muslim, and Indian weddings to pre-wedding shoots
            and cinematic wedding films, our work reflects creativity and attention to detail.
          </p>
        </div>

        {/* Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-xl shadow-lg flex flex-col"
            >
              <div className="relative h-72 sm:h-80 lg:h-96 overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  fill
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition duration-300"></div>
                <h3 className="absolute inset-0 flex items-center justify-center text-white text-xl sm:text-2xl font-semibold">
                  {item.title}
                </h3>
              </div>

              <div className="p-4 text-center">
                <Link
                  href={item.link}
                  className="inline-block px-8 py-2 border border-black rounded-full text-black text-sm font-medium tracking-widest transition-colors duration-300 hover:bg-black hover:text-white"
                >
                  VIEW MORE
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-20 text-center">
          <div className="flex flex-col items-center">
            <Link
              href="/about"
              className="inline-block px-10 py-3 border border-black rounded-full text-black text-base font-medium tracking-widest transition-colors duration-300 hover:bg-black hover:text-white"
            >
              ABOUT US
            </Link>
            <p className="mt-3 italic text-gray-700 text-base">Get to know us</p>
          </div>

          <div className="flex flex-col items-center">
            <Link
              href="/films"
              className="inline-block px-10 py-3 border border-black rounded-full text-black text-base font-medium tracking-widest transition-colors duration-300 hover:bg-black hover:text-white"
            >
              WEDDING FILMS
            </Link>
            <p className="mt-3 italic text-gray-700 text-base">Explore our Work</p>
          </div>

          <div className="flex flex-col items-center">
            <Link
              href="/contact"
              className="inline-block px-10 py-3 border border-black rounded-full text-black text-base font-medium tracking-widest transition-colors duration-300 hover:bg-black hover:text-white"
            >
              CONTACT US
            </Link>
            <p className="mt-3 italic text-gray-700 text-base">Get in Touch</p>
          </div>
        </div>
      </section>

      
    </>
  );
}
