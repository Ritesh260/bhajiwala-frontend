"use client";

import {
  User,
  Phone,
  Mail,
  MessageSquare,
  Send,
} from "lucide-react";


export default function ContactForm() {


  return (

    <section className="py-24 bg-[#F8FAF5]">


      <div className="max-w-7xl mx-auto px-5">


        <div className="grid lg:grid-cols-2 gap-12 items-center">



          {/* Left Content */}

          <div>


            <span className="text-green-600 uppercase tracking-[3px] font-semibold">
              Contact Form
            </span>



            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">

              Send Us A

              <span className="block text-green-600">
                Message
              </span>

            </h2>



            <p className="mt-6 text-gray-600 leading-8 max-w-lg">

              Have any questions about products, delivery or bulk orders?
              Fill the form and our team will contact you shortly.

            </p>



            <div className="mt-10 space-y-5">


              <div className="flex items-center gap-4">


                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">

                  <Phone className="text-green-600"/>

                </div>


                <div>

                  <p className="text-gray-500 text-sm">
                    Call Support
                  </p>

                  <h4 className="font-bold text-gray-900">
                    +91 9839621748
                  </h4>

                </div>


              </div>




              <div className="flex items-center gap-4">


                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">

                  <Mail className="text-green-600"/>

                </div>


                <div>

                  <p className="text-gray-500 text-sm">
                    Email
                  </p>

                  <h4 className="font-bold text-gray-900">
                    support@bhajiwala.com
                  </h4>

                </div>


              </div>



            </div>



          </div>





          {/* Form */}

          <div className="bg-white rounded-[35px] shadow-xl p-7 sm:p-10 border border-gray-100">


            <form className="space-y-5">



              {/* Name */}

              <div className="relative">


                <User
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />


                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full pl-12 pr-5 py-4 rounded-2xl border border-gray-200 outline-none focus:border-green-600 transition"
                />


              </div>





              {/* Phone */}

              <div className="relative">


                <Phone
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />


                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full pl-12 pr-5 py-4 rounded-2xl border border-gray-200 outline-none focus:border-green-600 transition"
                />


              </div>






              {/* Email */}

              <div className="relative">


                <Mail
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />


                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-12 pr-5 py-4 rounded-2xl border border-gray-200 outline-none focus:border-green-600 transition"
                />


              </div>







              {/* Message */}

              <div className="relative">


                <MessageSquare
                  className="absolute left-4 top-4 text-gray-400"
                  size={20}
                />


                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full pl-12 pr-5 py-4 rounded-2xl border border-gray-200 outline-none focus:border-green-600 transition resize-none"
                />


              </div>







              {/* Button */}

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-semibold transition"
              >

                Send Message

                <Send size={20}/>

              </button>



            </form>


          </div>



        </div>


      </div>


    </section>

  );

}