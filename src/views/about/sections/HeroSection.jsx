import Link from "next/link";
import { ChevronRight, Leaf, ShoppingBag } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAF5] pt-24 pb-16 sm:pt-28 sm:pb-20">
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-green-100 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-emerald-100 rounded-full blur-3xl opacity-70"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="flex items-center gap-2 text-gray-500 mb-6">
              <Link href="/" className="hover:text-green-700 transition">
                Home
              </Link>

              <ChevronRight size={16} />

              <span className="text-gray-700 font-medium">About Us</span>
            </div>

            <span className="inline-flex items-center gap-2 bg-white text-green-700 px-5 py-2 rounded-full font-semibold shadow-sm border border-green-100">
              <Leaf size={18} />
              Fresh • Healthy • Trusted
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mt-8">
              About
              <span className="block text-green-600">BhajiWala</span>
            </h1>

            <p className="text-gray-600 text-lg leading-8 mt-6 max-w-xl">
              BhajiWala is your trusted local vegetable store committed to
              delivering farm-fresh vegetables, fruits and groceries directly
              to your doorstep with quality, affordability and care.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-10">
              <Link
                href="/products"
                className="w-full sm:w-auto bg-green-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-3 hover:bg-green-700 transition shadow-sm"
              >
                <ShoppingBag size={20} />
                Shop Now
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto border-2 border-green-600 text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-green-600 hover:text-white transition text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="w-full max-w-[420px] aspect-square rounded-full bg-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] border border-green-100 flex items-center justify-center p-6">
              <div className="text-center px-6 py-10">
                <div className="text-6xl sm:text-7xl">🥬🥕🍅🥦</div>
                <p className="text-gray-800 text-lg sm:text-xl mt-4 font-semibold">
                  Fresh From Farm
                </p>
              </div>
            </div>

            <div className="hidden md:block absolute top-10 left-0 bg-white rounded-2xl shadow-xl px-6 py-4 border border-gray-100">
              <p className="text-3xl font-bold text-green-600">500+</p>
              <p className="text-gray-600 text-sm">Happy Families</p>
            </div>

            <div className="hidden md:block absolute bottom-10 right-0 bg-white rounded-2xl shadow-xl px-6 py-4 border border-gray-100">
              <p className="text-3xl font-bold text-green-600">100%</p>
              <p className="text-gray-600 text-sm">Farm Fresh</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}