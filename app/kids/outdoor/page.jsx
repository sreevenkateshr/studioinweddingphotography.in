"use client"; // 👈 Important for interactivity

import React from "react";


export default function Outdoor() {
  return (
    <section className="bg-gray-50 min-h-screen flex flex-col">
   

      {/* Hero Section */}
      <div className="relative h-[70vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1603201667230-bd3d3edba0c1?auto=format&fit=crop&w=1600&q=80"
          alt="Kids Outdoor"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Kids Outdoor Photography
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
            Capture outdoor adventures, playground fun, and candid moments in
            natural light.
          </p>
        </div>
      </div>

    </section>
  );
}
