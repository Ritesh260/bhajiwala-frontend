
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  Clock3,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";

import { getTodayOffers } from "@/api/today_offer_apis";

export default function TodayOffers() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());

  // =====================================
  // GET TODAY OFFERS API
  // =====================================

  const fetchTodayOffers = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getTodayOffers();

      if (response.success) {
        const activeOffers = (response.data || []).filter(
          (item) =>
            item.status === "Active" &&
            item.productId?.status === "Active"
        );

        setOffers(activeOffers);
      } else {
        setError(response.message || "Unable to fetch today's offers");
      }
    } catch (err) {
      console.error("Today Offers API Error:", err);

      setError(
        err.response?.data?.message ||
          "Something went wrong while loading offers."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodayOffers();
  }, []);

  // =====================================
  // UPDATE COUNTDOWN
  // =====================================

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  // =====================================
  // GET REMAINING TIME
  // =====================================

  const getRemainingTime = (item) => {
    if (!item.endDate || !item.endTime) {
      return "Limited Time Offer";
    }

    const datePart = item.endDate.slice(0, 10);
    const endDateTime = new Date(
      `${datePart}T${item.endTime}:00`
    );

    const difference = endDateTime.getTime() - currentTime.getTime();

    if (Number.isNaN(endDateTime.getTime())) {
      return "Limited Time Offer";
    }

    if (difference <= 0) {
      return "Offer Ended";
    }

    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor(
      (difference % (1000 * 60 * 60)) / (1000 * 60)
    );

    if (hours > 0) {
      return `${hours} Hours ${minutes} Minutes Left`;
    }

    return `${minutes} Minutes Left`;
  };

  // =====================================
  // RENDER
  // =====================================

  return (
    <section id="offers" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5">

        {/* HEADER */}

        <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-semibold uppercase tracking-[3px] text-orange-500">
              Flash Deals
            </span>

            <h2 className="mt-3 text-4xl font-bold text-gray-900 lg:text-5xl">
              Today's Best Offers
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-gray-600">
              Grab fresh vegetables at amazing prices.
              These deals are available for limited time only.
            </p>
          </div>

          <Link
            href="/products"
            className="flex items-center gap-2 font-semibold text-green-600"
          >
            View All
            <ArrowRight size={20} />
          </Link>
        </div>

        {/* LOADING */}

        {loading && (
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="animate-pulse overflow-hidden rounded-[30px] border border-gray-200"
              >
                <div className="h-56 bg-gray-100" />
                <div className="space-y-4 p-6">
                  <div className="h-5 w-3/4 rounded bg-gray-100" />
                  <div className="h-6 w-1/2 rounded bg-gray-100" />
                  <div className="h-10 rounded bg-gray-100" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ERROR */}

        {!loading && error && (
          <div className="rounded-2xl bg-red-50 p-8 text-center">
            <p className="font-medium text-red-600">{error}</p>

            <button
              onClick={fetchTodayOffers}
              className="mt-4 rounded-lg bg-green-600 px-5 py-2 text-white hover:bg-green-700"
            >
              Try Again
            </button>
          </div>
        )}

        {/* EMPTY STATE */}

        {!loading && !error && offers.length === 0 && (
          <div className="rounded-2xl bg-green-50 px-5 py-14 text-center">
            <h3 className="text-xl font-bold text-gray-800">
              No Offers Available
            </h3>

            <p className="mt-2 text-gray-600">
              New exciting offers will be available soon.
            </p>
          </div>
        )}

        {/* OFFER CARDS */}

        {!loading && !error && offers.length > 0 && (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {offers.map((item) => {
              const product = item.productId;

              const productImage = product?.images?.[0];

              const remainingTime = getRemainingTime(item);

              return (
                <div
                  key={item._id}
                  className="group overflow-hidden rounded-[30px] border border-gray-200 bg-white transition duration-300 hover:shadow-2xl"
                >
                  {/* IMAGE */}

                  <div className="relative flex h-56 items-center justify-center bg-green-50">

                    <span className="absolute left-4 top-4 z-10 rounded-full bg-orange-500 px-4 py-2 text-sm font-bold text-white">
                      {item.discount}% OFF
                    </span>

                    {productImage ? (
                      <img
                        src={productImage}
                        alt={product?.name || "Product"}
                        className="h-40 w-40 object-contain transition duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="text-sm text-gray-400">
                        No Image Available
                      </div>
                    )}
                  </div>

                  {/* CONTENT */}

                  <div className="p-6">

                    <h3 className="text-xl font-bold text-gray-900">
                      {product?.name || "Product"}
                    </h3>

                    {/* PRICE */}

                    <div className="mt-3 flex items-center gap-3">
                      <span className="text-2xl font-bold text-green-600">
                        ₹{item.offerPrice}
                      </span>

                      <span className="text-gray-400 line-through">
                        ₹{item.oldPrice}
                      </span>
                    </div>

                    {/* TIMER */}

                    <div
                      className={`mt-4 flex items-center gap-2 text-sm ${
                        remainingTime === "Offer Ended"
                          ? "text-red-500"
                          : "text-orange-600"
                      }`}
                    >
                      <Clock3 size={17} />
                      {remainingTime}
                    </div>

                    {/* BUTTON */}

                    <button
                      disabled={remainingTime === "Offer Ended"}
                      className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-gray-400"
                    >
                      <ShoppingCart size={18} />
                      Add To Cart
                    </button>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
