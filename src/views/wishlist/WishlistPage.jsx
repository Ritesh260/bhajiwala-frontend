
"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import {
  Heart,
  ShoppingCart,
  Trash2,
  ArrowRight,
  Loader2,
  Leaf,
  ShoppingBag,
  AlertCircle,
} from "lucide-react";

import { useAuth } from "@/context/AuthContext";
import {
  getWishlist,
  removeFromWishlist,
  clearWishlist,
} from "@/api/wishlist_apis";

import { addToCart } from "@/api/cart_apis";

export default function WishlistPage() {
  const router = useRouter();
  const { isAuthenticated, loading: authLoading } = useAuth();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [removingId, setRemovingId] = useState(null);
  const [addingId, setAddingId] = useState(null);
  const [clearing, setClearing] = useState(false);

  // Fetch logged-in user's wishlist
  const fetchWishlist = useCallback(async () => {
    try {
      setError("");

      const response = await getWishlist();

      const wishlistData =
        response?.wishlist ||
        response?.data?.wishlist ||
        response?.data ||
        response;

      const wishlistProducts = Array.isArray(wishlistData?.products)
        ? wishlistData.products
        : [];

      setProducts(wishlistProducts);
    } catch (err) {
      console.error("Wishlist fetch error:", err);

      setError(
        err?.response?.data?.message ||
          "Unable to load your wishlist. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  // Authentication check
  useEffect(() => {
    if (authLoading) return;

    if (!isAuthenticated) {
      router.replace("/login?redirect=/wishlist");
      return;
    }

    fetchWishlist();
  }, [authLoading, isAuthenticated, router, fetchWishlist]);

  // Remove one product
  const handleRemove = async (productId) => {
    try {
      setRemovingId(productId);

      await removeFromWishlist(productId);

      setProducts((previous) =>
        previous.filter(
          (product) => String(product._id) !== String(productId)
        )
      );

      window.dispatchEvent(new Event("wishlistUpdated"));
    } catch (err) {
      console.error("Remove wishlist error:", err);

      alert(
        err?.response?.data?.message ||
          "Unable to remove product from wishlist."
      );
    } finally {
      setRemovingId(null);
    }
  };

  // Clear complete wishlist
  const handleClearWishlist = async () => {
    if (!products.length) return;

    const confirmed = window.confirm(
      "Are you sure you want to remove all products from your wishlist?"
    );

    if (!confirmed) return;

    try {
      setClearing(true);

      await clearWishlist();

      setProducts([]);

      window.dispatchEvent(new Event("wishlistUpdated"));
    } catch (err) {
      console.error("Clear wishlist error:", err);

      alert(
        err?.response?.data?.message ||
          "Unable to clear wishlist."
      );
    } finally {
      setClearing(false);
    }
  };

  // Add wishlist product to cart
  const handleAddToCart = async (product) => {
    try {
      setAddingId(product._id);

      // If product has variants, select its first variant
      const firstVariant = product.variants?.[0] || null;

      await addToCart(
        product._id,
        1,
        firstVariant?._id || null
      );

      window.dispatchEvent(new Event("cartUpdated"));

      alert("Product added to your cart successfully!");
    } catch (err) {
      console.error("Wishlist add to cart error:", err);

      alert(
        err?.response?.data?.message ||
          "Unable to add product to cart."
      );
    } finally {
      setAddingId(null);
    }
  };

  // Loading screen
  if (authLoading || loading) {
    return (
      <main className="min-h-screen bg-[#F8FAF5] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="animate-pulse space-y-6">
            <div className="h-10 w-64 bg-gray-200 rounded-xl" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="h-80 bg-white rounded-[30px]"
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!isAuthenticated) return null;

  // Error screen
  if (error) {
    return (
      <main className="min-h-screen bg-[#F8FAF5] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="bg-white rounded-[30px] p-10 text-center border border-red-100">
            <AlertCircle
              size={42}
              className="text-red-500 mx-auto mb-4"
            />

            <h2 className="text-xl font-bold text-gray-900">
              Something went wrong
            </h2>

            <p className="text-gray-500 mt-2">{error}</p>

            <button
              onClick={() => {
                setLoading(true);
                fetchWishlist();
              }}
              className="mt-6 bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-xl font-semibold"
            >
              Try Again
            </button>
          </div>
        </div>
      </main>
    );
  }

  // Empty wishlist
  if (products.length === 0) {
    return (
      <main className="min-h-screen bg-[#F8FAF5] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="min-h-[65vh] flex items-center justify-center">
            <div className="max-w-xl text-center">

              <div className="mx-auto w-32 h-32 rounded-full bg-green-100 flex items-center justify-center">
                <Heart
                  size={58}
                  className="text-green-600"
                />
              </div>

              <h1 className="mt-8 text-4xl font-extrabold text-gray-900">
                Your Wishlist Is Empty
              </h1>

              <p className="mt-4 text-gray-600 text-lg leading-8">
                Save your favourite fresh vegetables here.
                You can come back anytime and add them to your cart.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-3 rounded-full font-semibold">
                <Leaf size={18} />
                Your favourite fresh picks
              </div>

              <Link
                href="/products"
                className="mt-8 inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition"
              >
                Explore Products
                <ArrowRight size={20} />
              </Link>

            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8FAF5] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-5">

        {/* Page Heading */}

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-10">

          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">
                <Heart
                  className="text-green-600"
                  size={25}
                />
              </div>

              <div>
                <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
                  My Wishlist
                </h1>

                <p className="text-gray-500 mt-1">
                  Your favourite fresh picks
                </p>
              </div>
            </div>

            <p className="text-green-600 font-semibold mt-4">
              {products.length} {products.length === 1 ? "Product" : "Products"} Saved
            </p>
          </div>

          <button
            onClick={handleClearWishlist}
            disabled={clearing}
            className="inline-flex items-center justify-center gap-2 border border-red-200 text-red-500 hover:bg-red-50 px-5 py-3 rounded-xl font-semibold transition disabled:opacity-50"
          >
            {clearing ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Trash2 size={18} />
            )}

            Clear Wishlist
          </button>

        </div>

        {/* Wishlist Products */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {products.map((product) => {
            const image = product.images?.[0];

            const priceData = product.variants?.[0] || product;

            const price = Number(
              priceData.discountPrice > 0
                ? priceData.discountPrice
                : priceData.price || 0
            );

            const originalPrice = Number(priceData.price || 0);

            const isRemoving =
              removingId === product._id;

            const isAdding =
              addingId === product._id;

            return (
              <div
                key={product._id}
                className="group bg-white rounded-[28px] border border-gray-100 shadow-sm hover:shadow-xl transition duration-300 overflow-hidden"
              >

                {/* Product Image */}

                <div className="relative h-56 bg-green-50 flex items-center justify-center p-5">

                  {image ? (
                    <Image
                      src={image}
                      alt={product.name || "Product"}
                      width={220}
                      height={220}
                      className="w-full h-full object-contain group-hover:scale-105 transition duration-300"
                    />
                  ) : (
                    <ShoppingBag
                      size={65}
                      className="text-green-600"
                    />
                  )}

                  <span className="absolute top-4 left-4 bg-white text-green-700 text-xs font-bold px-3 py-2 rounded-full shadow-sm">
                    Fresh Pick
                  </span>

                  <button
                    onClick={() => handleRemove(product._id)}
                    disabled={isRemoving}
                    title="Remove from wishlist"
                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white text-red-500 flex items-center justify-center shadow-md hover:bg-red-500 hover:text-white transition disabled:opacity-50"
                  >
                    {isRemoving ? (
                      <Loader2
                        size={19}
                        className="animate-spin"
                      />
                    ) : (
                      <Heart
                        size={19}
                        fill="currentColor"
                      />
                    )}
                  </button>

                </div>

                {/* Product Details */}

                <div className="p-5">

                  <h3 className="text-lg font-bold text-gray-900 line-clamp-1">
                    {product.name}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1 line-clamp-2 min-h-10">
                    {product.shortDescription ||
                      product.description ||
                      "Fresh quality vegetables delivered to your doorstep."}
                  </p>

                  {/* Price */}

                  <div className="flex items-center gap-2 mt-4">

                    <span className="text-2xl font-extrabold text-green-600">
                      ₹{price}
                    </span>

                    {originalPrice > price && (
                      <span className="text-sm text-gray-400 line-through">
                        ₹{originalPrice}
                      </span>
                    )}

                    <span className="text-xs text-gray-500">
                      / {priceData.unitValue || 1} {priceData.unit || "Piece"}
                    </span>

                  </div>

                  {/* Add to Cart */}

                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={isAdding || isRemoving}
                    className="mt-5 w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3.5 rounded-xl font-semibold transition disabled:opacity-50"
                  >
                    {isAdding ? (
                      <>
                        <Loader2
                          size={19}
                          className="animate-spin"
                        />
                        Adding...
                      </>
                    ) : (
                      <>
                        <ShoppingCart size={19} />
                        Add To Cart
                      </>
                    )}
                  </button>

                </div>
              </div>
            );
          })}

        </div>

        {/* Continue Shopping */}

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold"
          >
            Continue Shopping
            <ArrowRight size={19} />
          </Link>
        </div>

      </div>
    </main>
  );
}
