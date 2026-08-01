"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Star } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      {/* Image */}

      <div className="relative h-64 bg-[#F8FAF5] flex items-center justify-center overflow-hidden">

        <span className="absolute top-4 left-4 bg-green-600 text-white text-xs px-3 py-1 rounded-full z-10">
          Fresh
        </span>

        <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-red-500 hover:text-white transition z-10">
          <Heart size={18} />
        </button>

        <Image
          src={product.image}
          alt={product.name}
          width={220}
          height={220}
          className="object-contain group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Content */}

      <div className="p-6">

        <p className="text-sm text-green-600 font-semibold">
          {product.category}
        </p>

        <Link
          href={`/products/${product.slug}`}
          className="block mt-2 text-xl font-bold text-gray-900 hover:text-green-600 transition"
        >
          {product.name}
        </Link>

        <div className="flex items-center gap-1 mt-3 text-yellow-500">

          <Star fill="currentColor" size={16} />
          <Star fill="currentColor" size={16} />
          <Star fill="currentColor" size={16} />
          <Star fill="currentColor" size={16} />
          <Star fill="currentColor" size={16} />

          <span className="ml-2 text-gray-500 text-sm">
            (5.0)
          </span>

        </div>

        <div className="flex items-end justify-between mt-6">

          <div>

            <h3 className="text-3xl font-bold text-gray-900">
              ₹{product.price}
            </h3>

            <p className="text-gray-500">
              / {product.unit}
            </p>

          </div>

          <button className="bg-green-600 hover:bg-green-700 text-white w-14 h-14 rounded-2xl flex items-center justify-center transition">
            <ShoppingCart size={22} />
          </button>

        </div>

      </div>

    </div>
  );
}