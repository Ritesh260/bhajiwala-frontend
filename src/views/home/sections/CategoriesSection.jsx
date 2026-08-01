import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Leafy",
    image: "/images/categories/leafy.png",
  },
  {
    id: 2,
    name: "Root",
    image: "/images/categories/root.png",
  },
  {
    id: 3,
    name: "Fruits",
    image: "/images/categories/fruits.png",
  },
  {
    id: 4,
    name: "Organic",
    image: "/images/categories/organic.png",
  },
  {
    id: 5,
    name: "Seasonal",
    image: "/images/categories/seasonal.png",
  },
  {
    id: 6,
    name: "Herbs",
    image: "/images/categories/herbs.png",
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="flex items-center justify-between mb-14">

          <div>

            <span className="text-green-600 font-semibold uppercase tracking-wider">
              Categories
            </span>

            <h2 className="text-4xl font-bold text-gray-900 mt-2">
              Shop by Category
            </h2>

          </div>

          <Link
            href="/category"
            className="hidden md:flex items-center gap-2 text-green-600 font-semibold hover:gap-3 transition-all"
          >
            View All

            <ArrowRight size={18} />

          </Link>

        </div>

        {/* Categories */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

          {categories.map((item) => (
            <Link
              href="/category"
              key={item.id}
              className="group"
            >

              <div className="bg-[#F8FAF5] rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

                <div className="w-24 h-24 mx-auto rounded-full bg-white flex items-center justify-center">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-contain group-hover:scale-110 transition"
                  />

                </div>

                <h3 className="text-center mt-6 font-semibold text-gray-800">
                  {item.name}
                </h3>

              </div>

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}