"use client";

import {
  Leaf,
  Carrot,
  Apple,
  Sprout,
  Salad,
} from "lucide-react";

export default function SplashScreen() {
  return (
    <main className="fixed inset-0 z-[9999] bg-white flex items-center justify-center overflow-hidden">

      {/* Background Decorations */}

      <Carrot
        size={80}
        className="absolute top-12 left-12 text-green-100 rotate-12"
      />

      <Apple
        size={70}
        className="absolute top-20 right-16 text-green-100 -rotate-12"
      />

      <Sprout
        size={90}
        className="absolute bottom-16 left-20 text-green-100 rotate-6"
      />

      <Salad
        size={75}
        className="absolute bottom-16 right-20 text-green-100 -rotate-12"
      />

      {/* Soft Background Circle */}

      <div className="absolute w-96 h-96 rounded-full bg-green-50 blur-3xl"></div>

      {/* Content */}

      <div className="relative z-10 flex flex-col items-center px-6 text-center">

        {/* Logo */}

        <div className="relative">

          <div className="absolute inset-0 rounded-full bg-green-200 blur-xl opacity-60 animate-pulse"></div>

          <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 shadow-2xl flex items-center justify-center">

            <Leaf
              size={60}
              className="text-white"
            />

          </div>

        </div>

        {/* Brand */}

        <h1 className="mt-10 text-5xl md:text-6xl font-extrabold tracking-tight">

          <span className="text-gray-900">
            Bhaji
          </span>

          <span className="text-green-600">
            Wala
          </span>

        </h1>

        {/* Tagline */}

        <p className="mt-4 text-gray-500 text-lg max-w-md leading-8">
          Fresh vegetables delivered directly
          from the farm to your doorstep.
        </p>

        {/* Loading Bar */}

        <div className="mt-12 w-72 h-3 rounded-full bg-green-100 overflow-hidden">

          <div className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-500 animate-loading"></div>

        </div>

        {/* Loading Text */}

        <p className="mt-5 text-sm font-semibold tracking-[5px] text-green-600 uppercase">
          Loading...
        </p>

        {/* Bottom Text */}

        <p className="mt-10 text-xs text-gray-400">
          Powered by BhajiWala
        </p>

      </div>

    </main>
  );
}