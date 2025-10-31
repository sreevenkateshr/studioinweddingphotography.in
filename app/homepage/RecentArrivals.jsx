"use client";
import React from "react";
import { Heart, ShoppingCart } from "lucide-react";

const products = [
  { id: 456, name: "Graphity Print #456", price: "$78", image: "https://picsum.photos/300/400?random=1" },
  { id: 457, name: "Graphity Print #457", price: "$72", image: "https://picsum.photos/300/400?random=2" },
  { id: 443, name: "Graphity Print #443", price: "$65", image: "https://picsum.photos/300/400?random=3" },
  { id: 459, name: "Graphity Print #459", price: "$82", image: "https://picsum.photos/300/400?random=4" },
];

export default function RecentArrivals() {
  return (
    <section className="w-full py-16 px-6 md:px-12 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Recent Arrivals
        </h2>
        <button className="text-sm bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition-all duration-300">
          Open Store
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg transform group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Info */}
            <div className="flex justify-between items-center mt-4 px-1">
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600">{product.price}</p>
              </div>

              {/* Icons */}
              <div className="flex space-x-2">
                <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition">
                  <Heart size={16} className="text-gray-700" />
                </button>
                <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition">
                  <ShoppingCart size={16} className="text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
