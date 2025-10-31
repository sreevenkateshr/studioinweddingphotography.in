"use client";
import React from "react";
import "@fontsource/titillium-web"; // npm install @fontsource/titillium-web

export default function Timeline() {
  const steps = [
    {
      author: "Paperboat Photography",
      date: "Step 1",
      status: "Pre-Planning",
      complete: true,
    },
    {
      author: "Paperboat Photography",
      date: "Step 2",
      status: "Shoot Day",
      complete: true,
    },
    {
      author: "Paperboat Photography",
      date: "Step 3",
      status: "Editing & Retouching",
      complete: true,
    },
    {
      author: "Paperboat Photography",
      date: "Step 4",
      status: "Final Delivery",
      complete: false,
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white font-['Titillium_Web'] text-gray-600 px-6 py-16">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 text-center">
        Our Process
      </h2>
      <p className="text-center text-gray-500 max-w-2xl mb-12">
        At Paperboat Photography, we follow a clear process to ensure your
        memories are captured beautifully—from planning and shooting to editing
        and final delivery.
      </p>

      {/* Timeline */}
      <div className="relative w-full flex flex-col md:flex-row items-center justify-center md:space-x-16">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center relative group">
            {/* Connector line (desktop only) */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-3 left-1/2 w-full h-0.5 bg-gray-300 translate-x-1/2 -z-10" />
            )}

            {/* Circle */}
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                step.complete
                  ? "bg-black border-black"
                  : "bg-white border-gray-400"
              } transition-all duration-300 group-hover:scale-110`}
            ></div>

            {/* Step Details */}
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-black">
                {step.status}
              </h4>
              <p className="text-sm text-gray-500 mt-1">{step.date}</p>
              <p className="text-xs text-gray-400">{step.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
