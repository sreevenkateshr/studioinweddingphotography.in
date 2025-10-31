"use client"; // 👈 Add this if you're using Next.js App Router

import React from "react";


export default function Christian() {
  return (
    <section className="bg-gray-50 min-h-screen font-sans">
      {/* ===== Hero Section ===== */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80"
          alt="Christian Wedding"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col justify-center items-center text-center px-6 h-full">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
            Christian Wedding Photography
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed">
            Elegant, timeless, and heartfelt — capturing the sacred vows and
            celebrations of Christian weddings with grace and detail.
          </p>
        </div>
      </div>

      {/* ===== About Section ===== */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          Capturing Sacred Moments
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
          Christian weddings are filled with solemn vows, heartfelt prayers, and
          joyful celebrations. Our approach is to preserve these moments
          naturally — from the sacred exchange of rings at the altar to the
          joyous smiles at the reception. Every image reflects the purity and
          essence of this special day.
        </p>

        {/* ===== Highlight Cards ===== */}
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              title: "Church Ceremonies",
              desc: "From aisle walks to heartfelt vows, we capture the holiness of the wedding service in its full glory.",
            },
            {
              title: "Family Blessings",
              desc: "Preserving emotional blessings, prayers, and cultural rituals with authentic storytelling.",
            },
            {
              title: "Reception Joy",
              desc: "Documenting laughter, speeches, and first dances that make the evening unforgettable.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

 
    </section>
  );
}
