
"use client";

import { useCallback, useEffect, useState } from "react";

import DeliveryAddress from "./sections/DeliveryAddress";
import PaymentMethod from "./sections/PaymentMethod";
import OrderSummary from "./sections/OrderSummary";
import PlaceOrder from "./sections/PlaceOrder";

import { getCheckoutSummary } from "@/api/checkout_apis";

export default function CheckoutPage() {
  const [selectedAddress, setSelectedAddress] = useState(null);

  const [couponCode, setCouponCode] = useState("");
  const [checkoutSummary, setCheckoutSummary] = useState(null);

  const [summaryLoading, setSummaryLoading] = useState(false);
  const [summaryError, setSummaryError] = useState("");

  // ==========================================
  // FETCH CHECKOUT SUMMARY
  // ==========================================

  const fetchCheckoutSummary = useCallback(async () => {
    if (!selectedAddress?._id) {
      setCheckoutSummary(null);
      setSummaryError("");
      return;
    }

    try {
      setSummaryLoading(true);
      setSummaryError("");

      const data = await getCheckoutSummary({
        addressId: selectedAddress._id,
        couponCode: couponCode || "",
      });

      if (data.success) {
        setCheckoutSummary(data.summary);
      } else {
        setCheckoutSummary(null);
        setSummaryError(
          data.message || "Unable to calculate checkout."
        );
      }
    } catch (error) {
      setCheckoutSummary(null);

      setSummaryError(
        error.response?.data?.message ||
          "Unable to load checkout summary. Please try again."
      );
    } finally {
      setSummaryLoading(false);
    }
  }, [selectedAddress, couponCode]);

  useEffect(() => {
    fetchCheckoutSummary();
  }, [fetchCheckoutSummary]);

  // ==========================================
  // ADDRESS SELECTION
  // ==========================================

  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
  };

  // ==========================================
  // COUPON
  // ==========================================

  const handleApplyCoupon = (code) => {
    setCouponCode(code.trim().toUpperCase());
  };

  const handleRemoveCoupon = () => {
    setCouponCode("");
  };

  return (
    <main className="min-h-screen bg-[#F8FAF5] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-5">

        {/* PAGE HEADING */}

        <div className="mb-12">
          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            Secure Checkout
          </span>

          <h1 className="mt-5 text-4xl lg:text-5xl font-bold text-gray-900">
            Complete Your Order
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl">
            Fill in your delivery details, choose your preferred payment
            method, and place your order with confidence.
          </p>
        </div>

        {/* CHECKOUT CONTENT */}

        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT SECTION */}

          <div className="lg:col-span-2 space-y-8">

            <DeliveryAddress
              selectedAddress={selectedAddress}
              onAddressSelect={handleAddressSelect}
            />

            <PaymentMethod />

          </div>

          {/* RIGHT SECTION */}

          <div className="space-y-6">

            <OrderSummary
              summary={checkoutSummary}
              loading={summaryLoading}
              error={summaryError}
              appliedCoupon={couponCode}
              onApplyCoupon={handleApplyCoupon}
              onRemoveCoupon={handleRemoveCoupon}
            />

            <PlaceOrder
              selectedAddress={selectedAddress}
              couponCode={couponCode}
              summary={checkoutSummary}
              summaryLoading={summaryLoading}
              onRefreshSummary={fetchCheckoutSummary}
            />

          </div>

        </div>
      </div>
    </main>
  );
}
