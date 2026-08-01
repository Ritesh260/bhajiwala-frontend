import HeroSection from "./sections/HeroSection";
import PopularCategories from "./sections/PopularCategories";
import CategoriesGrid from "./sections/CategoriesGrid";
import CategoryBanner from "./sections/CategoryBanner";
import FeaturedProducts from "./sections/FeaturedProducts";
import OrderCTASection from "./sections/OrderCTASection";

export default function CategoriesPage() {
  return (
    <>
      <HeroSection />
      <PopularCategories />
      <CategoriesGrid />
      <CategoryBanner />
      <FeaturedProducts />
      <OrderCTASection />
    </>
  );
}