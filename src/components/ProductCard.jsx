
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Heart, ShoppingCart, Star } from "lucide-react";

import { useAuth } from "@/context/AuthContext";

import { addToCart } from "@/api/cart_apis";
import { addToWishlist } from "@/api/wishlist_apis";

export default function ProductCard({ product }) {
  const router = useRouter();

  const { isAuthenticated, loading } = useAuth();

  const [selectedVariantId, setSelectedVariantId] = useState(
    product?.variants?.[0]?._id || ""
  );

  const [cartLoading, setCartLoading] = useState(false);
  const [wishlistLoading, setWishlistLoading] = useState(false);

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  // ==========================================
  // LOGIN PROTECTION
  // ==========================================

  const requireLogin = () => {
    if (loading) return false;

    if (!isAuthenticated) {
      const currentPath =
        window.location.pathname + window.location.search;

      router.push(
        `/login?redirect=${encodeURIComponent(currentPath)}`
      );

      return false;
    }

    return true;
  };

  // ==========================================
  // PRODUCT IMAGE
  // ==========================================

  const productImage =
    product?.images?.find(
      (image) =>
        typeof image === "string" && image.trim() !== ""
    ) || null;

  // ==========================================
  // PRODUCT VARIANTS
  // ==========================================

  const variants = Array.isArray(product?.variants)
    ? product.variants
    : [];

  const selectedVariant =
    variants.find(
      (variant) => variant._id === selectedVariantId
    ) || null;

  // ==========================================
  // DISPLAY PRICE
  // ==========================================

  const displayPrice = selectedVariant
    ? selectedVariant.discountPrice > 0
      ? selectedVariant.discountPrice
      : selectedVariant.price
    : product?.discountPrice > 0
      ? product.discountPrice
      : product?.price || 0;

  const displayUnitValue = selectedVariant
    ? selectedVariant.unitValue
    : product?.unitValue ?? 1;

  const displayUnit = selectedVariant
    ? selectedVariant.unit
    : product?.unit || "Kg";

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
  // SHOW MESSAGE
  // ==========================================

  const showMessage = (text, type = "success") => {
    setMessage(text);
    setMessageType(type);
  };

  // ==========================================
  // ADD TO CART
  // ==========================================

 
const handleAddToCart = async () => {
  if (!requireLogin()) return;

  if (variants.length > 0 && !selectedVariant) {
    showMessage("Please select a quantity", "error");
    return;
  }

  // Shared stock: always use parent product stock
  const availableStock = Number(product?.stock ?? 0);

  if (availableStock <= 0) {
    showMessage("Product is out of stock", "error");
    return;
  }

  try {
    setCartLoading(true);
    setMessage("");

    const response = await addToCart(
      product._id,
      1,
      selectedVariant?._id || null
    );

    showMessage(
      response.message || "Added to cart successfully",
      "success"
    );
  } catch (error) {
    showMessage(
      error.response?.data?.message ||
        "Unable to add product to cart",
      "error"
    );
  } finally {
    setCartLoading(false);
  }
};


  // ==========================================
  // ADD TO WISHLIST
  // ==========================================

  const handleAddToWishlist = async () => {
    if (!requireLogin()) return;

    try {
      setWishlistLoading(true);
      setMessage("");

      const response = await addToWishlist(product._id);

      showMessage(
        response.message || "Added to wishlist successfully",
        "success"
      );
    } catch (error) {
      showMessage(
        error.response?.data?.message ||
          "Unable to add to wishlist",
        "error"
      );
    } finally {
      setWishlistLoading(false);
    }
  };

  // ==========================================
  // RENDER
  // ==========================================

  return (
    <div className="group bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      {/* PRODUCT IMAGE */}

      <div className="relative h-64 bg-[#F8FAF5] flex items-center justify-center overflow-hidden">

        <span className="absolute top-4 left-4 bg-green-600 text-white text-xs font-medium px-3 py-1 rounded-full z-10">
          {product?.featured ? "Featured" : "Fresh"}
        </span>

        {/* WISHLIST */}

        <button
          type="button"
          onClick={handleAddToWishlist}
          disabled={loading || wishlistLoading}
          aria-label="Add to wishlist"
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-red-500 hover:text-white transition z-10 disabled:opacity-50"
        >
          <Heart
            size={18}
            className={wishlistLoading ? "animate-pulse" : ""}
          />
        </button>

        {/* PRODUCT IMAGE */}

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

      {/* PRODUCT CONTENT */}

      <div className="p-6">

        <p className="text-sm text-green-600 font-semibold">
          {product?.category?.name || "Vegetables"}
        </p>

        <Link
          href={`/products/${product?.slug}`}
          className="block mt-2 text-xl font-bold text-gray-900 hover:text-green-600 transition"
        >
          {product?.name}
        </Link>

        {/* RATING */}

        <div className="flex items-center gap-1 mt-3 text-yellow-500">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              fill="currentColor"
              size={16}
            />
          ))}

          <span className="ml-2 text-gray-500 text-sm">
            (5.0)
          </span>
        </div>

        {/* PRICE */}

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

            {/* ADD TO CART */}

            <button
              type="button"
              onClick={handleAddToCart}
              disabled={loading || cartLoading}
              aria-label={`Add ${product?.name || "product"} to cart`}
              className="bg-green-600 hover:bg-green-700 text-white w-14 h-14 rounded-2xl flex items-center justify-center transition disabled:opacity-50"
            >
              {cartLoading ? (
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <ShoppingCart size={22} />
              )}
            </button>
          </div>

          {/* PRODUCT VARIANTS */}

          {variants.length > 0 && (
            <div className="mt-5">

              <p className="text-xs font-semibold text-gray-500 mb-2">
                Select quantity
              </p>

              <div className="flex flex-wrap gap-2">

                {variants.map((variant) => {
                  const variantPrice =
                    variant?.discountPrice > 0
                      ? variant.discountPrice
                      : variant?.price || 0;

                  const isSelected =
                    selectedVariantId === variant._id;

                  return (
                    <button
                      type="button"
                      key={variant?._id}
                      onClick={() => {
                        setSelectedVariantId(variant._id);
                        setMessage("");
                      }}
                      className={`text-xs font-medium px-3 py-2 rounded-lg border transition ${
                        isSelected
                          ? "bg-green-600 text-white border-green-600"
                          : "bg-green-50 text-green-700 border-green-100 hover:border-green-500"
                      }`}
                    >
                      {formatQuantity(
                        variant?.unitValue,
                        variant?.unit
                      )}
                      {" · "}
                      ₹{variantPrice}
                    </button>
                  );
                })}

              </div>
            </div>
          )}

          {/* SUCCESS / ERROR MESSAGE */}

          {message && (
            <p
              className={`mt-4 text-xs font-medium ${
                messageType === "success"
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}

        </div>
      </div>
    </div>
  );
}
