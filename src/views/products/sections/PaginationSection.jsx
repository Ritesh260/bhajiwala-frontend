"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function PaginationSection() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 8;

  const pages = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <section className="mt-16">

      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-6">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Product Count */}

          <p className="text-gray-600">

            Showing

            <span className="font-bold text-green-600 mx-2">
              1 - 12
            </span>

            of

            <span className="font-bold text-green-600 mx-2">
              96
            </span>

            Products

          </p>

          {/* Pagination */}

          <div className="flex flex-wrap items-center gap-2 overflow-x-auto">

            <button
              disabled={currentPage === 1}
              onClick={() =>
                setCurrentPage((prev) => Math.max(prev - 1, 1))
              }
              className="w-11 h-11 rounded-xl border border-gray-200 bg-white flex items-center justify-center hover:bg-green-600 hover:text-white transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
            </button>

            {pages.map((page) => (

              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-11 h-11 rounded-xl font-semibold transition ${
                  currentPage === page
                    ? "bg-green-600 text-white"
                    : "bg-white border border-gray-200 hover:bg-green-50"
                }`}
              >
                {page}
              </button>

            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(prev + 1, totalPages)
                )
              }
              className="w-11 h-11 rounded-xl border border-gray-200 bg-white flex items-center justify-center hover:bg-green-600 hover:text-white transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}