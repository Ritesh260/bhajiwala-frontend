"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Star } from "lucide-react";

export default function ProductCard({ product }) {
// ==========================================
// PRODUCT IMAGE
// ==========================================

const productImage =
product?.images?.find(
(image) =>
typeof image === "string" &&
image.trim() !== ""
) || null;

// ==========================================
// PRODUCT VARIANTS
// ==========================================

const variants = Array.isArray(product?.variants)
? product.variants
: [];

// ==========================================
// DEFAULT PRODUCT PRICE
// ==========================================

const displayPrice =
product?.discountPrice > 0
? product.discountPrice
: product?.price || 0;

// ==========================================
// DEFAULT PRODUCT QUANTITY
// ==========================================

const displayUnitValue =
product?.unitValue !== undefined &&
product?.unitValue !== null
? product.unitValue
: 1;

const displayUnit =
product?.unit || "Kg";

// ==========================================
// FORMAT QUANTITY
// ==========================================

const formatQuantity = (value, unit) => {
if (value === undefined || value === null) {
return "";
}


return `${value} ${unit || ""}`.trim();


};

// ==========================================
// RENDER
// ==========================================

return ( <div className="group bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

```
  {/* ========================================
      PRODUCT IMAGE
  ======================================== */}

  <div className="relative h-64 bg-[#F8FAF5] flex items-center justify-center overflow-hidden">

    {/* Badge */}

    <span className="absolute top-4 left-4 bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-full z-10">
      {product?.featured ? "Featured" : "Fresh"}
    </span>

    {/* Wishlist */}

    <button
      type="button"
      aria-label="Add to wishlist"
      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-red-500 hover:text-white transition z-10"
    >
      <Heart size={18} />
    </button>

    {/* API / Cloudinary Image */}

    {productImage ? (
      <Image
        src={productImage}
        alt={product?.name || "Product"}
        width={220}
        height={220}
        className="object-contain group-hover:scale-110 transition duration-500"
      />
    ) : (
      <div className="text-green-600 font-semibold">
        No Image
      </div>
    )}

  </div>

  {/* ========================================
      PRODUCT CONTENT
  ======================================== */}

  <div className="p-6">

    {/* Category */}

    <p className="text-sm text-green-600 font-semibold">
      {product?.category?.name || "Vegetables"}
    </p>

    {/* Product Name */}

    <Link
      href={`/products/${product?.slug}`}
      className="block mt-2 text-xl font-bold text-gray-900 hover:text-green-600 transition"
    >
      {product?.name}
    </Link>

    {/* ======================================
        RATING
    ====================================== */}

    <div className="flex items-center gap-1 mt-3 text-yellow-500">

      <Star fill="currentColor" size={16} />
      <Star fill="currentColor" size={16} />
      <Star fill="currentColor" size={16} />
      <Star fill="currentColor" size={16} />
      <Star fill="currentColor" size={16} />

      <span className="ml-2 text-gray-500 text-sm">
        (5.0)
      </span>

    </div>

    {/* ======================================
        MAIN PRICE
    ====================================== */}

    <div className="mt-5">

      <div className="flex items-end justify-between">

        <div>

          <h3 className="text-3xl font-bold text-gray-900">
            ₹{displayPrice}
          </h3>

          <p className="text-gray-500 mt-1">
            / {formatQuantity(displayUnitValue, displayUnit)}
          </p>

        </div>

        {/* Cart */}

        <button
          type="button"
          aria-label={`Add ${product?.name || "product"} to cart`}
          className="bg-green-600 hover:bg-green-700 text-white w-14 h-14 rounded-2xl flex items-center justify-center transition"
        >
          <ShoppingCart size={22} />
        </button>

      </div>

      {/* ====================================
          PRODUCT VARIANTS
      ==================================== */}

      {variants.length > 0 && (
        <div className="mt-5">

          <p className="text-xs font-semibold text-gray-500 mb-2">
            Available quantities
          </p>

          <div className="flex flex-wrap gap-2">

            {variants.map((variant) => {

              const variantPrice =
                variant?.discountPrice > 0
                  ? variant.discountPrice
                  : variant?.price || 0;

              const variantQuantity =
                variant?.unitValue !== undefined
                  ? variant.unitValue
                  : variant?.quantity;

              return (
                <span
                  key={variant?._id}
                  className="text-xs font-medium bg-green-50 text-green-700 border border-green-100 px-3 py-1.5 rounded-lg"
                >
                  {formatQuantity(
                    variantQuantity,
                    variant?.unit
                  )}
                  {" · "}
                  ₹{variantPrice}
                </span>
              );
            })}

          </div>

        </div>
      )}

    </div>

  </div>

</div>


);
}
