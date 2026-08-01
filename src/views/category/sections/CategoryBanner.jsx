import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Truck, Leaf } from "lucide-react";

export default function CategoryBanner() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-5">

        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-green-700 via-green-600 to-green-500">

          {/* Background Blur */}

          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>

          <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>

          <div className="relative grid lg:grid-cols-2 gap-12 items-center p-10 lg:p-16">

            {/* Left */}

            <div>

              <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white px-5 py-2 rounded-full">

                <Leaf size={18} />

                Farm Fresh Everyday

              </span>

              <h2 className="mt-8 text-4xl lg:text-6xl font-extrabold text-white leading-tight">

                Fresh From Farm
                <br />
                Straight To Your Home

              </h2>

              <p className="mt-6 text-green-100 text-lg leading-8 max-w-xl">

                Every vegetable and fruit is hand-picked from trusted farmers,
                packed with care and delivered fresh to your doorstep.

              </p>

              <div className="flex flex-wrap gap-5 mt-10">

                <Link
                  href="/products"
                  className="bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition flex items-center gap-2"
                >
                  Shop Now
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/offers"
                  className="border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-700 transition"
                >
                  View Offers
                </Link>

              </div>

              {/* Features */}

              <div className="grid sm:grid-cols-3 gap-5 mt-12">

                <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-md">

                  <BadgeCheck className="text-white mb-3" />

                  <h4 className="text-white font-semibold">
                    Premium Quality
                  </h4>

                </div>

                <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-md">

                  <Truck className="text-white mb-3" />

                  <h4 className="text-white font-semibold">
                    Fast Delivery
                  </h4>

                </div>

                <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-md">

                  <Leaf className="text-white mb-3" />

                  <h4 className="text-white font-semibold">
                    100% Fresh
                  </h4>

                </div>

              </div>

            </div>

            {/* Right */}

            <div className="relative flex justify-center">

              <div className="relative w-[320px] sm:w-[420px] lg:w-[500px] aspect-square rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">

                <Image
                  src="/images/categories/banner.png"
                  alt="Fresh Vegetables"
                  width={420}
                  height={420}
                  className="object-contain drop-shadow-2xl"
                  priority
                />

              </div>

              {/* Floating Badge */}

              <div className="absolute top-8 left-0 hidden md:block bg-white rounded-2xl shadow-xl px-6 py-4">

                <h3 className="text-3xl font-bold text-green-600">
                  100%
                </h3>

                <p className="text-gray-500">
                  Organic Fresh
                </p>

              </div>

              <div className="absolute bottom-8 right-0 hidden lg:block bg-white rounded-2xl shadow-xl px-6 py-4">

                <h3 className="text-3xl font-bold text-green-600">
                  Daily
                </h3>

                <p className="text-gray-500">
                  Fresh Arrival
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}