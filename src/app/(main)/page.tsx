import AboutUsSection from "@/components/main/home/AboutUsSection";
import ClientReviews from "@/components/main/home/ClientReviews";
import ContactUs from "@/components/main/home/ContactUs";
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
      <ClientReviews />
      <ContactUs />
    </>
  )
};
