import HeroSection from "./sections/HeroSection";
import ProductsToolbar from "./sections/ProductsToolbar";
import SidebarFilter from "./sections/SidebarFilter";
import ProductsGrid from "./sections/ProductsGrid";
import PaginationSection from "./sections/PaginationSection";
import OrderCTASection from "./sections/OrderCTASection";

export default function ProductsPage() {
  return (
    <>
      <HeroSection />

      <section className="py-20 bg-[#F8FAF5]">
        <div className="max-w-7xl mx-auto px-6">

          <ProductsToolbar />

          <div className="grid lg:grid-cols-4 gap-8 mt-10">

            <SidebarFilter />

            <div className="lg:col-span-3">

              <ProductsGrid />

              <PaginationSection />

            </div>

          </div>

        </div>
      </section>

      <OrderCTASection />

    </>
  );
}