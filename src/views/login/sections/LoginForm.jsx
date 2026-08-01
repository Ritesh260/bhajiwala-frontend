"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Globe,
} from "lucide-react";


export default function LoginForm() {


  const [showPassword, setShowPassword] = useState(false);



  return (

    <div className="w-full max-w-md bg-white rounded-[35px] shadow-xl border border-gray-100 p-8 sm:p-10">



      {/* Heading */}

      <div className="text-center">


        <h1 className="text-3xl font-bold text-gray-900">
          Welcome Back 👋
        </h1>


        <p className="text-gray-500 mt-3">
          Login to your BhajiWala account
        </p>


      </div>





      <form className="mt-8 space-y-5">



        {/* Email */}

        <div className="relative">


          <Mail
            className="absolute left-4 top-4 text-gray-400"
            size={20}
          />


          <input
            type="email"
            placeholder="Email or Mobile Number"
            className="w-full pl-12 pr-5 py-4 rounded-2xl border border-gray-200 outline-none focus:border-green-600 transition"
          />


        </div>






        {/* Password */}

        <div className="relative">


          <Lock
            className="absolute left-4 top-4 text-gray-400"
            size={20}
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






        {/* Options */}

        <div className="flex items-center justify-between text-sm">


          <label className="flex items-center gap-2 text-gray-600">

            <input
              type="checkbox"
              className="accent-green-600"
            />

            Remember me

          </label>



          <Link
            href="/forgot-password"
            className="text-green-600 font-medium"
          >

            Forgot Password?

          </Link>



        </div>






        {/* Button */}

        <button
          className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-semibold transition"
        >

          Sign In

          <ArrowRight size={20}/>

        </button>







        {/* Divider */}

        <div className="flex items-center gap-4 my-6">


          <div className="h-px bg-gray-200 flex-1"></div>


          <span className="text-gray-400 text-sm">
            OR
          </span>


          <div className="h-px bg-gray-200 flex-1"></div>


        </div>







        {/* Google */}

       <button
  type="button"
  className="w-full flex items-center justify-center gap-3 border border-gray-200 py-4 rounded-2xl font-semibold text-gray-700 hover:bg-gray-50 transition"
>

  <Globe size={20}/>

  Continue with Google

</button>







        {/* Signup */}

        <p className="text-center text-gray-500 mt-6">


          Don't have an account?


          <Link
            href="/signup"
            className="text-green-600 font-semibold ml-2"
          >

            Sign Up

          </Link>


        </p>



      </form>



    </div>

  );

}