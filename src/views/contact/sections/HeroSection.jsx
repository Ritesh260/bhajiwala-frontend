import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  PhoneCall,
  MapPin,
  Headphones,
} from "lucide-react";


export default function HeroSection() {

  return (

    <section className="relative overflow-hidden bg-[#F8FAF5] pt-32 lg:pt-40 pb-20 lg:pb-28">


      {/* Background */}

      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-green-100 rounded-full blur-3xl opacity-70"></div>

      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-emerald-100 rounded-full blur-3xl opacity-70"></div>



      <div className="relative max-w-7xl mx-auto px-5">


        <div className="grid lg:grid-cols-2 gap-14 items-center">



          {/* Left */}

          <div>


            <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold">

              <Headphones size={18}/>

              Get In Touch

            </span>




            <h1 className="mt-7 text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">


              We're Here

              <span className="block text-green-600">
                To Help You
              </span>


            </h1>




            <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">

              Have questions about products, delivery or orders?
              Contact BhajiWala anytime. Our team is always ready to
              help you with fresh vegetables and quick support.

            </p>




            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">


              <Link
                href="https://wa.me/919876543210"
                target="_blank"
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition"
              >

                <MessageCircle size={20}/>

                WhatsApp Us

              </Link>



              <Link
                href="tel:+919876543210"
                className="flex items-center gap-2 border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white px-8 py-4 rounded-full font-semibold transition"
              >

                <PhoneCall size={20}/>

                Call Now

              </Link>


            </div>



            {/* Quick Info */}

            <div className="grid sm:grid-cols-2 gap-5 mt-12">


              <div className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">


                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">

                  <MapPin className="text-green-600"/>

                </div>


                <div>

                  <p className="text-sm text-gray-500">
                    Visit Store
                  </p>

                  <h4 className="font-bold text-gray-900">
                    Mumbai, India
                  </h4>

                </div>


              </div>




              <div className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100">


                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">

                  <PhoneCall className="text-green-600"/>

                </div>


                <div>

                  <p className="text-sm text-gray-500">
                    Call Support
                  </p>

                  <h4 className="font-bold text-gray-900">
                    24/7 Available
                  </h4>

                </div>


              </div>


            </div>



          </div>





          {/* Right */}

          <div className="relative flex justify-center">


            <div className="relative w-[320px] sm:w-[420px] lg:w-[520px] aspect-square rounded-full bg-green-100 flex items-center justify-center">


              <Image
                src="/images/contact/contact-hero.png"
                alt="Contact BhajiWala"
                width={450}
                height={450}
                priority
                className="object-contain drop-shadow-xl"
              />


            </div>




            {/* Floating Card */}

            <div className="absolute top-8 left-0 hidden sm:block bg-white rounded-3xl shadow-xl p-5">


              <MessageCircle className="text-green-600 mb-2"/>


              <h3 className="font-bold text-gray-900">
                Quick Support
              </h3>


              <p className="text-sm text-gray-500">
                Reply Fast
              </p>


            </div>




            <div className="absolute bottom-10 right-0 hidden md:block bg-white rounded-3xl shadow-xl p-5">


              <ArrowRight className="text-green-600 mb-2"/>


              <h3 className="font-bold text-gray-900">
                Easy Ordering
              </h3>


              <p className="text-sm text-gray-500">
                Hassle Free
              </p>


            </div>



          </div>



        </div>


      </div>


    </section>

  );

}