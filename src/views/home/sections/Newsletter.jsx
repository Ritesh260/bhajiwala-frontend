import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-24 bg-[#F8FAF5]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="rounded-[40px] bg-gradient-to-r from-green-700 via-green-600 to-green-500 px-10 lg:px-20 py-16">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div>

              <span className="bg-white/20 text-white px-5 py-2 rounded-full inline-block">
                🥬 Fresh Everyday
              </span>

              <h2 className="text-4xl lg:text-5xl font-bold text-white mt-6 leading-tight">
                Ready To Order Fresh Vegetables?
              </h2>

              <p className="text-green-100 mt-5 text-lg max-w-lg">
                Fresh vegetables delivered directly from our shop to your doorstep.
                Fast delivery, premium quality and affordable prices.
              </p>

            </div>

            <div className="flex flex-wrap lg:justify-end gap-5">

              <Link
                href="https://wa.me/919876543210"
                target="_blank"
                className="bg-white text-green-700 hover:bg-green-50 transition px-8 py-4 rounded-full font-semibold flex items-center gap-3"
              >
                <PhoneCall size={20}/>
                Order on WhatsApp
              </Link>

              <Link
                href="/products"
                className="border border-white text-white hover:bg-white hover:text-green-700 transition px-8 py-4 rounded-full font-semibold flex items-center gap-3"
              >
                Browse Products
                <ArrowRight size={18}/>
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}