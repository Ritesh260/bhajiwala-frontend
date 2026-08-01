import Link from "next/link";
import {
  MessageCircle,
  PhoneCall,
  Truck,
  Leaf,
  ShieldCheck,
  ShoppingBasket,
} from "lucide-react";

export default function OrderCTASection() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-5">

        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-green-700 via-green-600 to-green-500 p-8 sm:p-12 lg:p-16">

          {/* Background Shapes */}

          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>

          <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>


          <div className="relative grid lg:grid-cols-2 gap-12 items-center">


            {/* Left Content */}

            <div>

              <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md text-white px-5 py-2 rounded-full">

                <ShoppingBasket size={18} />

                Fresh Vegetables Delivered

              </span>


              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mt-8">

                Ready To Fill
                <br />

                Your Basket?

              </h2>


              <p className="text-green-100 text-lg leading-8 mt-6 max-w-xl">

                Choose your favourite vegetables and groceries from our fresh
                categories. Order now and get quality products delivered at
                your doorstep.

              </p>


              {/* Features */}

              <div className="grid sm:grid-cols-3 gap-5 mt-10">


                <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-md">

                  <Truck className="text-white mb-3" />

                  <h4 className="text-white font-semibold">
                    Fast Delivery
                  </h4>

                </div>


                <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-md">

                  <Leaf className="text-white mb-3" />

                  <h4 className="text-white font-semibold">
                    Fresh Stock
                  </h4>

                </div>


                <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-md">

                  <ShieldCheck className="text-white mb-3" />

                  <h4 className="text-white font-semibold">
                    Trusted Quality
                  </h4>

                </div>


              </div>


            </div>



            {/* Right Card */}

            <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-2xl">


              <h3 className="text-3xl font-bold text-gray-900">
                Start Shopping Today
              </h3>


              <p className="text-gray-500 mt-3 leading-7">
                Order fresh vegetables directly from BhajiWala.
              </p>


              <div className="space-y-4 mt-8">


                <Link
                  href="https://wa.me/919876543210"
                  target="_blank"
                  className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white rounded-2xl py-4 font-semibold transition"
                >

                  <MessageCircle size={22} />

                  Order on WhatsApp

                </Link>



                <a
                  href="tel:+919876543210"
                  className="w-full flex items-center justify-center gap-3 border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white rounded-2xl py-4 font-semibold transition"
                >

                  <PhoneCall size={22} />

                  Call Shop

                </a>



                <Link
                  href="/products"
                  className="w-full flex items-center justify-center gap-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-2xl py-4 font-semibold transition"
                >

                  <ShoppingBasket size={22} />

                  Browse Products

                </Link>


              </div>


              {/* Stats */}

              <div className="border-t border-gray-200 mt-8 pt-8 grid grid-cols-3 text-center">


                <div>

                  <h4 className="text-2xl font-bold text-green-600">
                    500+
                  </h4>

                  <p className="text-sm text-gray-500">
                    Customers
                  </p>

                </div>


                <div>

                  <h4 className="text-2xl font-bold text-green-600">
                    100+
                  </h4>

                  <p className="text-sm text-gray-500">
                    Products
                  </p>

                </div>


                <div>

                  <h4 className="text-2xl font-bold text-green-600">
                    Daily
                  </h4>

                  <p className="text-sm text-gray-500">
                    Fresh
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