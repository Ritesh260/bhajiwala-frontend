
"use client";

import { Suspense, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import DeliveryTracker from "./sections/DeliveryTracker";
import OrderStatus from "./sections/OrderStatus";
import DeliveryInfo from "./sections/DeliveryInfo";
import api from "@/api/axios";

function TrackOrderContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchOrder = useCallback(async () => {
    if (!orderId) {
      setError("Order ID not found. Please open tracking from My Orders.");
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const { data } = await api.get(`/user/orders/${orderId}`);

      if (!data.success) {
        throw new Error(data.message || "Unable to fetch order details");
      }

      setOrder(data.order || data.data);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          err.message ||
          "Unable to load order details"
      );
    } finally {
      setLoading(false);
    }
  }, [orderId]);

  useEffect(() => {
    fetchOrder();
  }, [fetchOrder]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#F8FAF5] pt-28 pb-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="mt-4 text-gray-600">Loading your order...</p>
        </div>
      </main>
    );
  }

  if (error || !order) {
    return (
      <main className="min-h-screen bg-[#F8FAF5] pt-28 pb-20 flex items-center justify-center px-5">
        <div className="bg-white rounded-3xl shadow-sm p-8 text-center max-w-md w-full">
          <h2 className="text-2xl font-bold text-gray-900">
            Unable to Track Order
          </h2>

          <p className="text-gray-500 mt-3">
            {error || "Order details not found."}
          </p>

          <button
            onClick={fetchOrder}
            className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold"
          >
            Try Again
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8FAF5] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-12">
          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
            Order Tracking
          </span>

          <h1 className="mt-5 text-5xl font-bold text-gray-900">
            Track Your Order
          </h1>

          <p className="mt-4 text-gray-600">
            Stay updated with every step of your delivery.
          </p>

          <p className="mt-3 text-sm text-gray-500">
            Order ID: {order.orderNumber || order._id}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <DeliveryTracker order={order} />
          </div>

          <div className="space-y-6">
            <OrderStatus order={order} />
            <DeliveryInfo order={order} />
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={fetchOrder}
            className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-xl font-semibold"
          >
            Refresh Order Status
          </button>
        </div>

      </div>
    </main>
  );
}

export default function TrackOrderPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#F8FAF5] flex items-center justify-center">
          Loading tracking page...
        </main>
      }
    >
      <TrackOrderContent />
    </Suspense>
  );
}
