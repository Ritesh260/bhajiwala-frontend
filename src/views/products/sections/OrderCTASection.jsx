import Link from "next/link";
import {
  PhoneCall,
  ShoppingBag,
  MessageCircle,
  Truck,
  ShieldCheck,
  Clock3,
} from "lucide-react";

export default function OrderCTASection() {
  return (
    <section className="py-24 bg-[#F8FAF5]">

      <div className="max-w-7xl mx-auto px-6">

<div className="relative overflow-hidden rounded-[40px] bg-linear-to-r from-green-700 via-green-600 to-green-500 p-10 lg:p-16">

          {/* Background Blur */}

          <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>

          <div className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

            {/* Left */}

            <div>

              <span className="inline-block bg-white/20 backdrop-blur-md text-white px-5 py-2 rounded-full">
                🥬 Fresh Everyday
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white mt-8 leading-tight">
                Can't Find
                <br />
                Your Product?
              </h2>

              <p className="text-green-100 text-lg leading-8 mt-6 max-w-xl">
                No worries! Contact us directly on WhatsApp or give us a call.
                We'll arrange fresh vegetables and groceries for you at the
                best price with quick doorstep delivery.
              </p>

              {/* Features */}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5">

                  <Truck className="text-white mb-3" />

                  <p className="text-white font-semibold">
                    Fast Delivery
                  </p>

                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5">

                  <ShieldCheck className="text-white mb-3" />

                  <p className="text-white font-semibold">
                    Fresh Guarantee
                  </p>

                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5">

                  <Clock3 className="text-white mb-3" />

                  <p className="text-white font-semibold">
                    Daily Fresh Stock
                  </p>

                </div>

              </div>

            </div>

            {/* Right */}

            <div className="bg-white rounded-4xl p-8 sm:p-10 shadow-2xl">

              <h3 className="text-3xl font-bold text-gray-900">
                Order Instantly
              </h3>

              <p className="text-gray-500 mt-3 leading-7">
                Choose your preferred way to place your order.
              </p>

              <div className="space-y-5 mt-10">

                <Link
                  href="https://wa.me/919876543210"
                  target="_blank"
                  className="flex items-center justify-center gap-3 w-full bg-green-600 hover:bg-green-700 text-white rounded-2xl py-4 font-semibold transition"
                >
                  <MessageCircle size={22} />
                  Order on WhatsApp
                </Link>

                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-3 w-full border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white rounded-2xl py-4 font-semibold transition"
                >
                  <PhoneCall size={22} />
                  Call Our Shop
                </a>

                <Link
                  href="/categories"
                  className="flex items-center justify-center gap-3 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-2xl py-4 font-semibold transition"
                >
                  <ShoppingBag size={22} />
                  Browse Categories
                </Link>

              </div>

              <div className="mt-10 pt-8 border-t border-gray-200">

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">

                  <div>

                    <h4 className="text-3xl font-bold text-green-600">
                      500+
                    </h4>

                    <p className="text-gray-500 text-sm">
                      Happy Customers
                    </p>

                  </div>

                  <div>

                    <h4 className="text-3xl font-bold text-green-600">
                      100%
                    </h4>

                    <p className="text-gray-500 text-sm">
                      Fresh Quality
                    </p>

                  </div>

                  <div>

                    <h4 className="text-3xl font-bold text-green-600">
                      24/7
                    </h4>

                    <p className="text-gray-500 text-sm">
                      Support
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}