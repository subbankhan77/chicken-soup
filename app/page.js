import OrderProvider from "@/components/OrderProvider";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import MenuSection from "@/components/MenuSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";

export default function Home() {
  return (
    <OrderProvider>
      <Navbar />
      <main>
        <Hero />
        <CategorySection />
        <MenuSection />
        <WhyChooseUs />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileActionBar />
    </OrderProvider>
  );
}
