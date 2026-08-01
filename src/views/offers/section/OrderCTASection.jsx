import Link from "next/link";
import {
  MessageCircle,
  ShoppingCart,
  Truck,
  BadgePercent,
  Leaf,
  Clock3,
} from "lucide-react";


export default function OrderCTASection() {

  return (

    <section className="py-24 bg-white">


      <div className="max-w-7xl mx-auto px-5">


        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-green-700 via-green-600 to-green-500 p-8 sm:p-12 lg:p-16">


          {/* Background */}

          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>

          <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>



          <div className="relative grid lg:grid-cols-2 gap-12 items-center">



            {/* Left */}

            <div>


              <span className="inline-flex items-center gap-2 bg-white/15 text-white px-5 py-2 rounded-full backdrop-blur-md">

                <BadgePercent size={18}/>

                Limited Time Offers

              </span>



              <h2 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">

                Don't Miss

                <br />

                Fresh Deals

              </h2>



              <p className="mt-6 text-green-100 text-lg leading-8 max-w-xl">

                Grab today's exclusive offers before they expire.
                Order fresh vegetables and groceries at the best prices.

              </p>



              {/* Features */}

              <div className="grid sm:grid-cols-3 gap-5 mt-10">


                <div className="bg-white/10 rounded-2xl p-5">

                  <Truck className="text-white mb-3"/>

                  <p className="text-white font-semibold">
                    Fast Delivery
                  </p>

                </div>



                <div className="bg-white/10 rounded-2xl p-5">

                  <Leaf className="text-white mb-3"/>

                  <p className="text-white font-semibold">
                    Fresh Quality
                  </p>

                </div>



                <div className="bg-white/10 rounded-2xl p-5">

                  <Clock3 className="text-white mb-3"/>

                  <p className="text-white font-semibold">
                    Daily Offers
                  </p>

                </div>


              </div>


            </div>




            {/* Right Card */}

            <div className="bg-white rounded-[32px] p-8 sm:p-10 shadow-2xl">


              <h3 className="text-3xl font-bold text-gray-900">

                Start Saving Now

              </h3>



              <p className="mt-3 text-gray-500 leading-7">

                Order your favourite vegetables with amazing discounts.

              </p>



              <div className="space-y-4 mt-8">



                <Link
                  href="/products"
                  className="flex items-center justify-center gap-3 w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-semibold transition"
                >

                  <ShoppingCart size={22}/>

                  Shop Offers

                </Link>




                <Link
                  href="https://wa.me/919876543210"
                  target="_blank"
                  className="flex items-center justify-center gap-3 w-full border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white py-4 rounded-2xl font-semibold transition"
                >

                  <MessageCircle size={22}/>

                  Order On WhatsApp

                </Link>


              </div>




              {/* Stats */}

              <div className="grid grid-cols-3 text-center border-t border-gray-200 mt-8 pt-8">


                <div>

                  <h4 className="text-2xl font-bold text-green-600">
                    50%
                  </h4>

                  <p className="text-sm text-gray-500">
                    Discount
                  </p>

                </div>



                <div>

                  <h4 className="text-2xl font-bold text-green-600">
                    24/7
                  </h4>

                  <p className="text-sm text-gray-500">
                    Support
                  </p>

                </div>



                <div>

                  <h4 className="text-2xl font-bold text-green-600">
                    Fresh
                  </h4>

                  <p className="text-sm text-gray-500">
                    Products
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