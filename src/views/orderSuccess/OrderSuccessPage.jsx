import Link from "next/link";
import {
  CircleCheckBig,
  ShoppingBag,
  Truck,
  ArrowRight,
  Receipt,
} from "lucide-react";

export default function OrderSuccessPage() {
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
          Order Confirmed 🎉
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

          <div className="rounded-2xl bg-green-50 p-5">

            <Receipt className="text-green-600 mx-auto mb-3" />

            <p className="text-gray-500 text-sm">
              Order ID
            </p>

            <h3 className="font-bold text-gray-900 mt-1">
              #BW10458
            </h3>

          </div>

          <div className="rounded-2xl bg-green-50 p-5">

            <Truck className="text-green-600 mx-auto mb-3" />

            <p className="text-gray-500 text-sm">
              Delivery Time
            </p>

            <h3 className="font-bold text-gray-900 mt-1">
              20-30 Min
            </h3>

          </div>

          <div className="rounded-2xl bg-green-50 p-5">

            <ShoppingBag className="text-green-600 mx-auto mb-3" />

            <p className="text-gray-500 text-sm">
              Payment
            </p>

            <h3 className="font-bold text-gray-900 mt-1">
              Cash on Delivery
            </h3>

          </div>

        </div>

        {/* Buttons */}

        <div className="mt-10 flex flex-col sm:flex-row gap-4">

          <Link
            href="/track-order"
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