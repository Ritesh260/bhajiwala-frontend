
"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Plus,
  Minus,
  Trash2,
  Loader2,
  ShoppingBasket,
} from "lucide-react";

export default function CartItems({
  items = [],
  onUpdateQuantity,
  onRemoveItem,
}) {
  const [updatingId, setUpdatingId] = useState(null);
  const [removingId, setRemovingId] = useState(null);

  // Get product variant
  const getVariant = (item) => {
    const product = item.product;

    if (!product || !item.variantId) return null;

    return product.variants?.find(
      (variant) =>
        String(variant._id) === String(item.variantId)
    );
  };

  // Get product price
  const getPrice = (item) => {
    const product = item.product;
    const variant = getVariant(item);

    const priceData = variant || product;

    if (!priceData) return 0;

    return Number(
      priceData.discountPrice > 0
        ? priceData.discountPrice
        : priceData.price || 0
    );
  };

  // Get unit
  const getUnit = (item) => {
    const variant = getVariant(item);

    if (variant) {
      return `${variant.unitValue} ${variant.unit}`;
    }

    const product = item.product;

    return `${product?.unitValue || 1} ${product?.unit || "Piece"}`;
  };

  // Decrease quantity
  const handleDecrease = async (item) => {
    if (item.quantity <= 1) return;

    try {
      setUpdatingId(item._id);

      await onUpdateQuantity(
        item._id,
        item.quantity - 1
      );
    } finally {
      setUpdatingId(null);
    }
  };

  // Increase quantity
  const handleIncrease = async (item) => {
    try {
      setUpdatingId(item._id);

      await onUpdateQuantity(
        item._id,
        item.quantity + 1
      );
    } finally {
      setUpdatingId(null);
    }
  };

  // Remove item
  const handleRemove = async (itemId) => {
    try {
      setRemovingId(itemId);
      await onRemoveItem(itemId);
    } finally {
      setRemovingId(null);
    }
  };

  if (!items.length) return null;

  return (
    <div className="space-y-5">

      {items.map((item) => {
        const product = item.product;

        if (!product) return null;

        const price = getPrice(item);
        const image = product.images?.[0];
        const isUpdating = updatingId === item._id;
        const isRemoving = removingId === item._id;

        return (
          <div
            key={item._id}
            className="bg-white rounded-[30px] p-5 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center gap-6"
          >

            {/* Product Image */}

            <div className="w-28 h-28 rounded-3xl bg-green-50 flex items-center justify-center shrink-0 overflow-hidden">

              {image ? (
                <Image
                  src={image}
                  alt={product.name || "Product"}
                  width={90}
                  height={90}
                  className="object-contain w-full h-full p-3"
                />
              ) : (
                <ShoppingBasket
                  size={40}
                  className="text-green-600"
                />
              )}

            </div>

            {/* Product Details */}

            <div className="flex-1 text-center sm:text-left">

              <h3 className="text-xl font-bold text-gray-900">
                {product.name}
              </h3>

              <p className="text-green-600 font-semibold mt-2">
                ₹{price} / {getUnit(item)}
              </p>

              {/* Quantity Controls */}

              <div className="flex items-center justify-center sm:justify-start gap-4 mt-4">

                <button
                  onClick={() => handleDecrease(item)}
                  disabled={item.quantity <= 1 || isUpdating || isRemoving}
                  className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center hover:bg-green-600 hover:text-white transition disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Minus size={18} />
                </button>

                <span className="font-bold text-gray-900 min-w-5 text-center">
                  {isUpdating ? (
                    <Loader2
                      size={17}
                      className="animate-spin inline"
                    />
                  ) : (
                    item.quantity
                  )}
                </span>

                <button
                  onClick={() => handleIncrease(item)}
                  disabled={isUpdating || isRemoving}
                  className="w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition disabled:opacity-40"
                >
                  <Plus size={18} />
                </button>

              </div>

            </div>

            {/* Price + Delete */}

            <div className="flex sm:flex-col items-center gap-5">

              <h3 className="text-xl font-bold text-gray-900">
                ₹{price * item.quantity}
              </h3>

              <button
                onClick={() => handleRemove(item._id)}
                disabled={isRemoving || isUpdating}
                className="text-red-500 hover:bg-red-50 p-3 rounded-xl transition disabled:opacity-40"
                title="Remove item"
              >
                {isRemoving ? (
                  <Loader2 size={22} className="animate-spin" />
                ) : (
                  <Trash2 size={22} />
                )}
              </button>

            </div>

          </div>
        );
      })}

    </div>
  );
}
