
"use client";

import Link from "next/link";
import {
  ShoppingBag,
  Truck,
  Tag,
  ArrowRight,
} from "lucide-react";

export default function CartSummary({ items = [] }) {

  // Get selected variant
  const getVariant = (item) => {
    if (!item.product || !item.variantId) return null;

    return item.product.variants?.find(
      (variant) =>
        String(variant._id) === String(item.variantId)
    );
  };

  // Calculate subtotal
  const subtotal = items.reduce((total, item) => {
    const priceData = getVariant(item) || item.product;

    if (!priceData) return total;

    const price = Number(
      priceData.discountPrice > 0
        ? priceData.discountPrice
        : priceData.price || 0
    );

    return total + price * item.quantity;
  }, 0);

  // Calculate discount
  const discount = items.reduce((total, item) => {
    const priceData = getVariant(item) || item.product;

    if (!priceData) return total;

    const originalPrice = Number(priceData.price || 0);
    const sellingPrice = Number(
      priceData.discountPrice > 0
        ? priceData.discountPrice
        : priceData.price || 0
    );

    const itemDiscount = Math.max(
      originalPrice - sellingPrice,
      0
    );

    return total + itemDiscount * item.quantity;
  }, 0);

  // Delivery charge
  const delivery = items.length > 0 ? 30 : 0;

  // Final total
  const total = subtotal + delivery;

  return (
    <div className="bg-white rounded-[35px] shadow-xl border border-gray-100 p-7 sticky top-28">

      {/* Heading */}

      <div className="flex items-center gap-3 mb-7">

        <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">
          <ShoppingBag className="text-green-600" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Order Summary
          </h2>

          <p className="text-sm text-gray-500">
            Fresh vegetables cart
          </p>
        </div>

      </div>

      {/* Price Details */}

      <div className="space-y-5">

        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>

          <span className="font-semibold text-gray-900">
            ₹{subtotal}
          </span>
        </div>

        <div className="flex justify-between text-gray-600">

          <div className="flex items-center gap-2">
            <Truck size={18} className="text-green-600" />
            Delivery
          </div>

          <span className="font-semibold text-gray-900">
            ₹{delivery}
          </span>

        </div>

        <div className="flex justify-between text-green-600">

          <div className="flex items-center gap-2">
            <Tag size={18} />
            Discount
          </div>

          <span className="font-semibold">
            -₹{discount}
          </span>

        </div>

      </div>

      {/* Divider */}

      <div className="border-t border-gray-200 my-7" />

      {/* Total */}

      <div className="flex justify-between items-center">

        <h3 className="text-xl font-bold text-gray-900">
          Total
        </h3>

        <h3 className="text-3xl font-extrabold text-green-600">
          ₹{total}
        </h3>

      </div>

      {/* Checkout */}

      <Link
        href="/checkout"
        className="mt-8 w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-semibold transition"
      >
        Proceed To Checkout
        <ArrowRight size={20} />
      </Link>

      {/* Continue Shopping */}

      <Link
        href="/products"
        className="mt-4 block text-center text-green-600 font-semibold hover:text-green-700"
      >
        Continue Shopping
      </Link>

    </div>
  );
}
