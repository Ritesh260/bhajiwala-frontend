import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ShoppingBasket, Leaf } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAF5] pt-24 pb-16 sm:pt-28 sm:pb-20">
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-green-100 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-emerald-100 rounded-full blur-3xl opacity-70"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center gap-2 text-gray-500 mb-8">
          <Link href="/" className="hover:text-green-700 transition">
            Home
          </Link>

          <ChevronRight size={16} />

          <span className="text-gray-700 font-medium">Products</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-white text-green-700 px-5 py-2 rounded-full font-semibold shadow-sm border border-green-100">
              <Leaf size={18} />
              100% Farm Fresh Vegetables
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mt-8">
              Fresh Vegetables
              <span className="block text-green-600">Delivered Daily</span>
            </h1>

            <p className="text-gray-600 text-lg leading-8 mt-6 max-w-xl">
              Discover fresh vegetables, seasonal fruits and daily essentials
              sourced directly from trusted farmers with affordable prices and
              quick doorstep delivery.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-10">
              <Link
                href="/categories"
                className="w-full sm:w-auto bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition text-center shadow-sm"
              >
                Browse Categories
              </Link>

              <Link
                href="/offers"
                className="w-full sm:w-auto border-2 border-green-600 text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-green-600 hover:text-white transition text-center"
              >
                View Offers
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14">
              <div className="rounded-2xl bg-white p-4 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900">500+</h3>
                <p className="text-sm text-gray-500 mt-1">Happy Customers</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900">100+</h3>
                <p className="text-sm text-gray-500 mt-1">Fresh Products</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900">24/7</h3>
                <p className="text-sm text-gray-500 mt-1">Support</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
                                <div className="">
                                  <Image 
                                  className="relative w-[320px] sm:w-[420px] lg:w-[520px] aspect-square rounded-full  flex items-center justify-center p-6"
                                    src="/images/producthero.png"
                                    alt="About"
                                    width={420}
                                    height={420}
                                    priority
                                    // className="object-contain drop-shadow-2xl"
                                  />
                                </div>

            <div className="hidden lg:absolute top-6 left-0 bg-white rounded-3xl shadow-xl p-5 border border-gray-100">
              <ShoppingBasket className="text-green-600 mb-2" />
              <h4 className="font-bold text-gray-900">Fresh Stock</h4>
              <p className="text-sm text-gray-500">Arrives Every Morning</p>
            </div>

            <div className="hidden lg:absolute bottom-8 right-0 bg-white rounded-3xl shadow-xl px-6 py-5 border border-gray-100">
              <h3 className="text-4xl font-bold text-green-600">100%</h3>
              <p className="text-gray-500">Organic Quality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}