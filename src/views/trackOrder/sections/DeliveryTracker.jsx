"use client";

import {
  Store,
  House,
  Bike,
  Clock3,
  MapPin,
} from "lucide-react";

export default function DeliveryTracker() {
  return (
    <section className="bg-white rounded-[32px] border border-gray-100 shadow-sm p-6 lg:p-8">

      {/* Heading */}

      <div className="flex items-center justify-between flex-wrap gap-4">

        <div>

          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            Live Delivery
          </span>

          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            Your Order Is On The Way
          </h2>

        </div>

        <div className="bg-green-50 px-5 py-3 rounded-2xl">

          <div className="flex items-center gap-2 text-green-700 font-semibold">
            <Clock3 size={18} />
            ETA 18 Minutes
          </div>

        </div>

      </div>

      {/* Map */}

      <div className="relative mt-10 h-[420px] rounded-3xl overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-100 border border-green-100">

        {/* Decorative Roads */}

        <div className="absolute top-20 left-10 w-[85%] border-t-4 border-dashed border-green-300"></div>

        <div className="absolute top-52 left-20 w-[70%] border-t-4 border-dashed border-green-300"></div>

        {/* Shop */}

        <div className="absolute left-10 top-14 flex flex-col items-center">

          <div className="w-16 h-16 rounded-full bg-green-600 text-white flex items-center justify-center shadow-lg">
            <Store size={30} />
          </div>

          <p className="mt-3 font-semibold text-gray-800">
            BhajiWala Store
          </p>

        </div>

        {/* Customer */}

        <div className="absolute right-10 bottom-12 flex flex-col items-center">

          <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg">
            <House size={30} />
          </div>

          <p className="mt-3 font-semibold text-gray-800">
            Your Home
          </p>

        </div>

        {/* Animated Delivery Boy */}

        <div className="absolute top-40 left-0 w-full">

          <div className="animate-[delivery_8s_linear_infinite] absolute">

            <div className="w-14 h-14 rounded-full bg-white shadow-xl border border-green-200 flex items-center justify-center">

              <Bike
                size={28}
                className="text-green-600"
              />

            </div>

          </div>

        </div>

        {/* Location Pin */}

        <div className="absolute left-[55%] top-[58%]">

          <div className="animate-ping absolute">

            <MapPin
              size={34}
              className="text-red-500"
            />

          </div>

          <MapPin
            size={34}
            className="text-red-500 relative"
          />

        </div>

      </div>

    </section>
  );
}