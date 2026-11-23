import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShoppingBag, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-[#F8FAF5] pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}

          <div>

            <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold">

              🌿 Fresh Vegetables Everyday

            </span>

            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mt-7">

              Fresh From
              <span className="block text-green-600">
                Farm
              </span>

              To Your Kitchen

            </h1>

            <p className="text-gray-600 text-lg mt-6 leading-8 max-w-xl">

              Fresh vegetables delivered directly from local farms.
              Healthy, affordable and always fresh for your family.

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

             <Link
                href="/products"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition"
              >
                <ShoppingBag size={20} />
                Shop Now
              </Link>

              {/* Browse Products */}
              <Link
                href="/products"
                className="border border-green-600 text-green-700 px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-green-50 transition"
              >
                Browse Products
                <ArrowRight size={18} />
              </Link>

            </div>

            <div className="flex items-center gap-3 mt-10">

              <div className="flex text-yellow-400">

                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />

              </div>

              <span className="text-gray-700">

                Trusted by 500+ Happy Families

              </span>

            </div>

          </div>

          {/* Right */}

          <div className="relative flex justify-center">
                      <div className="">
                        <Image 
                        className="relative w-[320px] sm:w-[420px] lg:w-[520px] aspect-square rounded-full  flex items-center justify-center p-6"
                          src="/images/hero/hero.png"
                          alt="About"
                          width={420}
                          height={420}
                          priority
                          // className="object-contain drop-shadow-2xl"
                        />
                      </div>

            <div className="absolute top-10 -left-8 bg-white shadow-xl rounded-2xl px-6 py-4">

              🌿 Farm Fresh

            </div>

            <div className="absolute bottom-10 -right-8 bg-white shadow-xl rounded-2xl px-6 py-4">

              🚚 Fast Delivery

            </div>

            <div className="absolute bottom-40 -left-10 bg-white shadow-xl rounded-2xl px-6 py-4">

              💰 Best Prices

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}