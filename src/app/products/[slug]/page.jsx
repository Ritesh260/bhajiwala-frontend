"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { getProductBySlug } from "@/api/product_apis";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!slug) return;

    const fetchProduct = async () => {
      try {
        setLoading(true);

        const data = await getProductBySlug(slug);

        setProduct(data.product);
      } catch (error) {
        console.error("Product detail error:", error);

        setError(
          error?.response?.data?.message ||
            "Failed to load product"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">
          Loading product...
        </p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">
          {error || "Product not found"}
        </p>
      </div>
    );
  }

  const productImage =
    product.images?.find(
      (image) =>
        typeof image === "string" &&
        image.trim() !== ""
    ) || null;

  const price =
    product.discountPrice > 0
      ? product.discountPrice
      : product.price;

  return (
    <main className="min-h-screen bg-[#F8FAF5] py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl p-8 shadow-sm">

          {/* IMAGE */}

          <div className="min-h-[500px] bg-[#F8FAF5] rounded-3xl flex items-center justify-center">

            {productImage ? (
              <Image
                src={productImage}
                alt={product.name}
                width={500}
                height={500}
                className="object-contain"
              />
            ) : (
              <p className="text-gray-500">
                No Image
              </p>
            )}

          </div>

          {/* CONTENT */}

          <div className="flex flex-col justify-center">

            <p className="text-green-600 font-semibold">
              {product.category?.name}
            </p>

            <h1 className="text-4xl font-bold text-gray-900 mt-3">
              {product.name}
            </h1>

            <p className="text-gray-600 mt-5">
              {product.shortDescription}
            </p>

            <div className="mt-6">

              <span className="text-4xl font-bold text-gray-900">
                ₹{price}
              </span>

              <span className="text-gray-500 ml-2">
                / {product.unitValue} {product.unit}
              </span>

            </div>

            {product.discountPrice > 0 && (
              <p className="text-gray-400 line-through mt-2">
                ₹{product.price}
              </p>
            )}

            {/* VARIANTS */}

            {product.variants?.length > 0 && (
              <div className="mt-8">

                <h3 className="font-bold text-lg">
                  Available Quantities
                </h3>

                <div className="flex flex-wrap gap-3 mt-4">

                  {product.variants.map((variant) => (
                    <button
                      key={variant._id}
                      type="button"
                      className="border border-green-200 bg-green-50 text-green-700 px-4 py-3 rounded-xl"
                    >
                      {variant.unitValue} {variant.unit}
                      <br />
                      <span className="font-bold">
                        ₹{variant.price}
                      </span>
                    </button>
                  ))}

                </div>

              </div>
            )}

            {/* STOCK */}

            <p className="mt-6 text-sm">
              {product.stock > 0 ? (
                <span className="text-green-600 font-semibold">
                  In Stock
                </span>
              ) : (
                <span className="text-red-500 font-semibold">
                  Out of Stock
                </span>
              )}
            </p>

            {/* CART */}

            <button
              type="button"
              className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-semibold text-lg transition"
            >
              Add to Cart
            </button>

          </div>

        </div>

        {/* DESCRIPTION */}

        {product.description && (
          <div className="mt-10 bg-white rounded-3xl p-8">
            <h2 className="text-2xl font-bold">
              About {product.name}
            </h2>

            <p className="text-gray-600 mt-4 leading-7">
              {product.description}
            </p>
          </div>
        )}

      </div>
    </main>
  );
}