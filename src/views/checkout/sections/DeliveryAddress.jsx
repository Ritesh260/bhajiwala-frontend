"use client";

import { useState } from "react";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Home,
  Building2,
  Landmark,
} from "lucide-react";

export default function AddressForm() {
  const [addressType, setAddressType] = useState("Home");

  return (
    <section className="bg-white rounded-[30px] shadow-sm border border-gray-100 p-6 lg:p-8">

      {/* Heading */}

      <div className="mb-8">

        <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
          Delivery Details
        </span>

        <h2 className="mt-4 text-3xl font-bold text-gray-900">
          Delivery Address
        </h2>

        <p className="mt-2 text-gray-500">
          Please enter your delivery information carefully.
        </p>

      </div>

      {/* Form */}

      <div className="grid md:grid-cols-2 gap-5">

        {/* Full Name */}

        <div className="relative">

          <User
            size={20}
            className="absolute left-4 top-4 text-green-600"
          />

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-200 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-green-600 transition"
          />

        </div>

        {/* Mobile */}

        <div className="relative">

          <Phone
            size={20}
            className="absolute left-4 top-4 text-green-600"
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full border border-gray-200 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-green-600 transition"
          />

        </div>

        {/* Email */}

        <div className="relative md:col-span-2">

          <Mail
            size={20}
            className="absolute left-4 top-4 text-green-600"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-200 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-green-600 transition"
          />

        </div>

        {/* Address */}

        <div className="relative md:col-span-2">

          <MapPin
            size={20}
            className="absolute left-4 top-4 text-green-600"
          />

          <textarea
            rows={4}
            placeholder="House No, Street, Area..."
            className="w-full border border-gray-200 rounded-2xl pl-12 pr-4 pt-4 pb-4 outline-none resize-none focus:border-green-600 transition"
          />

        </div>

        {/* City */}

        <input
          type="text"
          placeholder="City"
          className="border border-gray-200 rounded-2xl px-4 py-4 outline-none focus:border-green-600 transition"
        />

        {/* Pincode */}

        <input
          type="text"
          placeholder="Pincode"
          className="border border-gray-200 rounded-2xl px-4 py-4 outline-none focus:border-green-600 transition"
        />

        {/* Landmark */}

        <div className="relative md:col-span-2">

          <Landmark
            size={20}
            className="absolute left-4 top-4 text-green-600"
          />

          <input
            type="text"
            placeholder="Nearby Landmark (Optional)"
            className="w-full border border-gray-200 rounded-2xl pl-12 pr-4 py-4 outline-none focus:border-green-600 transition"
          />

        </div>

      </div>

      {/* Address Type */}

      <div className="mt-8">

        <h3 className="font-semibold text-gray-900 mb-4">
          Address Type
        </h3>

        <div className="flex flex-wrap gap-4">

          <button
            type="button"
            onClick={() => setAddressType("Home")}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl transition ${
              addressType === "Home"
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            <Home size={18} />
            Home
          </button>

          <button
            type="button"
            onClick={() => setAddressType("Office")}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl transition ${
              addressType === "Office"
                ? "bg-green-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            <Building2 size={18} />
            Office
          </button>

        </div>

      </div>
    </section>
  );
}