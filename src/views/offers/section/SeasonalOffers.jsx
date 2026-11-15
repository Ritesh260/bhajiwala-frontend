
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  CalendarDays,
  Leaf,
  ArrowRight,
} from "lucide-react";

import { getSeasonalOffers } from "@/api/seasonal_apis";

export default function SeasonalOffers() {
  const [seasonalOffers, setSeasonalOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // =====================================
  // GET SEASONAL OFFERS API
  // =====================================

  const fetchSeasonalOffers = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getSeasonalOffers();

      if (response.success) {
        const activeOffers = (response.offers || []).filter(
          (offer) => offer.status === "Active"
        );

        setSeasonalOffers(activeOffers);
      } else {
        setError(
          response.message || "Unable to fetch seasonal offers"
        );
      }
    } catch (err) {
      console.error("Seasonal Offers API Error:", err);

      setError(
        err.response?.data?.message ||
          "Something went wrong while loading seasonal offers."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSeasonalOffers();
  }, []);

  // =====================================
  // DATE FORMAT
  // =====================================

  const formatDate = (date) => {
    if (!date) return "";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // =====================================
  // RENDER
  // =====================================

  return (
    <section className="bg-[#F8FAF5] py-24">
      <div className="mx-auto max-w-7xl px-5">

        {/* HEADING */}

        <div className="mb-14 text-center">

          <span className="inline-flex items-center gap-2 font-semibold uppercase tracking-[3px] text-green-600">
            <CalendarDays size={18} />
            Seasonal Deals
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 lg:text-5xl">
            Fresh According To Season
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
            Enjoy the best seasonal vegetables and fruits at special prices
            available for a limited time.
          </p>

        </div>

        {/* LOADING */}

        {loading && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="animate-pulse overflow-hidden rounded-[35px] border border-gray-200 bg-white"
              >
                <div className="h-64 bg-gray-200" />

                <div className="space-y-4 p-7">
                  <div className="h-4 w-1/3 rounded bg-gray-200" />
                  <div className="h-7 w-3/4 rounded bg-gray-200" />
                  <div className="h-16 rounded bg-gray-200" />
                  <div className="h-5 w-1/4 rounded bg-gray-200" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ERROR */}

        {!loading && error && (
          <div className="rounded-2xl bg-red-50 p-8 text-center">
            <p className="text-red-600">{error}</p>

            <button
              onClick={fetchSeasonalOffers}
              className="mt-4 rounded-lg bg-green-600 px-5 py-2 font-semibold text-white hover:bg-green-700"
            >
              Try Again
            </button>
          </div>
        )}

        {/* EMPTY STATE */}

        {!loading && !error && seasonalOffers.length === 0 && (
          <div className="rounded-2xl bg-white p-12 text-center">
            <CalendarDays
              size={42}
              className="mx-auto text-gray-400"
            />

            <h3 className="mt-4 text-xl font-bold text-gray-800">
              No Seasonal Offers Available
            </h3>

            <p className="mt-2 text-gray-500">
              New seasonal deals will be available soon.
            </p>
          </div>
        )}

        {/* SEASONAL OFFER CARDS */}

        {!loading && !error && seasonalOffers.length > 0 && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {seasonalOffers.map((item) => (

              <div
                key={item._id}
                className="group overflow-hidden rounded-[35px] border border-gray-200 bg-white transition duration-300 hover:shadow-2xl"
              >

                {/* IMAGE */}

                <div className="relative flex h-64 items-center justify-center bg-green-100">

                  {item.badge && (
                    <span className="absolute left-5 top-5 z-10 rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white">
                      {item.badge}
                    </span>
                  )}

                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <Leaf size={70} className="text-green-600" />
                  )}

                </div>

                {/* CONTENT */}

                <div className="p-7">

                  {/* SEASON LABEL */}

                  <div className="flex items-center gap-2 font-semibold text-green-600">
                    <Leaf size={18} />
                    Seasonal Special
                  </div>

                  {/* TITLE */}

                  <h3 className="mt-4 text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p className="mt-3 leading-7 text-gray-600">
                    {item.description || "Explore our latest seasonal deals."}
                  </p>

                  {/* DATES */}

                  {(item.startDate || item.endDate) && (
                    <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
                      <CalendarDays size={16} className="text-green-600" />

                      {item.startDate && formatDate(item.startDate)}

                      {item.startDate && item.endDate && " - "}

                      {item.endDate && formatDate(item.endDate)}
                    </div>
                  )}

                  {/* SHOP NOW */}

                  <Link
                    href="/products"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-green-600 transition hover:gap-3 hover:text-green-700"
                  >
                    Shop Now
                    <ArrowRight size={18} />
                  </Link>

                </div>

              </div>

            ))}

          </div>
        )}

      </div>
    </section>
  );
}
