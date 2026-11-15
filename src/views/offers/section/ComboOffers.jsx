
"use client";

import { useEffect, useState } from "react";

import {
  ShoppingCart,
  PackageCheck,
} from "lucide-react";

import { getCombos } from "@/api/combo_apis";

export default function ComboOffers() {
  const [combos, setCombos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // =====================================
  // GET COMBOS API
  // =====================================

  const fetchCombos = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getCombos();

      if (response.success) {
        const activeCombos = (response.combos || []).filter(
          (combo) => combo.status === "Active"
        );

        setCombos(activeCombos);
      } else {
        setError(response.message || "Unable to fetch combos");
      }
    } catch (err) {
      console.error("Combo Offers API Error:", err);

      setError(
        err.response?.data?.message ||
          "Something went wrong while loading combos."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCombos();
  }, []);

  // =====================================
  // CALCULATE TOTAL ITEMS
  // =====================================

  const getTotalItems = (items = []) => {
    return items.reduce(
      (total, item) => total + Number(item.quantity || 0),
      0
    );
  };

  // =====================================
  // CALCULATE SAVING
  // =====================================

  const getSaving = (oldPrice, price) => {
    const saving = Number(oldPrice || 0) - Number(price || 0);

    return Math.max(0, saving);
  };

  // =====================================
  // RENDER
  // =====================================

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5">

        {/* HEADER */}

        <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-semibold uppercase tracking-[3px] text-green-600">
              Value Packs
            </span>

            <h2 className="mt-3 text-4xl font-bold text-gray-900 lg:text-5xl">
              Fresh Combo Offers
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-gray-600">
              Get more vegetables at better prices with our specially
              curated combo packs.
            </p>
          </div>
        </div>

        {/* LOADING */}

        {loading && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="animate-pulse overflow-hidden rounded-[35px] border border-gray-200"
              >
                <div className="h-64 bg-gray-100" />

                <div className="space-y-4 p-7">
                  <div className="h-4 w-1/3 rounded bg-gray-200" />
                  <div className="h-6 w-3/4 rounded bg-gray-200" />
                  <div className="h-8 w-1/2 rounded bg-gray-200" />
                  <div className="h-12 rounded bg-gray-200" />
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
              onClick={fetchCombos}
              className="mt-4 rounded-lg bg-green-600 px-5 py-2 font-semibold text-white hover:bg-green-700"
            >
              Try Again
            </button>
          </div>
        )}

        {/* EMPTY STATE */}

        {!loading && !error && combos.length === 0 && (
          <div className="rounded-2xl bg-[#F8FAF5] p-12 text-center">
            <PackageCheck
              size={42}
              className="mx-auto text-gray-400"
            />

            <h3 className="mt-4 text-xl font-bold text-gray-800">
              No Combo Offers Available
            </h3>

            <p className="mt-2 text-gray-500">
              Fresh combo packs will be available soon.
            </p>
          </div>
        )}

        {/* COMBO CARDS */}

        {!loading && !error && combos.length > 0 && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {combos.map((item) => {
              const totalItems = getTotalItems(item.items);

              const saving = getSaving(
                item.oldPrice,
                item.price
              );

              return (
                <div
                  key={item._id}
                  className="group overflow-hidden rounded-[35px] border border-gray-200 bg-[#F8FAF5] transition duration-300 hover:shadow-2xl"
                >

                  {/* IMAGE */}

                  <div className="relative flex h-64 items-center justify-center bg-green-100">

                    <span className="absolute left-5 top-5 z-10 rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white">
                      Save ₹{saving}
                    </span>

                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-48 w-48 object-contain transition duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <PackageCheck
                        size={70}
                        className="text-green-600"
                      />
                    )}

                  </div>

                  {/* CONTENT */}

                  <div className="p-7">

                    {/* ITEMS */}

                    <div className="flex items-center gap-2 text-sm font-semibold text-green-600">
                      <PackageCheck size={18} />

                      {totalItems} Fresh Items
                    </div>

                    {/* TITLE */}

                    <h3 className="mt-4 text-2xl font-bold text-gray-900">
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}

                    {item.description && (
                      <p className="mt-2 line-clamp-2 text-sm text-gray-500">
                        {item.description}
                      </p>
                    )}

                    {/* PRODUCT NAMES */}

                    {item.items?.length > 0 && (
                      <p className="mt-3 text-sm text-gray-600">
                        {item.items
                          .map((product) => product.name)
                          .join(", ")}
                      </p>
                    )}

                    {/* PRICE */}

                    <div className="mt-5 flex items-center gap-3">

                      <span className="text-3xl font-bold text-green-600">
                        ₹{item.price}
                      </span>

                      {item.oldPrice > item.price && (
                        <span className="text-gray-400 line-through">
                          ₹{item.oldPrice}
                        </span>
                      )}

                    </div>

                    {/* BUTTON */}

                    <button
                      className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-green-600 py-4 font-semibold text-white transition hover:bg-green-700"
                    >
                      <ShoppingCart size={20} />
                      Add Combo
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
