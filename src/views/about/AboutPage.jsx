import HeroSection from "./sections/HeroSection";
import StorySection from "./sections/StorySection";
import MissionVisionSection from "./sections/MissionVisionSection";
import TimelineSection from "./sections/TimelineSection";
import GallerySection from "./sections/GallerySection";
import CTASection from "./sections/CTASection";

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <StorySection />
      <MissionVisionSection />
      <TimelineSection />
      <GallerySection />
      <CTASection />
    </>
  );
}