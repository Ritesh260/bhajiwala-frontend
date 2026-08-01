import { Leaf, ShoppingBasket, Truck } from "lucide-react";

export default function StorySection() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div className="relative">

            <div className="bg-[#F8FAF5] rounded-[40px] p-8 shadow-lg">

              {/* Replace with next/image later */}

              <div className="min-h-80 sm:min-h-105 rounded-3xl bg-linear-to-br from-green-100 to-green-200 flex items-center justify-center">

                <div className="text-center px-6 py-8">

                  <div className="text-7xl sm:text-8xl">
                    🥬🥕🍅🥔
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mt-5">
                    Fresh Every Morning
                  </h3>

                </div>

              </div>

            </div>

            <div className="hidden md:block absolute -bottom-8 -right-5 bg-green-600 text-white rounded-3xl px-8 py-6 shadow-xl">

              <h3 className="text-4xl font-bold">
                10+
              </h3>

              <p className="mt-2">
                Years Experience
              </p>

            </div>

          </div>

          {/* Right */}

          <div>

            <span className="uppercase tracking-[4px] text-green-600 font-semibold">
              Our Story
            </span>

            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-5 leading-tight">
              From Local Market
              <br />
              To Every Home
            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-8">
              BhajiWala started with one simple mission —
              to provide fresh, healthy and affordable vegetables
              to every family. Every morning we carefully select
              fresh produce from trusted farmers so our customers
              receive the best quality every day.
            </p>

            <p className="text-gray-600 text-lg leading-8 mt-6">
              We believe healthy food starts with fresh ingredients.
              That's why quality, honesty and customer satisfaction
              are at the heart of everything we do.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mt-12">

              <div className="text-center">

                <div className="w-16 h-16 mx-auto rounded-2xl bg-green-100 text-green-600 flex items-center justify-center">

                  <Leaf />

                </div>

                <h4 className="font-bold mt-4">
                  Farm Fresh
                </h4>

              </div>

              <div className="text-center">

                <div className="w-16 h-16 mx-auto rounded-2xl bg-green-100 text-green-600 flex items-center justify-center">

                  <ShoppingBasket />

                </div>

                <h4 className="font-bold mt-4">
                  Best Quality
                </h4>

              </div>

              <div className="text-center">

                <div className="w-16 h-16 mx-auto rounded-2xl bg-green-100 text-green-600 flex items-center justify-center">

                  <Truck />

                </div>

                <h4 className="font-bold mt-4">
                  Fast Delivery
                </h4>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}