
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import {
  CircleCheckBig,
  ShoppingBag,
  Truck,
  ArrowRight,
  Receipt,
  Loader2,
} from "lucide-react";

import { getOrderById } from "@/api/order_apis";

export default function OrderSuccessPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrder = async () => {
      if (!orderId) {
        setError("Order ID not found.");
        setLoading(false);
        return;
      }

      try {
        const data = await getOrderById(orderId);

        if (!data.success) {
          throw new Error(data.message || "Unable to fetch order.");
        }

        setOrder(data.order || data.data);
      } catch (err) {
        setError(
          err.response?.data?.message ||
            err.message ||
            "Unable to load your order details."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  const orderNumber = order?.orderNumber || order?._id;

  const paymentMethod =
    order?.paymentMethod === "COD"
      ? "Cash on Delivery"
      : order?.paymentMethod || "Cash on Delivery";

  if (loading) {
    return (
      <main className="min-h-screen bg-[#F8FAF5] flex items-center justify-center px-5">
        <div className="text-center">
          <Loader2
            size={42}
            className="animate-spin text-green-600 mx-auto"
          />
          <p className="mt-4 text-gray-600">
            Loading your order details...
          </p>
        </div>
      </main>
    );
  }

  if (error || !order) {
    return (
      <main className="min-h-screen bg-[#F8FAF5] flex items-center justify-center px-5 py-20">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">
            Order Details Unavailable
          </h2>

          <p className="mt-3 text-red-600 text-sm">
            {error || "We couldn't find your order."}
          </p>

          <Link
            href="/my-orders"
            className="inline-flex mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold"
          >
            Go to My Orders
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8FAF5] flex items-center justify-center px-5 py-20">
      <div className="max-w-2xl w-full bg-white rounded-[35px] shadow-xl border border-gray-100 p-8 lg:p-12 text-center">

        {/* Success Icon */}

        <div className="mx-auto w-28 h-28 rounded-full bg-green-100 flex items-center justify-center animate-pulse">
          <CircleCheckBig
            size={70}
            className="text-green-600"
          />
        </div>

        {/* Heading */}

        <h1 className="mt-8 text-4xl lg:text-5xl font-bold text-gray-900">
          Order Confirmed
        </h1>

        <p className="mt-4 text-gray-600 leading-8">
          Thank you for shopping with
          <span className="font-semibold text-green-600">
            {" "}BhajiWala
          </span>.
          Your fresh vegetables are now being prepared.
        </p>

        {/* Order Details */}

        <div className="grid sm:grid-cols-3 gap-4 mt-10">

          {/* Order ID */}

          <div className="rounded-2xl bg-green-50 p-5">
            <Receipt className="text-green-600 mx-auto mb-3" />

            <p className="text-gray-500 text-sm">
              Order ID
            </p>

            <h3 className="font-bold text-gray-900 mt-1 break-all">
              {orderNumber}
            </h3>
          </div>

          {/* Delivery Time */}

          <div className="rounded-2xl bg-green-50 p-5">
            <Truck className="text-green-600 mx-auto mb-3" />

            <p className="text-gray-500 text-sm">
              Delivery Time
            </p>

            <h3 className="font-bold text-gray-900 mt-1">
              {order?.estimatedDelivery || "To be confirmed"}
            </h3>
          </div>

          {/* Payment */}

          <div className="rounded-2xl bg-green-50 p-5">
            <ShoppingBag className="text-green-600 mx-auto mb-3" />

            <p className="text-gray-500 text-sm">
              Payment
            </p>

            <h3 className="font-bold text-gray-900 mt-1">
              {paymentMethod}
            </h3>
          </div>

        </div>

        {/* Order Status */}

        <div className="mt-6 rounded-2xl border border-green-100 p-5 flex justify-between items-center gap-4">
          <span className="text-gray-600 font-medium">
            Order Status
          </span>

          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            {order.orderStatus || "Pending"}
          </span>
        </div>

        {/* Buttons */}

        <div className="mt-10 flex flex-col sm:flex-row gap-4">

          <Link
            href={`/track-order?orderId=${encodeURIComponent(order._id)}`}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-2xl py-4 font-semibold flex items-center justify-center gap-2 transition"
          >
            Track Order
            <ArrowRight size={20} />
          </Link>

          <Link
            href="/products"
            className="flex-1 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-2xl py-4 font-semibold transition"
          >
            Continue Shopping
          </Link>

        </div>

      </div>
    </main>
  );
}
