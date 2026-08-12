"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/api/product_apis";

export default function ProductsGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // console.log("🔥 ProductsGrid mounted");

    const fetchProducts = async () => {
      try {
        // console.log(
        //   "🔥 Fetching products from:",
        //   process.env.NEXT_PUBLIC_API_URL
        // );

        setLoading(true);
        setError("");

        const data = await getProducts();

        // console.log("🔥 Products API response:", data);

        setProducts(data.products || []);
      } catch (error) {
        // console.error("🔥 Products fetch error:", error);
        setError(error.message || "Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
        <p className="text-gray-500">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!products.length) {
    return <div className="text-gray-500">No products found.</div>;
  }

  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
        />
      ))}
    </div>
  );
}