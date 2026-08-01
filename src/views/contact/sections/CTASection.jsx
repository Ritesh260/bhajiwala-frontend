import Link from "next/link";
import {
  MessageCircle,
  PhoneCall,
  ShoppingBasket,
  Leaf,
  Truck,
} from "lucide-react";


export default function CTASection() {


  return (

    <section className="py-24 bg-white">


      <div className="max-w-7xl mx-auto px-5">


        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-green-700 via-green-600 to-green-500 p-8 sm:p-12 lg:p-16">


          {/* Background Design */}

          <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>



          <div className="relative grid lg:grid-cols-2 gap-12 items-center">



            {/* Left */}

            <div>


              <div className="inline-flex items-center gap-2 bg-white/15 text-white px-5 py-2 rounded-full">

                <Leaf size={18}/>

                Fresh Vegetables Everyday

              </div>




              <h2 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">

                Ready To Order

                <span className="block">
                  Fresh Bhaji?
                </span>

              </h2>



              <p className="mt-6 text-green-100 text-lg leading-8 max-w-xl">

                Get fresh vegetables delivered from BhajiWala.
                Contact us today and enjoy quality products
                at your doorstep.

              </p>




              {/* Features */}

              <div className="flex flex-wrap gap-5 mt-10">


                <div className="flex items-center gap-3 bg-white/10 px-5 py-3 rounded-2xl">

                  <Truck className="text-white"/>

                  <span className="text-white font-semibold">
                    Fast Delivery
                  </span>

                </div>



                <div className="flex items-center gap-3 bg-white/10 px-5 py-3 rounded-2xl">

                  <ShoppingBasket className="text-white"/>

                  <span className="text-white font-semibold">
                    Easy Order
                  </span>

                </div>


              </div>


            </div>





            {/* Right */}

            <div className="bg-white rounded-[35px] p-8 sm:p-10 shadow-2xl">


              <h3 className="text-3xl font-bold text-gray-900">

                Place Your Order

              </h3>



              <p className="mt-3 text-gray-500 leading-7">

                Choose your favourite vegetables and contact us now.

              </p>




              <div className="space-y-4 mt-8">



                <Link
                  href="https://wa.me/919876543210"
                  target="_blank"
                  className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-semibold transition"
                >

                  <MessageCircle size={22}/>

                  WhatsApp Order

                </Link>





                <Link
                  href="tel:+919876543210"
                  className="w-full flex items-center justify-center gap-3 border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white py-4 rounded-2xl font-semibold transition"
                >

                  <PhoneCall size={22}/>

                  Call Shop

                </Link>




              </div>



              <div className="mt-8 pt-8 border-t border-gray-200 text-center">


                <p className="text-gray-500">
                  Trusted by local customers ❤️
                </p>


                <h4 className="text-3xl font-bold text-green-600 mt-2">
                  Fresh • Fast • Reliable
                </h4>


              </div>



            </div>



          </div>


        </div>


      </div>


    </section>

  );

}