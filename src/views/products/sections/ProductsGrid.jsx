import ProductCard from "@/components/ProductCard";
import products from "@/data/products";


export default function ProductsGrid() {
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">

      {products.map((product) => (

        <ProductCard
          key={product.id}
          product={product}
        />

      ))}

    </div>
  );
}