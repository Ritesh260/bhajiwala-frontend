
"use client";

import {
  Wallet,
  CircleCheck,
  ShieldCheck,
} from "lucide-react";

export default function PaymentMethod() {
  return (
    <section className="bg-white rounded-[30px] shadow-sm border border-gray-100 p-6 lg:p-8">
      <div className="mb-8">
        <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
          Payment
        </span>

        <h2 className="mt-4 text-3xl font-bold text-gray-900">
          Choose Payment Method
        </h2>

        <p className="mt-2 text-gray-500">
          Pay when your order arrives at your doorstep.
        </p>
      </div>

      <div className="w-full flex items-center justify-between rounded-2xl border-2 border-green-600 bg-green-50 p-5">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-green-600 text-white flex items-center justify-center">
            <Wallet size={25} />
          </div>

          <div>
            <h3 className="font-bold text-gray-900">
              Cash On Delivery
            </h3>

            <p className="text-sm text-gray-500">
              Pay when your order arrives
            </p>
          </div>
        </div>

        <CircleCheck size={28} className="text-green-600" />
      </div>

      <div className="mt-8 rounded-2xl bg-green-50 border border-green-100 p-5">
        <h4 className="flex items-center gap-2 font-semibold text-green-700">
          <ShieldCheck size={19} />
          Safe & Secure Order
        </h4>

        <p className="text-sm text-gray-600 mt-2 leading-6">
          You don't need to pay online. Pay the delivery person
          when your fresh vegetables arrive.
        </p>
      </div>
    </section>
  );
}
