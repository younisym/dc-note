import HeroSection        from "@/components/home/HeroSection";
import CategoriesSection  from "@/components/home/CategoriesSection";
import WhyDCNote          from "@/components/home/WhyDCNote";
import FeaturedProducts   from "@/components/home/FeaturedProducts";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <WhyDCNote />
      <FeaturedProducts />
      <TestimonialsSection />
    </>
  );
}
