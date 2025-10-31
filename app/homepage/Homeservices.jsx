"use client";
import React from "react";

export default function Categoryshowcase() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-20">
      <h2
        className="text-center text-4xl md:text-4xl mb-16"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Our Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* ENGAGEMENT */}
        <div className="flex flex-col items-center group">
          <img
            src="/assets/wedding1.jpg"
            alt="Engagement"
            className="w-full h-[500px] object-cover transform group-hover:scale-105 transition duration-500"
          />
          <button className="mt-6 px-8 py-2 border border-black rounded-full text-xs tracking-widest hover:bg-black hover:text-white transition">
            ENGAGEMENT
          </button>
        </div>

        {/* WEDDING */}
        <div className="flex flex-col items-center group">
          <img
            src="/assets/wedding2.jpg"
            alt="Wedding"
            className="w-full h-[500px] object-cover transform group-hover:scale-105 transition duration-500"
          />
          <button className="mt-6 px-8 py-2 border border-black rounded-full text-xs tracking-widest hover:bg-black hover:text-white transition">
            WEDDING
          </button>
        </div>

        {/* MATERNITY */}
        <div className="flex flex-col items-center group">
          <img
            src="/assets/wedding3.jpg"
            alt="Maternity"
            className="w-full h-[500px] object-cover transform group-hover:scale-105 transition duration-500"
          />
          <button className="mt-6 px-8 py-2 border border-black rounded-full text-xs tracking-widest hover:bg-black hover:text-white transition">
            MATERNITY
          </button>
        </div>

        {/* BIRTHDAY */}
        <div className="flex flex-col items-center group">
          <img
            src="/assets/wedding4.jpg"
            alt="Birthday"
            className="w-full h-[500px] object-cover transform group-hover:scale-105 transition duration-500"
          />
          <button className="mt-6 px-8 py-2 border border-black rounded-full text-xs tracking-widest hover:bg-black hover:text-white transition">
            BIRTHDAY
          </button>
        </div>
      </div>
    </div>
  );
}
