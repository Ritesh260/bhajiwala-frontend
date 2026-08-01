import Link from "next/link";
import { ChevronRight, Leaf, ShoppingBag } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-green-700 via-green-600 to-green-500 pt-24 pb-16 sm:pt-28 sm:pb-20">

      {/* Background Shapes */}
      <div className="absolute -top-24 -left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-green-100 mb-6">

              <Link href="/" className="hover:text-white transition">
                Home
              </Link>

              <ChevronRight size={16} />

              <span className="text-white font-medium">
                About Us
              </span>

            </div>

            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2 rounded-full text-white">

              <Leaf size={18} />

              Fresh • Healthy • Trusted

            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mt-8">

              About
              <span className="block text-green-200">
                BhajiWala
              </span>

            </h1>

            <p className="text-green-100 text-lg leading-8 mt-6 max-w-xl">

              BhajiWala is your trusted local vegetable store committed to
              delivering farm-fresh vegetables, fruits and groceries directly
              to your doorstep with quality, affordability and care.

            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-10">

              <Link
                href="/products"
                className="w-full sm:w-auto bg-white text-green-700 px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-3 hover:bg-green-50 transition"
              >
                <ShoppingBag size={20} />
                Shop Now
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-700 transition text-center"
              >
                Contact Us
              </Link>

            </div>

          </div>

          {/* Right */}
          <div className="relative flex justify-center">

            <div className="w-full max-w-112.5 aspect-square rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">

              {/* Replace later with next/image */}
              <div className="text-center px-6 py-10">

                <div className="text-6xl sm:text-7xl">
                  🥬🥕🍅🥦
                </div>

                <p className="text-white text-lg sm:text-xl mt-4 font-semibold">
                  Fresh From Farm
                </p>

              </div>

            </div>

            {/* Floating Cards */}
            <div className="hidden md:block absolute top-10 left-0 bg-white rounded-2xl shadow-xl px-6 py-4">

              <p className="text-3xl font-bold text-green-600">
                500+
              </p>

              <p className="text-gray-600 text-sm">
                Happy Families
              </p>

            </div>

            <div className="hidden md:block absolute bottom-10 right-0 bg-white rounded-2xl shadow-xl px-6 py-4">

              <p className="text-3xl font-bold text-green-600">
                100%
              </p>

              <p className="text-gray-600 text-sm">
                Farm Fresh
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}