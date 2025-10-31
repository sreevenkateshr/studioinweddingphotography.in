"use client";

import React from "react";

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-6 py-16">
      <div className="max-w-3xl w-full text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg text-gray-600 mb-10">
          Have questions or want to work with us?  
          Fill out the form below — we’ll respond within 24 hours.
        </p>

        {/* Contact Form */}
        <form className="space-y-6 text-left">
          <div>
            <label className="block text-sm font-semibold mb-2">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-black transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-black transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea
              rows={4}
              placeholder="Tell us how we can help..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-black transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>

        {/* Optional Contact Info */}
        <div className="mt-12 space-y-2 text-gray-600">
          <p>📍 Chennai, Tamil Nadu, India</p>
          <p>📧 hello@yourdomain.com</p>
          <p>📞 +91 98765 43210</p>
        </div>
      </div>
    </section>
  );
}
