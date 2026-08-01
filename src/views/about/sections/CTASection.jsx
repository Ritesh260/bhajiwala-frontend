import Link from "next/link";
import { PhoneCall, ShoppingCart } from "lucide-react";

export default function OrderCTASection() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="rounded-[40px] bg-linear-to-r from-green-700 via-green-600 to-green-500 p-12 lg:p-20">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <span className="bg-white/20 text-white px-5 py-2 rounded-full">
                🥬 Fresh Everyday
              </span>

              <h2 className="text-4xl sm:text-5xl font-bold text-white mt-8 leading-tight">
                Ready To Order Fresh Vegetables?
              </h2>

              <p className="text-green-100 text-lg leading-8 mt-6">
                Fresh vegetables directly from our shop to your doorstep.
                Fast delivery, affordable prices and premium quality.
              </p>

            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-5 lg:justify-end">

              <Link
                href="/products"
                className="w-full sm:w-auto bg-white text-green-700 rounded-full px-8 py-4 font-semibold flex items-center justify-center gap-3 hover:bg-green-50 transition"
              >
                <ShoppingCart size={20} />
                Shop Now
              </Link>

              <a
                href="tel:+919876543210"
                className="w-full sm:w-auto border border-white text-white rounded-full px-8 py-4 font-semibold flex items-center justify-center gap-3 hover:bg-white hover:text-green-700 transition"
              >
                <PhoneCall size={20} />
                Call Now
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}