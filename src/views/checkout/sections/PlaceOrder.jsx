"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";

export default function PlaceOrder() {
  const [agree, setAgree] = useState(true);

  return (
    <section className="bg-white rounded-[30px] shadow-sm border border-gray-100 p-6">

      {/* Security */}

      <div className="flex items-start gap-4">

        <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">
          <ShieldCheck className="text-green-600" />
        </div>

        <div>

          <h3 className="font-bold text-gray-900">
            Secure Checkout
          </h3>

          <p className="text-gray-500 text-sm mt-1 leading-6">
            Your order and payment information are protected with
            secure encryption.
          </p>

        </div>

      </div>

      {/* Terms */}

      <label className="flex items-start gap-3 mt-8 cursor-pointer">

        <input
          type="checkbox"
          checked={agree}
          onChange={() => setAgree(!agree)}
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

      {/* Benefits */}

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
          Safe & Secure Payment
        </div>

      </div>

      {/* Button */}

      <Link
        href="/order-success"
        className={`mt-8 w-full flex items-center justify-center gap-3 rounded-2xl py-4 font-semibold transition ${
          agree
            ? "bg-green-600 hover:bg-green-700 text-white"
            : "bg-gray-300 text-gray-500 pointer-events-none"
        }`}
      >
        Place Order

        <ArrowRight size={20} />
      </Link>

      <p className="text-center text-xs text-gray-400 mt-5">
        By placing your order, you confirm that all information
        provided is accurate.
      </p>

    </section>
  );
}