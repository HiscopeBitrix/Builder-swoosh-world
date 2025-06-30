import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AdvantagesSection from "@/components/AdvantagesSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* 1. Hero блок с динамическим контентом */}
        <Hero />

        {/* 2. Преимущества работы с нами */}
        <AdvantagesSection />

        {/* 3. О компании */}
        <AboutSection />

        {/* 4. Наши услуги */}
        <ServicesSection />

        {/* 5. Портфолио */}
        <PortfolioSection />

        {/* 6. Контакты с формой (без карты) */}
        <ContactsSection />
      </main>

      {/* 7. Футер */}
      <Footer />
    </div>
  );
}
