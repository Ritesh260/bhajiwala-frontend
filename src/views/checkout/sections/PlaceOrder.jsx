
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  ShieldCheck,
  BadgeCheck,
  Loader2,
} from "lucide-react";

import { placeOrder } from "@/api/order_apis";

export default function PlaceOrder({
  selectedAddress,
  couponCode,
  summary,
  summaryLoading,
  onRefreshSummary,
}) {
  const router = useRouter();

  const [agree, setAgree] = useState(true);
  const [placing, setPlacing] = useState(false);
  const [error, setError] = useState("");

  const handlePlaceOrder = async () => {
    if (!selectedAddress?._id) {
      setError("Please select a delivery address.");
      return;
    }

    if (!summary) {
      setError("Please wait for your order summary.");
      return;
    }

    if (summaryLoading) {
      setError("Please wait while we calculate your order.");
      return;
    }

    if (!agree) {
      setError("Please accept Terms & Conditions.");
      return;
    }

    try {
      setPlacing(true);
      setError("");

      // Order API service se order place hoga.
      const data = await placeOrder({
        addressId: selectedAddress._id,
        couponCode: couponCode || "",
        paymentMethod: "COD",
        notes: "",
      });

      if (!data.success || !data.order?._id) {
        throw new Error(data.message || "Unable to place order.");
      }

      // Successful order ke baad success page par redirect.
      router.push(
        `/order-success?orderId=${encodeURIComponent(data.order._id)}`
      );
    } catch (err) {
      const message =
        err.response?.data?.message ||
        err.message ||
        "Something went wrong while placing your order.";

      setError(message);

      // Stock ya price change hone par summary refresh.
      if (err.response?.status === 400 || err.response?.status === 409) {
        onRefreshSummary?.();
      }
    } finally {
      setPlacing(false);
    }
  };

  return (
    <section className="bg-white rounded-[30px] shadow-sm border border-gray-100 p-6">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">
          <ShieldCheck className="text-green-600" />
        </div>

        <div>
          <h3 className="font-bold text-gray-900">
            Secure Checkout
          </h3>

          <p className="text-gray-500 text-sm mt-1 leading-6">
            Your order details are validated securely before confirmation.
          </p>
        </div>
      </div>

      <label className="flex items-start gap-3 mt-8 cursor-pointer">
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          className="mt-1 accent-green-600"
        />

        <span className="text-sm text-gray-600 leading-6">
          I agree to the
          <span className="text-green-600 font-semibold">
            {" "}Terms & Conditions
          </span>
          {" "}and{" "}
          <span className="text-green-600 font-semibold">
            Privacy Policy
          </span>.
        </span>
      </label>

      <div className="mt-8 space-y-3">
        <div className="flex items-center gap-2 text-gray-700">
          <BadgeCheck size={18} className="text-green-600" />
          Fresh Quality Guarantee
        </div>

        <div className="flex items-center gap-2 text-gray-700">
          <BadgeCheck size={18} className="text-green-600" />
          Fast Doorstep Delivery
        </div>

        <div className="flex items-center gap-2 text-gray-700">
          <BadgeCheck size={18} className="text-green-600" />
          Cash On Delivery
        </div>
      </div>

      {error && (
        <div className="mt-6 rounded-xl bg-red-50 border border-red-100 p-4 text-sm text-red-600">
          {error}
        </div>
      )}

      <button
        type="button"
        onClick={handlePlaceOrder}
        disabled={
          !agree ||
          placing ||
          summaryLoading ||
          !summary ||
          !selectedAddress
        }
        className={`mt-8 w-full flex items-center justify-center gap-3 rounded-2xl py-4 font-semibold transition ${
          agree &&
          !placing &&
          !summaryLoading &&
          summary &&
          selectedAddress
            ? "bg-green-600 hover:bg-green-700 text-white"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        {placing ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            Placing Your Order...
          </>
        ) : (
          <>
            Place Order
            <ArrowRight size={20} />
          </>
        )}
      </button>

      <p className="text-center text-xs text-gray-400 mt-5">
        You will pay when your order is delivered.
      </p>
    </section>
  );
}
