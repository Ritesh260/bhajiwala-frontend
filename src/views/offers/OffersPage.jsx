import HeroSection from "./section/HeroSection";
import TodayOffers from "./section/TodayOffers";
import DiscountCards from "./section/DiscountCards";
import ComboOffers from "./section/ComboOffers";
import SeasonalOffers from "./section/SeasonalOffers";
import OrderCTASection from "./section/OrderCTASection";


export default function OffersPage() {

  return (
    <>
      <HeroSection />

      <TodayOffers />

      <DiscountCards />

      <ComboOffers />

      <SeasonalOffers />

      <OrderCTASection />
    </>
  );
}