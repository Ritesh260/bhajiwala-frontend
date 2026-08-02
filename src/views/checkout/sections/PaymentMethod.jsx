"use client";

import { useState } from "react";
import {
  Wallet,
  Smartphone,
  CreditCard,
  Landmark,
  CircleCheck,
} from "lucide-react";

const paymentOptions = [
  {
    id: "cod",
    title: "Cash On Delivery",
    subtitle: "Pay when your order arrives",
    icon: Wallet,
  },
  {
    id: "upi",
    title: "UPI Payment",
    subtitle: "PhonePe • Google Pay • Paytm",
    icon: Smartphone,
  },
  {
    id: "card",
    title: "Credit / Debit Card",
    subtitle: "Visa • Mastercard • RuPay",
    icon: CreditCard,
  },
  {
    id: "netbanking",
    title: "Net Banking",
    subtitle: "All major Indian banks",
    icon: Landmark,
  },
];

export default function PaymentMethod() {
  const [selected, setSelected] = useState("cod");

  return (
    <section className="bg-white rounded-[30px] shadow-sm border border-gray-100 p-6 lg:p-8">

      {/* Heading */}

      <div className="mb-8">

        <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
          Payment
        </span>

        <h2 className="mt-4 text-3xl font-bold text-gray-900">
          Choose Payment Method
        </h2>

        <p className="mt-2 text-gray-500">
          Select your preferred payment option.
        </p>

      </div>

      {/* Payment Cards */}

      <div className="space-y-4">

        {paymentOptions.map((item) => {

          const Icon = item.icon;

          return (

            <button
              key={item.id}
              type="button"
              onClick={() => setSelected(item.id)}
              className={`w-full flex items-center justify-between rounded-2xl border-2 p-5 transition duration-300 ${
                selected === item.id
                  ? "border-green-600 bg-green-50"
                  : "border-gray-200 hover:border-green-400"
              }`}
            >

              <div className="flex items-center gap-4">

                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                    selected === item.id
                      ? "bg-green-600 text-white"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  <Icon size={24} />
                </div>

                <div className="text-left">

                  <h3 className="font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {item.subtitle}
                  </p>

                </div>

              </div>

              {selected === item.id ? (
                <CircleCheck
                  size={28}
                  className="text-green-600"
                />
              ) : (
                <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>
              )}

            </button>

          );
        })}

      </div>

      {/* Secure Payment Notice */}

      <div className="mt-8 rounded-2xl bg-green-50 border border-green-100 p-5">

        <h4 className="font-semibold text-green-700">
          🔒 Secure Checkout
        </h4>

        <p className="text-sm text-gray-600 mt-2 leading-6">
          Your payment information is encrypted and protected.
          We never store your card details.
        </p>

      </div>

    </section>
  );
}