"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getProducts } from "@/api/product_apis";

export default function ProductDetailsPage({ params }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProducts();

        const foundProduct = data?.products?.find(
          (item) => item.slug === params.slug
        );

        setProduct(foundProduct || null);
      } catch (error) {
        console.error("Product fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading product...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">
          Product not found
        </h1>

        <Link
          href="/products"
          className="bg-green-600 text-white px-5 py-3 rounded-xl"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  const image = product.images?.[0];

  return (
    <main className="min-h-screen bg-[#F8FAF5] py-16">

      <div className="max-w-7xl mx-auto px-6">

        <Link
          href="/products"
          className="text-green-600 font-medium"
        >
          ← Back to Products
        </Link>

        <div className="grid md:grid-cols-2 gap-12 mt-10">

          {/* IMAGE */}

          <div className="bg-white rounded-3xl p-10 flex items-center justify-center">

            {image ? (
              <img
                src={image}
                alt={product.name}
                className="w-full max-w-md h-96 object-contain"
              />
            ) : (
              <p>No Image</p>
            )}

          </div>

          {/* DETAILS */}

          <div>

            <p className="text-green-600 font-semibold">
              {product.category?.name}
            </p>

            <h1 className="text-4xl font-bold text-gray-900 mt-3">
              {product.name}
            </h1>

            <p className="text-gray-600 mt-4">
              {product.shortDescription}
            </p>

            <div className="mt-6">

              <span className="text-4xl font-bold">
                ₹
                {product.discountPrice > 0
                  ? product.discountPrice
                  : product.price}
              </span>

              <p className="text-gray-500 mt-2">
                {product.unitValue} {product.unit}
              </p>

            </div>

            {/* VARIANTS */}

            {product.variants?.length > 0 && (
              <div className="mt-8">

                <h3 className="font-bold mb-3">
                  Available Quantities
                </h3>

                <div className="flex flex-wrap gap-3">

                  {product.variants.map((variant) => (
                    <div
                      key={variant._id}
                      className="border border-green-200 bg-green-50 text-green-700 px-4 py-3 rounded-xl"
                    >
                      {variant.unitValue} {variant.unit}
                      {" · "}
                      ₹{variant.price}
                    </div>
                  ))}

                </div>

              </div>
            )}

            {/* DESCRIPTION */}

            {product.description && (
              <div className="mt-8">

                <h3 className="text-xl font-bold">
                  Description
                </h3>

                <p className="text-gray-600 mt-3 leading-7">
                  {product.description}
                </p>

              </div>
            )}

            <button
              className="mt-8 w-full md:w-auto bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-semibold"
            >
              Add to Cart
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}