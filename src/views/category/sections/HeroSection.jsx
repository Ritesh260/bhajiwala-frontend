import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Grid2X2,
  Leaf,
  Apple,
  Carrot,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0F9D58] via-[#16A34A] to-[#22C55E] pt-32 lg:pt-40 pb-20 lg:pb-28">

      {/* Blur Background */}

      <div className="absolute -top-32 -left-32 w-[380px] h-[380px] bg-white/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-white/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-5">

        {/* Breadcrumb */}

        <div className="flex flex-wrap items-center gap-2 text-green-100 mb-8">

          <Link
            href="/"
            className="hover:text-white transition"
          >
            Home
          </Link>

          <ChevronRight size={16} />

          <span className="text-white font-semibold">
            Categories
          </span>

        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}

          <div>

            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white px-5 py-2 rounded-full">

              <Grid2X2 size={18} />

              Browse Fresh Categories

            </span>

            <h1 className="mt-7 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white">

              Find Every

              <span className="block text-green-100">
                Fresh Category
              </span>

            </h1>

            <p className="mt-6 text-lg leading-8 text-green-100 max-w-xl">

              Explore farm-fresh vegetables, juicy fruits, leafy greens,
              herbs, groceries and many more categories carefully selected
              for your everyday needs.

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <Link
                href="/products"
                className="bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition"
              >
                Shop Now
              </Link>

              <Link
                href="/offers"
                className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-700 transition"
              >
                Today's Offers
              </Link>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-5 mt-14">

              <div>

                <h3 className="text-3xl font-bold text-white">
                  20+
                </h3>

                <p className="text-green-100 mt-1">
                  Categories
                </p>

              </div>

              <div>

                <h3 className="text-3xl font-bold text-white">
                  150+
                </h3>

                <p className="text-green-100 mt-1">
                  Products
                </p>

              </div>

              <div>

                <h3 className="text-3xl font-bold text-white">
                  Daily
                </h3>

                <p className="text-green-100 mt-1">
                  Fresh Stock
                </p>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="relative flex justify-center">

            <div className="relative w-[320px] sm:w-[420px] lg:w-[520px] aspect-square rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">

              <Image
                src="/images/categories/categories-hero.png"
                alt="Categories"
                width={420}
                height={420}
                priority
                className="object-contain drop-shadow-2xl"
              />

            </div>

            {/* Floating Card 1 */}

            <div className="absolute top-4 left-0 bg-white rounded-3xl shadow-xl px-5 py-4 hidden sm:block">

              <Leaf className="text-green-600 mb-2" />

              <p className="font-bold text-gray-900">
                Leafy Greens
              </p>

              <span className="text-sm text-gray-500">
                Fresh Daily
              </span>

            </div>

            {/* Floating Card 2 */}

            <div className="absolute bottom-6 -left-2 bg-white rounded-3xl shadow-xl px-5 py-4 hidden md:block">

              <Apple className="text-red-500 mb-2" />

              <p className="font-bold text-gray-900">
                Seasonal Fruits
              </p>

            </div>

            {/* Floating Card 3 */}

            <div className="absolute top-16 right-0 bg-white rounded-3xl shadow-xl px-5 py-4 hidden lg:block">

              <Carrot className="text-orange-500 mb-2" />

              <p className="font-bold text-gray-900">
                Organic Veggies
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}