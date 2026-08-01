import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Leafy Vegetables",
    image: "/images/categories/leafy.png",
    products: "24 Products",
    color: "bg-green-100",
  },
  {
    id: 2,
    name: "Root Vegetables",
    image: "/images/categories/root.png",
    products: "18 Products",
    color: "bg-orange-100",
  },
  {
    id: 3,
    name: "Fresh Fruits",
    image: "/images/categories/fruits.png",
    products: "30 Products",
    color: "bg-red-100",
  },
  {
    id: 4,
    name: "Organic",
    image: "/images/categories/organic.png",
    products: "15 Products",
    color: "bg-emerald-100",
  },
];

export default function PopularCategories() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center mb-14">

          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            Popular Categories
          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-gray-900">
            Shop by Category
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600 leading-8">
            Browse our most loved categories and discover fresh vegetables,
            fruits and daily essentials delivered directly to your doorstep.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {categories.map((item) => (

            <Link
              key={item.id}
              href="/products"
              className="group bg-white rounded-3xl border border-gray-200 hover:border-green-500 hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >

              <div className={`${item.color} h-48 flex items-center justify-center`}>

                <Image
                  src={item.image}
                  alt={item.name}
                  width={150}
                  height={150}
                  className="group-hover:scale-110 transition duration-500"
                />

              </div>

              <div className="p-6">

                <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition">
                  {item.name}
                </h3>

                <p className="text-gray-500 mt-2">
                  {item.products}
                </p>

                <div className="mt-6 flex items-center justify-between">

                  <span className="text-green-600 font-semibold">
                    Explore
                  </span>

                  <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center group-hover:translate-x-1 transition">

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