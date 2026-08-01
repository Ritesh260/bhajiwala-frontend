import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function OfferBanner() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-green-700 via-green-600 to-green-500">

          {/* Background Circles */}

          <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-white/10 rounded-full"></div>

          <div className="relative z-10 grid lg:grid-cols-2 items-center gap-10 px-10 lg:px-16 py-14">

            {/* Left */}

            <div>

              <span className="bg-orange-500 text-white px-5 py-2 rounded-full font-semibold inline-block">
                🔥 Limited Time Offer
              </span>

              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-6 leading-tight">
                Fresh Vegetables
                <br />
                Up To
                <span className="text-yellow-300"> 30% OFF</span>
              </h2>

              <p className="text-green-100 mt-5 text-lg max-w-lg">
                Get fresh vegetables at amazing prices.
                Order today and enjoy healthy food delivered to your doorstep.
              </p>

              <Link
                href="/products"
                className="mt-8 inline-flex items-center gap-3 bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition"
              >
                Shop Now
                <ArrowRight size={18} />
              </Link>

            </div>

            {/* Right */}

            <div className="flex justify-center">

              <div className="w-72 h-72 rounded-full bg-white/10 backdrop-blur-lg flex items-center justify-center border border-white/20">

                {/* Replace later with PNG */}

                <div className="text-center">

                  <h1 className="text-7xl">
                    🥬🥕🍅
                  </h1>

                  <p className="text-white mt-4 text-xl font-semibold">
                    Fresh Offer
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}