import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import categories from "@/data/categories";


export default function CategoriesGrid() {
  return (
    <section className="py-24 bg-[#F8FAF5]">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-14">

          <div>

            <span className="text-green-600 uppercase tracking-[3px] font-semibold">
              All Categories
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
              Explore Everything Fresh
            </h2>

          </div>

          <p className="text-gray-600 max-w-xl leading-7">
            Browse vegetables, fruits, herbs and many more categories.
            Every product is carefully selected to ensure freshness,
            quality and affordable prices.
          </p>

        </div>

        {/* Grid */}

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7">

          {categories.map((item) => (

            <Link
              key={item.id}
              href="/products"
              className="group bg-white rounded-[28px] border border-gray-200 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Image */}

              <div
                className={`${item.bg} h-52 flex items-center justify-center overflow-hidden`}
              >

                <Image
                  src={item.image}
                  alt={item.name}
                  width={170}
                  height={170}
                  className="group-hover:scale-110 transition duration-500"
                />

              </div>

              {/* Content */}

              <div className="p-6">

                <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition">
                  {item.name}
                </h3>

                <p className="text-gray-500 mt-2">
                  {item.count} Products
                </p>

                <div className="mt-6 flex items-center justify-between">

                  <span className="font-semibold text-green-600">
                    View Products
                  </span>

                  <div className="w-11 h-11 rounded-full bg-green-600 text-white flex items-center justify-center group-hover:translate-x-1 transition">

                    <ArrowRight size={18} />

                  </div>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}