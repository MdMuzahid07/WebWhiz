import AboutUsSection from "@/components/main/home/AboutUsSection";
import HeroAreaSection from "@/components/main/home/HeroAreaSection";
import PortfolioSection from "@/components/main/home/PortfolioSection";
import ServicesSection from "@/components/main/home/ServicesSection";

export default function page() {
  return (
    <>
      <HeroAreaSection />
      <PortfolioSection />
      <AboutUsSection />
      <ServicesSection />
    </>
  )
};
