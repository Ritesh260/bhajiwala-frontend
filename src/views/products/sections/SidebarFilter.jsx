"use client";

import { useState } from "react";
import {
  Filter,
  RotateCcw,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function SidebarFilter() {
  const [categories, setCategories] = useState([
    { name: "Leafy Vegetables", checked: false },
    { name: "Root Vegetables", checked: false },
    { name: "Seasonal Vegetables", checked: false },
    { name: "Organic Vegetables", checked: false },
    { name: "Fruits", checked: false },
  ]);

  const [price, setPrice] = useState(500);

  const [rating, setRating] = useState(4);

  const [stock, setStock] = useState(true);

  const [openCategory, setOpenCategory] = useState(true);
  const [openPrice, setOpenPrice] = useState(true);
  const [openRating, setOpenRating] = useState(true);
  const [openStock, setOpenStock] = useState(true);

  const toggleCategory = (index) => {
    const updated = [...categories];
    updated[index].checked = !updated[index].checked;
    setCategories(updated);
  };

  const resetFilters = () => {
    setCategories(
      categories.map((item) => ({
        ...item,
        checked: false,
      }))
    );

    setPrice(500);
    setRating(4);
    setStock(true);
  };

  return (
    <aside className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6 md:sticky md:top-28">

      {/* Header */}

      <div className="flex items-center justify-between mb-8">

        <div className="flex items-center gap-3">

          <Filter className="text-green-600" />

          <h2 className="text-xl font-bold">
            Filters
          </h2>

        </div>

        <button
          onClick={resetFilters}
          className="text-green-600 hover:text-green-700 transition"
        >
          <RotateCcw size={20} />
        </button>

      </div>

      {/* Categories */}

      <div className="border-b pb-6">

        <button
          onClick={() => setOpenCategory(!openCategory)}
          className="flex justify-between items-center w-full font-semibold"
        >
          Categories

          {openCategory ? (
            <ChevronUp />
          ) : (
            <ChevronDown />
          )}

        </button>

        {openCategory && (

          <div className="space-y-4 mt-5">

            {categories.map((item, index) => (

              <label
                key={index}
                className="flex items-center justify-between cursor-pointer"
              >

                <div className="flex items-center gap-3">

                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => toggleCategory(index)}
                    className="accent-green-600 w-4 h-4"
                  />

                  <span className="text-gray-700">
                    {item.name}
                  </span>

                </div>

              </label>

            ))}

          </div>

        )}

      </div>

      {/* Price */}

      <div className="border-b py-6">

        <button
          onClick={() => setOpenPrice(!openPrice)}
          className="flex justify-between items-center w-full font-semibold"
        >
          Price Range

          {openPrice ? (
            <ChevronUp />
          ) : (
            <ChevronDown />
          )}

        </button>

        {openPrice && (

          <div className="mt-6">

            <input
              type="range"
              min="0"
              max="500"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full accent-green-600"
            />

            <div className="flex justify-between text-sm text-gray-500 mt-3">

              <span>₹0</span>

              <span className="font-semibold text-green-600">
                ₹{price}
              </span>

            </div>

          </div>

        )}

      </div>

      {/* Rating */}

      <div className="border-b py-6">

        <button
          onClick={() => setOpenRating(!openRating)}
          className="flex justify-between items-center w-full font-semibold"
        >
          Rating

          {openRating ? (
            <ChevronUp />
          ) : (
            <ChevronDown />
          )}

        </button>

        {openRating && (

          <div className="space-y-3 mt-5">

            {[5,4,3].map((item)=>(

              <label
                key={item}
                className="flex items-center gap-3 cursor-pointer"
              >

                <input
                  type="radio"
                  checked={rating===item}
                  onChange={()=>setRating(item)}
                />

                ⭐ {item} & Above

              </label>

            ))}

          </div>

        )}

      </div>

      {/* Stock */}

      <div className="py-6">

        <button
          onClick={() => setOpenStock(!openStock)}
          className="flex justify-between items-center w-full font-semibold"
        >
          Availability

          {openStock ? (
            <ChevronUp />
          ) : (
            <ChevronDown />
          )}

        </button>

        {openStock && (

          <label className="flex items-center gap-3 mt-5">

            <input
              type="checkbox"
              checked={stock}
              onChange={() => setStock(!stock)}
              className="accent-green-600"
            />

            In Stock Only

          </label>

        )}

      </div>

      {/* Apply */}

      <button
        className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white rounded-2xl py-4 font-semibold transition-all"
      >
        Apply Filters
      </button>

    </aside>
  );
}