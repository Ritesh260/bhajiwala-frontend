
"use client";

import { useEffect, useState } from "react";

import {
  Copy,
  Percent,
  ShoppingBasket,
  Gift,
} from "lucide-react";

import { getCoupons } from "@/api/coupon_apis";

export default function DiscountCards() {
  const [discounts, setDiscounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [copiedCode, setCopiedCode] = useState("");

  // =====================================
  // GET COUPONS API
  // =====================================

  const fetchCoupons = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getCoupons();

      if (response.success) {
        const activeCoupons = (response.coupons || []).filter(
          (coupon) => coupon.status === "Active"
        );

        setDiscounts(activeCoupons);
      } else {
        setError(response.message || "Unable to fetch coupons");
      }
    } catch (err) {
      console.error("Coupons API Error:", err);

      setError(
        err.response?.data?.message ||
          "Something went wrong while loading coupons."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoupons();
  }, []);

  // =====================================
  // COPY COUPON CODE
  // =====================================

  const handleCopy = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);

      setTimeout(() => {
        setCopiedCode("");
      }, 2000);
    } catch (err) {
      console.error("Copy Coupon Error:", err);
      alert("Unable to copy coupon code. Please copy it manually.");
    }
  };

  // =====================================
  // GET COUPON ICON
  // =====================================

  const getCouponIcon = (type) => {
    switch (type) {
      case "percentage":
        return Percent;

      case "fixed":
        return Gift;

      case "free-delivery":
        return ShoppingBasket;

      default:
        return Gift;
    }
  };

  // =====================================
  // GET COUPON TITLE
  // =====================================

  const getCouponTitle = (coupon) => {
    if (coupon.discountType === "percentage") {
      return `${coupon.discountValue}% OFF`;
    }

    if (coupon.discountType === "fixed") {
      return `Save ₹${coupon.discountValue}`;
    }

    if (coupon.discountType === "free-delivery") {
      return "Free Delivery";
    }

    return coupon.title;
  };

  // =====================================
  // GET COUPON DESCRIPTION
  // =====================================

  const getCouponDescription = (coupon) => {
    if (coupon.description) {
      return coupon.description;
    }

    if (coupon.minOrderAmount > 0) {
      return `On orders above ₹${coupon.minOrderAmount}`;
    }

    return coupon.title;
  };

  // =====================================
  // GET CARD GRADIENT
  // =====================================

  const getGradient = (type) => {
    switch (type) {
      case "percentage":
        return "from-green-500 to-green-600";

      case "fixed":
        return "from-orange-400 to-orange-500";

      case "free-delivery":
        return "from-emerald-500 to-emerald-600";

      default:
        return "from-green-500 to-green-600";
    }
  };

  return (
    <section className="bg-[#F8FAF5] py-24">
      <div className="mx-auto max-w-7xl px-5">

        {/* HEADING */}

        <div className="mb-14 text-center">
          <span className="font-semibold uppercase tracking-[3px] text-orange-500">
            Exclusive Deals
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900 lg:text-5xl">
            Special Discounts For You
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Use these amazing coupons and save more on your daily fresh
            vegetables and groceries.
          </p>
        </div>

        {/* LOADING */}

        {loading && (
          <div className="grid gap-7 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-64 animate-pulse rounded-[32px] bg-gray-200"
              />
            ))}
          </div>
        )}

        {/* ERROR */}

        {!loading && error && (
          <div className="rounded-2xl bg-red-50 p-8 text-center">
            <p className="text-red-600">{error}</p>

            <button
              onClick={fetchCoupons}
              className="mt-4 rounded-lg bg-green-600 px-5 py-2 font-semibold text-white hover:bg-green-700"
            >
              Try Again
            </button>
          </div>
        )}

        {/* EMPTY STATE */}

        {!loading && !error && discounts.length === 0 && (
          <div className="rounded-2xl bg-white p-12 text-center">
            <Gift className="mx-auto text-gray-400" size={40} />

            <h3 className="mt-4 text-xl font-bold text-gray-800">
              No Coupons Available
            </h3>

            <p className="mt-2 text-gray-500">
              Check back soon for exciting discounts.
            </p>
          </div>
        )}

        {/* COUPON CARDS */}

        {!loading && !error && discounts.length > 0 && (
          <div className="grid gap-7 md:grid-cols-3">
            {discounts.map((item) => {
              const Icon = getCouponIcon(item.discountType);

              return (
                <div
                  key={item._id}
                  className={`relative overflow-hidden rounded-[32px] bg-gradient-to-br ${getGradient(
                    item.discountType
                  )} p-8 text-white shadow-xl transition duration-300 hover:-translate-y-2`}
                >
                  {/* CIRCLE */}

                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />

                  <div className="relative">

                    {/* ICON */}

                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
                      <Icon size={28} />
                    </div>

                    {/* TITLE */}

                    <h3 className="text-3xl font-bold">
                      {getCouponTitle(item)}
                    </h3>

                    {/* DESCRIPTION */}

                    <p className="mt-3 text-white/80">
                      {getCouponDescription(item)}
                    </p>

                    {/* MINIMUM ORDER */}

                    {item.minOrderAmount > 0 && (
                      <p className="mt-2 text-sm text-white/80">
                        Minimum order: ₹{item.minOrderAmount}
                      </p>
                    )}

                    {/* MAX DISCOUNT */}

                    {item.maxDiscount > 0 &&
                      item.discountType === "percentage" && (
                        <p className="mt-1 text-sm text-white/80">
                          Maximum discount: ₹{item.maxDiscount}
                        </p>
                      )}

                    {/* COUPON CODE */}

                    <div className="mt-8 flex items-center justify-between rounded-2xl bg-white px-5 py-4">

                      <span className="font-bold tracking-wider text-gray-900">
                        {item.code}
                      </span>

                      <button
                        onClick={() => handleCopy(item.code)}
                        className="flex items-center gap-2 text-green-600 transition hover:scale-105"
                        title="Copy Coupon"
                      >
                        {copiedCode === item.code ? (
                          <span className="text-sm font-semibold">
                            Copied!
                          </span>
                        ) : (
                          <>
                            <Copy size={20} />
                            <span className="text-sm font-semibold">
                              Copy
                            </span>
                          </>
                        )}
                      </button>

                    </div>

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
