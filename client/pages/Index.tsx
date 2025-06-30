import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import AdvantagesSection from "@/components/AdvantagesSection";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <AdvantagesSection />
      </main>
    </div>
  );
}
