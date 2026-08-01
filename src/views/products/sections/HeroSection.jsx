import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ShoppingBasket, Leaf } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-green-700 via-green-600 to-green-500 pt-24 pb-16 sm:pt-28 sm:pb-20">

      {/* Background Blur */}
      <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-105 h-105 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Breadcrumb */}

        <div className="flex flex-wrap items-center gap-2 text-green-100 mb-8">

          <Link
            href="/"
            className="hover:text-white transition"
          >
            Home
          </Link>

          <ChevronRight size={16} />

          <span className="text-white font-medium">
            Products
          </span>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}

          <div>

            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white px-5 py-2 rounded-full">

              <Leaf size={18} />

              100% Farm Fresh Vegetables

            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mt-8">

              Fresh Vegetables

              <span className="block text-green-200">
                Delivered Daily
              </span>

            </h1>

            <p className="text-green-100 text-lg leading-8 mt-6 max-w-xl">

              Discover fresh vegetables, seasonal fruits and daily essentials
              sourced directly from trusted farmers with affordable prices and
              quick doorstep delivery.

            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-10">

              <Link
                href="/categories"
                className="w-full sm:w-auto bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition text-center"
              >
                Browse Categories
              </Link>

              <Link
                href="/offers"
                className="w-full sm:w-auto border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-700 transition text-center"
              >
                View Offers
              </Link>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14">

              <div>

                <h3 className="text-3xl font-bold text-white">
                  500+
                </h3>

                <p className="text-green-100">
                  Happy Customers
                </p>

              </div>

              <div>

                <h3 className="text-3xl font-bold text-white">
                  100+
                </h3>

                <p className="text-green-100">
                  Fresh Products
                </p>

              </div>

              <div>

                <h3 className="text-3xl font-bold text-white">
                  24/7
                </h3>

                <p className="text-green-100">
                  Support
                </p>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="relative flex justify-center">

            <div className="relative w-full max-w-[420px] aspect-square rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">

              <Image
                src="/images/hero/basket.png"
                alt="Fresh Vegetables"
                width={420}
                height={420}
                priority
                className="object-contain drop-shadow-2xl"
              />

            </div>

            {/* Floating Cards */}

            <div className="hidden lg:absolute top-6 left-0 bg-white rounded-3xl shadow-xl p-5">

              <ShoppingBasket className="text-green-600 mb-2" />

              <h4 className="font-bold text-gray-900">
                Fresh Stock
              </h4>

              <p className="text-sm text-gray-500">
                Arrives Every Morning
              </p>

            </div>

            <div className="hidden lg:absolute bottom-8 right-0 bg-white rounded-3xl shadow-xl px-6 py-5">

              <h3 className="text-4xl font-bold text-green-600">
                100%
              </h3>

              <p className="text-gray-500">
                Organic Quality
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}