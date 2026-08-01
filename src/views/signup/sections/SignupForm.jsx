"use client";

import { useState } from "react";
import Link from "next/link";
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";


export default function SignupForm() {


  const [showPassword,setShowPassword] = useState(false);



  return (

    <div className="w-full max-w-lg bg-white rounded-[35px] shadow-xl border border-gray-100 p-8 sm:p-10">



      {/* Heading */}

      <div className="text-center">


        <h1 className="text-3xl font-bold text-gray-900">
          Create Account 🌱
        </h1>


        <p className="text-gray-500 mt-3">
          Join BhajiWala and enjoy fresh delivery
        </p>


      </div>





      <form className="mt-8 space-y-5">



        {/* Name */}

        <div className="relative">


          <User
            size={20}
            className="absolute left-4 top-4 text-gray-400"
          />


          <input
            type="text"
            placeholder="Full Name"
            className="w-full pl-12 pr-5 py-4 rounded-2xl border border-gray-200 outline-none focus:border-green-600 transition"
          />


        </div>





        {/* Phone */}

        <div className="relative">


          <Phone
            size={20}
            className="absolute left-4 top-4 text-gray-400"
          />


          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full pl-12 pr-5 py-4 rounded-2xl border border-gray-200 outline-none focus:border-green-600 transition"
          />


        </div>





        {/* Email */}

        <div className="relative">


          <Mail
            size={20}
            className="absolute left-4 top-4 text-gray-400"
          />


          <input
            type="email"
            placeholder="Email Address"
            className="w-full pl-12 pr-5 py-4 rounded-2xl border border-gray-200 outline-none focus:border-green-600 transition"
          />


        </div>







        {/* Password */}

        <div className="relative">


          <Lock
            size={20}
            className="absolute left-4 top-4 text-gray-400"
          />


          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full pl-12 pr-12 py-4 rounded-2xl border border-gray-200 outline-none focus:border-green-600 transition"
          />



          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="absolute right-4 top-4 text-gray-400"
          >

            {
              showPassword
              ?
              <EyeOff size={20}/>
              :
              <Eye size={20}/>
            }


          </button>


        </div>







        {/* Confirm Password */}

        <div className="relative">


          <Lock
            size={20}
            className="absolute left-4 top-4 text-gray-400"
          />


          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full pl-12 pr-5 py-4 rounded-2xl border border-gray-200 outline-none focus:border-green-600 transition"
          />


        </div>







        {/* Terms */}

        <label className="flex items-center gap-2 text-sm text-gray-600">


          <input
            type="checkbox"
            className="accent-green-600"
          />


          I agree with Terms & Conditions


        </label>








        {/* Button */}

        <button
          className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-semibold transition"
        >

          Create Account

          <ArrowRight size={20}/>

        </button>







        {/* Login */}

        <p className="text-center text-gray-500 mt-5">


          Already have an account?


          <Link
            href="/login"
            className="text-green-600 font-semibold ml-2"
          >

            Sign In

          </Link>


        </p>



      </form>



    </div>

  );

}