"use client";

import { Search, SlidersHorizontal, Grid2X2, LayoutList } from "lucide-react";
import { useState } from "react";

export default function ProductsToolbar() {
  const [view, setView] = useState("grid");

  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        {/* Search */}

        <div className="relative w-full lg:max-w-md min-w-0">

          <Search
            size={20}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search fresh vegetables..."
            className="w-full h-14 rounded-2xl border border-gray-200 bg-[#F8FAF5] pl-14 pr-5 outline-none focus:border-green-600 focus:ring-4 focus:ring-green-100 transition-all"
          />

        </div>

        {/* Right Side */}

        <div className="flex flex-wrap items-center gap-4 w-full justify-between">

          {/* Product Count */}

          <div className="text-gray-600 font-medium">
            Showing
            <span className="font-bold text-green-600 mx-2">
              24
            </span>
            Products
          </div>

          {/* Sort */}

          <div className="relative w-full sm:w-auto">

            <SlidersHorizontal
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <select
              className="w-full sm:w-auto h-12 rounded-2xl border border-gray-200 bg-white pl-11 pr-10 outline-none focus:border-green-600 cursor-pointer"
            >
              <option>Newest</option>
              <option>Price : Low to High</option>
              <option>Price : High to Low</option>
              <option>Best Selling</option>
              <option>Top Rated</option>
            </select>

          </div>

          {/* View Toggle */}

          <div className="flex items-center rounded-2xl border border-gray-200 overflow-hidden">

            <button
              onClick={() => setView("grid")}
              className={`w-12 h-12 flex items-center justify-center transition ${
                view === "grid"
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-500 hover:bg-green-50"
              }`}
            >
              <Grid2X2 size={20} />
            </button>

            <button
              onClick={() => setView("list")}
              className={`w-12 h-12 flex items-center justify-center transition ${
                view === "list"
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-500 hover:bg-green-50"
              }`}
            >
              <LayoutList size={20} />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}