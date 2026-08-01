import HeroSection from "./sections/HeroSection";
import CategoriesSection from "./sections/CategoriesSection";
import FeaturedProducts from "./sections/FeaturedProducts";
import OfferBanner from "./sections/OfferBanner";
import WhyChooseUs from "./sections/WhyChooseUs";
import Testimonials from "./sections/Testimonials";
import Newsletter from "./sections/Newsletter";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <OfferBanner />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
    </>
  );
}