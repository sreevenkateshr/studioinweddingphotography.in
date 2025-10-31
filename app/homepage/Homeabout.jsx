"use client"; // required because it includes a button (interactive)
import React from "react";
import Link from "next/link"; // ✅ Correct import
import img1 from "../../public/assets/homeabout1.jpg";
import img2 from "../../public/assets/homeabout2.jpg";

export default function AboutSection() {
  return (
    <section className="py-20 px-6 md:px-16 bg-white font-spectral">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Left Image */}
        <div className="md:col-span-1">
          <img
            src={img1.src}
            alt="Bride"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Stacked Images */}
        <div className="md:col-span-1 space-y-4">
          {[img2].map((src, idx) => (
            <img
              key={idx}
              src={src.src}
              alt={`stacked ${idx}`}
              className="rounded-lg shadow-md w-full object-cover"
            />
          ))}
        </div>

        {/* Text Content */}
        <div className="md:col-span-1 text-gray-800">
          <p className="uppercase text-sm tracking-widest text-gray-600 mb-4">
            Why Studio.in?
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-6 text-gray-900">
            Lasting memories through <br /> breathtaking, soulful imagery
          </h2>
          <p className="text-base leading-relaxed mb-6 text-gray-700">
            We combine creativity, professionalism, and technical precision to
            create timeless memories. From candid photography to cinematic
            wedding films, we capture your unique love story with unmatched
            quality. With customized services, on-time delivery, and a
            client-first approach, we ensure your wedding moments are preserved
            beautifully and meaningfully.
          </p>

          {/* ✅ Next.js navigation */}
          <Link href="/aboutus">
            <button className="px-6 py-2 border border-black rounded-full text-sm tracking-wide hover:bg-black hover:text-white transition duration-300">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
