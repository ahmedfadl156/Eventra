import CategoriesSection from "./components/home/CategoriesSection";
import CtaSection from "./components/home/CtaSection";
import FeaturedEvents from "./components/home/FeaturedEvents";
import HeroSection from "./components/home/HeroSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CategoriesSection />
      <FeaturedEvents />
      <CtaSection />
      <Footer />
    </div>
  );
}
