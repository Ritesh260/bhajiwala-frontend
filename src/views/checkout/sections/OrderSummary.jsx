
"use client";

import { useEffect, useState } from "react";
import {
  ShoppingBag,
  Truck,
  BadgePercent,
  Receipt,
  Tag,
  Loader2,
  X,
} from "lucide-react";

export default function OrderSummary({
  summary,
  loading,
  error,
  onApplyCoupon,
  onRemoveCoupon,
  appliedCoupon,
}) {
  const [couponInput, setCouponInput] = useState("");

  useEffect(() => {
    setCouponInput(appliedCoupon || "");
  }, [appliedCoupon]);

  const money = (value) =>
    `₹${Number(value || 0).toFixed(2)}`;

  const itemCount = Array.isArray(summary?.items)
    ? summary.items.reduce(
        (total, item) => total + Number(item.quantity || 0),
        0
      )
    : Number(summary?.itemCount || 0);

  const subtotal = Number(summary?.subtotal || 0);
  const productDiscount = Number(summary?.productDiscount || 0);
  const couponDiscount = Number(summary?.couponDiscount || 0);
  const delivery = Number(summary?.deliveryCharge || 0);
  const total = Number(summary?.totalAmount || 0);

  const handleApply = () => {
    if (!couponInput.trim()) return;

    onApplyCoupon(couponInput.trim().toUpperCase());
  };

  return (
    <section className="bg-white rounded-[30px] shadow-sm border border-gray-100 p-6 sticky top-28">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">
          <ShoppingBag className="text-green-600" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Order Summary
          </h2>

          <p className="text-gray-500 text-sm">
            {summary ? `${itemCount} Items in your cart` : "Your cart total"}
          </p>
        </div>
      </div>

      {/* COUPON */}

      <div className="mt-8">
        <label className="text-sm font-semibold text-gray-700">
          Coupon Code
        </label>

        <div className="flex mt-3">
          <input
            type="text"
            value={couponInput}
            onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
            disabled={loading || Boolean(appliedCoupon)}
            placeholder="Enter coupon"
            className="min-w-0 flex-1 border border-gray-200 rounded-l-2xl px-4 py-3 outline-none focus:border-green-600 disabled:bg-gray-100"
          />

          {appliedCoupon ? (
            <button
              type="button"
              onClick={onRemoveCoupon}
              disabled={loading}
              className="bg-red-500 hover:bg-red-600 text-white px-4 rounded-r-2xl flex items-center gap-1"
            >
              <X size={17} />
              Remove
            </button>
          ) : (
            <button
              type="button"
              onClick={handleApply}
              disabled={loading || !couponInput.trim()}
              className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-5 rounded-r-2xl transition"
            >
              Apply
            </button>
          )}
        </div>

        {appliedCoupon && (
          <p className="mt-2 text-sm text-green-700 flex items-center gap-2">
            <Tag size={15} />
            Coupon {appliedCoupon} applied for validation
          </p>
        )}
      </div>

      {/* PRICE DETAILS */}

      {loading ? (
        <div className="py-12 flex flex-col items-center text-green-600">
          <Loader2 className="animate-spin" size={30} />
          <p className="text-sm mt-3">Calculating your order...</p>
        </div>
      ) : error ? (
        <div className="mt-6 bg-red-50 text-red-600 rounded-xl p-4 text-sm">
          {error}
        </div>
      ) : summary ? (
        <>
          <div className="mt-8 space-y-5">
            <div className="flex justify-between gap-3">
              <div className="flex items-center gap-2 text-gray-600">
                <Receipt size={18} />
                Subtotal
              </div>

              <span className="font-semibold">{money(subtotal)}</span>
            </div>

            {productDiscount > 0 && (
              <div className="flex justify-between text-green-600">
                <div className="flex items-center gap-2">
                  <BadgePercent size={18} />
                  Product Discount
                </div>

                <span className="font-semibold">
                  -{money(productDiscount)}
                </span>
              </div>
            )}

            {couponDiscount > 0 && (
              <div className="flex justify-between text-green-600">
                <div className="flex items-center gap-2">
                  <Tag size={18} />
                  Coupon Discount
                </div>

                <span className="font-semibold">
                  -{money(couponDiscount)}
                </span>
              </div>
            )}

            <div className="flex justify-between gap-3">
              <div className="flex items-center gap-2 text-gray-600">
                <Truck size={18} />
                Delivery Charge
              </div>

              <span className="font-semibold">
                {delivery === 0 ? (
                  <span className="text-green-600">FREE</span>
                ) : (
                  money(delivery)
                )}
              </span>
            </div>
          </div>

          <div className="border-t border-gray-200 my-7" />

          <div className="flex justify-between items-center gap-3">
            <span className="text-xl font-bold text-gray-900">
              Grand Total
            </span>

            <span className="text-3xl font-extrabold text-green-600">
              {money(total)}
            </span>
          </div>

          <div className="mt-8 rounded-2xl bg-green-50 border border-green-100 p-4">
            <p className="font-semibold text-green-700">
              🚚 Fresh Delivery
            </p>

            <p className="text-gray-600 text-sm mt-2">
              Your order will be delivered to your selected address.
            </p>
          </div>
        </>
      ) : (
        <div className="mt-8 rounded-xl bg-gray-50 p-5 text-center text-sm text-gray-500">
          Select a delivery address to calculate your order total.
        </div>
      )}
    </section>
  );
}
