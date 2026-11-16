
"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import CartItems from "./sections/CartItems";
import CartSummary from "./sections/CartSummary";
import EmptyCart from "./sections/EmptyCart";

import { getCart } from "@/api/cart_apis";
import { useAuth } from "@/context/AuthContext";

export default function CartPage() {
  const router = useRouter();
  const { isAuthenticated, loading: authLoading } = useAuth();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch cart from backend
  const fetchCart = useCallback(async () => {
    try {
      setError("");

      const response = await getCart();

      const cartData =
        response?.cart ||
        response?.data?.cart ||
        response?.data ||
        response;

      setItems(Array.isArray(cartData?.items) ? cartData.items : []);
    } catch (err) {
      console.error("Cart fetch error:", err);

      setError(
        err?.response?.data?.message ||
          "Unable to load your cart. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  // Check authentication
  useEffect(() => {
    if (authLoading) return;

    if (!isAuthenticated) {
      router.replace("/login?redirect=/cart");
      return;
    }

    fetchCart();
  }, [authLoading, isAuthenticated, router, fetchCart]);

  // Update header cart count
  const notifyCartUpdate = () => {
    window.dispatchEvent(new Event("cartUpdated"));
  };

  // Update quantity
  const handleUpdateQuantity = async (itemId, quantity) => {
    try {
      const { updateCartItem } = await import("@/api/cart_apis");

      await updateCartItem(itemId, quantity);

      await fetchCart();
      notifyCartUpdate();
    } catch (err) {
      console.error("Quantity update error:", err);

      alert(
        err?.response?.data?.message ||
          "Unable to update quantity."
      );
    }
  };

  // Remove item
  const handleRemoveItem = async (itemId) => {
    try {
      const { removeCartItem } = await import("@/api/cart_apis");

      await removeCartItem(itemId);

      await fetchCart();
      notifyCartUpdate();
    } catch (err) {
      console.error("Remove cart item error:", err);

      alert(
        err?.response?.data?.message ||
          "Unable to remove this product."
      );
    }
  };

  if (authLoading || loading) {
    return (
      <main className="min-h-screen bg-[#F8FAF5] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="animate-pulse space-y-6">
            <div className="h-10 w-64 bg-gray-200 rounded-xl" />
            <div className="h-36 bg-white rounded-[30px]" />
            <div className="h-36 bg-white rounded-[30px]" />
          </div>
        </div>
      </main>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  if (error) {
    return (
      <main className="min-h-screen bg-[#F8FAF5] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <p className="text-red-500 font-semibold">{error}</p>

          <button
            onClick={() => {
              setLoading(true);
              fetchCart();
            }}
            className="mt-5 bg-green-600 text-white px-6 py-3 rounded-xl"
          >
            Try Again
          </button>
        </div>
      </main>
    );
  }

  // Empty cart
  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <main className="min-h-screen bg-[#F8FAF5] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-5">

        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-10">
          Your Shopping Cart
          <span className="block text-green-600">
            Fresh Picks 🥬
          </span>
        </h1>

        <div className="grid lg:grid-cols-3 gap-10">

          <div className="lg:col-span-2">
            <CartItems
              items={items}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveItem}
            />
          </div>

          <div>
            <CartSummary items={items} />
          </div>

        </div>
      </div>
    </main>
  );
}
