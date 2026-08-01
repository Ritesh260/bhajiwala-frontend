import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgePercent,
  Clock3,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAF5] pt-32 lg:pt-40 pb-20 lg:pb-28">

      {/* Background */}

      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-green-100 rounded-full blur-3xl opacity-60"></div>

      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-orange-100 rounded-full blur-3xl opacity-60"></div>


      <div className="relative max-w-7xl mx-auto px-5">


        <div className="grid lg:grid-cols-2 gap-12 items-center">


          {/* Left Content */}

          <div>


            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-5 py-2 rounded-full font-semibold">

              <BadgePercent size={20} />

              Special Offers

            </div>



            <h1 className="mt-7 text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">

              Fresh Deals

              <span className="block text-green-600">
                Every Single Day
              </span>

            </h1>



            <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">

              Save more on your daily vegetables and groceries.
              Get amazing discounts, combo offers and special deals
              delivered fresh to your doorstep.

            </p>



            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">


              <Link
                href="/products"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition"
              >

                Shop Offers

                <ArrowRight size={18}/>

              </Link>



              <Link
                href="#offers"
                className="flex items-center gap-2 border-2 border-green-600 text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-green-600 hover:text-white transition"
              >

                View Deals

              </Link>


            </div>



            {/* Stats */}

            <div className="grid grid-cols-3 gap-5 mt-12">


              <div>

                <h3 className="text-3xl font-bold text-green-600">
                  50%
                </h3>

                <p className="text-gray-500 text-sm">
                  Max Discount
                </p>

              </div>



              <div>

                <h3 className="text-3xl font-bold text-green-600">
                  Daily
                </h3>

                <p className="text-gray-500 text-sm">
                  New Offers
                </p>

              </div>



              <div>

                <h3 className="text-3xl font-bold text-green-600">
                  Fast
                </h3>

                <p className="text-gray-500 text-sm">
                  Delivery
                </p>

              </div>


            </div>


          </div>



          {/* Right Image */}

          <div className="relative flex justify-center">


            <div className="relative w-[320px] sm:w-[420px] lg:w-[520px] aspect-square rounded-full bg-green-100 flex items-center justify-center">


              <Image
                src="/images/offers/offers-hero.png"
                alt="Fresh Offers"
                width={450}
                height={450}
                priority
                className="object-contain drop-shadow-xl"
              />


            </div>



            {/* Discount Card */}

            <div className="absolute top-5 left-0 bg-white rounded-3xl shadow-xl p-5 hidden sm:block">


              <Sparkles className="text-orange-500 mb-2"/>


              <h3 className="text-3xl font-bold text-gray-900">
                50%
              </h3>


              <p className="text-gray-500">
                Off Today
              </p>


            </div>




            {/* Timer Card */}

            <div className="absolute bottom-8 right-0 bg-white rounded-3xl shadow-xl p-5 hidden md:block">


              <Clock3 className="text-green-600 mb-2"/>


              <p className="font-bold text-gray-900">
                Limited Time
              </p>


              <span className="text-sm text-gray-500">
                Grab Now
              </span>


            </div>



          </div>


        </div>


      </div>


    </section>
  );
}