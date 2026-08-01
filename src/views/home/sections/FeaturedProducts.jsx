import Link from "next/link";
import { ArrowRight, Heart, ShoppingCart, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Fresh Tomato",
    price: 40,
    oldPrice: 55,
    image: "/images/products/tomato.png",
    unit: "1 Kg",
  },
  {
    id: 2,
    name: "Potato",
    price: 30,
    oldPrice: 40,
    image: "/images/products/potato.png",
    unit: "1 Kg",
  },
  {
    id: 3,
    name: "Onion",
    price: 35,
    oldPrice: 45,
    image: "/images/products/onion.png",
    unit: "1 Kg",
  },
  {
    id: 4,
    name: "Capsicum",
    price: 60,
    oldPrice: 75,
    image: "/images/products/capsicum.png",
    unit: "500 g",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-[#F8FAF5]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="flex items-center justify-between mb-14">

          <div>
            <span className="text-green-600 uppercase tracking-widest font-semibold">
              Fresh Picks
            </span>

            <h2 className="text-4xl font-bold mt-2 text-gray-900">
              Featured Products
            </h2>
          </div>

          <Link
            href="/products"
            className="hidden md:flex items-center gap-2 text-green-600 font-semibold hover:gap-3 transition-all"
          >
            View All
            <ArrowRight size={18} />
          </Link>

        </div>

        {/* Products */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >

              <button className="absolute"></button>

              <div className="flex justify-end">

                <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-green-600 hover:text-white transition flex items-center justify-center">

                  <Heart size={18} />

                </button>

              </div>

              <div className="h-44 flex items-center justify-center">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-36 h-36 object-contain group-hover:scale-110 transition duration-300"
                />

              </div>

              <div className="flex items-center gap-1 text-yellow-500 mt-3">

                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />

              </div>

              <h3 className="font-bold text-xl mt-3 text-gray-900">
                {item.name}
              </h3>

              <p className="text-gray-500 mt-1">
                {item.unit}
              </p>

              <div className="flex items-center gap-3 mt-4">

                <span className="text-2xl font-bold text-green-600">
                  ₹{item.price}
                </span>

                <span className="line-through text-gray-400">
                  ₹{item.oldPrice}
                </span>

              </div>

              <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-2xl flex justify-center items-center gap-2 transition">

                <ShoppingCart size={18} />

                Add to Cart

              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}