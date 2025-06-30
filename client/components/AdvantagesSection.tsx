import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  Shield,
  Clock,
  Users,
  Trophy,
} from "lucide-react";

const AdvantagesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const advantages = [
    {
      icon: Shield,
      title: "Надежность",
      description:
        "Используем проверенные технологии и лучшие практики разработки для создания стабильных и безопасных решений",
      image: "🛡️",
    },
    {
      icon: Users,
      title: "Профессионализм",
      description:
        "Команда сертифицированных разработчиков с многолетним опытом работы с платформой 1С-Битрикс",
      image: "👥",
    },
    {
      icon: Clock,
      title: "Поддержка 24/7",
      description:
        "Круглосуточная техническая поддержка и оперативное решение любых вопросов по работе ваших веб-ресурсов",
      image: "🕒",
    },
    {
      icon: Trophy,
      title: "Опыт работы",
      description:
        "Более 8 лет на рынке веб-разработки, 100+ успешно реализованных проектов различной сложности",
      image: "🏆",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % advantages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + advantages.length) % advantages.length,
    );
  };

  return (
    <section className="py-[30px] lg:py-[50px] bg-gradient-to-br from-background via-muted/20 to-background relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-red-500/5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Преимущества работы с нами
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Почему клиенты выбирают нас для реализации своих веб-проектов
          </p>
        </div>

        {/* Desktop view - Grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <Card key={index} className="text-center">
                <CardContent className="p-8 space-y-4">
                  <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-3xl">{advantage.image}</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{advantage.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {advantage.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mobile view - Slider */}
        <div className="lg:hidden">
          <div className="relative">
            <Card>
              <CardContent className="p-8 text-center space-y-6">
                <div className="mx-auto w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-4xl">
                    {advantages[currentSlide].image}
                  </span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">
                    {advantages[currentSlide].title}
                  </h3>
                  <p className="text-muted-foreground">
                    {advantages[currentSlide].description}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-6">
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                className="p-2"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex space-x-2">
                {advantages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? "bg-primary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextSlide}
                className="p-2"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            onClick={() => {
              const contactsSection =
                document.getElementById("contacts-section");
              if (contactsSection) {
                contactsSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Начать сотрудничество
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
