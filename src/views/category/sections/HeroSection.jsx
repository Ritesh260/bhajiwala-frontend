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
    <section className="relative overflow-hidden bg-[#F8FAF5] pt-32 lg:pt-40 pb-20 lg:pb-28">
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-green-100 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-emerald-100 rounded-full blur-3xl opacity-70"></div>

      <div className="relative max-w-7xl mx-auto px-5">
        <div className="flex flex-wrap items-center gap-2 text-gray-500 mb-8">
          <Link href="/" className="hover:text-green-700 transition">
            Home
          </Link>

          <ChevronRight size={16} />

          <span className="text-gray-700 font-medium">Categories</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-white text-green-700 px-5 py-2 rounded-full font-semibold shadow-sm border border-green-100">
              <Grid2X2 size={18} />
              Browse Fresh Categories
            </span>

            <h1 className="mt-7 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900">
              Find Every
              <span className="block text-green-600">Fresh Category</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-xl">
              Explore farm-fresh vegetables, juicy fruits, leafy greens,
              herbs, groceries and many more categories carefully selected
              for your everyday needs.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <Link
                href="/products"
                className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition shadow-sm"
              >
                Shop Now
              </Link>

              <Link
                href="/offers"
                className="border-2 border-green-600 text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-green-600 hover:text-white transition"
              >
                Today&apos;s Offers
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-14">
              <div className="rounded-2xl bg-white p-4 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900">20+</h3>
                <p className="text-sm text-gray-500 mt-1">Categories</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900">150+</h3>
                <p className="text-sm text-gray-500 mt-1">Products</p>
              </div>
              <div className="rounded-2xl bg-white p-4 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900">Daily</h3>
                <p className="text-sm text-gray-500 mt-1">Fresh Stock</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="">
              <Image 
              className="relative w-[320px] sm:w-[420px] lg:w-[520px] aspect-square rounded-full  flex items-center justify-center p-6"
                src="/images/category/category.png"
                alt="Categories"
                width={420}
                height={420}
                priority
                // className="object-contain drop-shadow-2xl"
              />
            </div>

            {/* <div className="absolute top-4 left-0 bg-white rounded-3xl shadow-xl px-5 py-4 hidden sm:block border border-gray-100">
              <Leaf className="text-green-600 mb-2" />
              <p className="font-bold text-gray-900">Leafy Greens</p>
              <span className="text-sm text-gray-500">Fresh Daily</span>
            </div>

            <div className="absolute bottom-6 -left-2 bg-white rounded-3xl shadow-xl px-5 py-4 hidden md:block border border-gray-100">
              <Apple className="text-red-500 mb-2" />
              <p className="font-bold text-gray-900">Seasonal Fruits</p>
            </div>

            <div className="absolute top-16 right-0 bg-white rounded-3xl shadow-xl px-5 py-4 hidden lg:block border border-gray-100">
              <Carrot className="text-orange-500 mb-2" />
              <p className="font-bold text-gray-900">Organic Veggies</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}