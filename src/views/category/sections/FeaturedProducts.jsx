import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";

const featuredProducts = [
  {
    id: 1,
    name: "Fresh Tomato",
    slug: "fresh-tomato",
    category: "Vegetables",
    price: 40,
    unit: "1 Kg",
    image: "/images/products/tomato.png",
  },
  {
    id: 2,
    name: "Green Spinach",
    slug: "green-spinach",
    category: "Leafy Vegetables",
    price: 25,
    unit: "1 Bunch",
    image: "/images/products/spinach.png",
  },
  {
    id: 3,
    name: "Fresh Carrot",
    slug: "fresh-carrot",
    category: "Root Vegetables",
    price: 60,
    unit: "1 Kg",
    image: "/images/products/carrot.png",
  },
  {
    id: 4,
    name: "Capsicum",
    slug: "capsicum",
    category: "Vegetables",
    price: 70,
    unit: "500 g",
    image: "/images/products/capsicum.png",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-[#F8FAF5]">

      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-14">

          <div>

            <span className="uppercase tracking-[3px] text-green-600 font-semibold">
              Fresh Picks
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-3">
              Popular Products
            </h2>

            <p className="text-gray-600 mt-4 max-w-xl leading-7">
              Discover our most loved fresh vegetables selected by our
              customers every day.
            </p>

          </div>


          <Link
            href="/products"
            className="flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition"
          >
            View All Products

            <ArrowRight size={20} />

          </Link>

        </div>


        {/* Products */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">

          {featuredProducts.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>


      </div>

    </section>
  );
}