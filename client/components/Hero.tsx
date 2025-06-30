import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import FormModal from "./FormModal";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dynamicContent = [
    {
      title: "1С-Битрикс",
      subtitle: "Профессиональная разработка",
      description: "Создаем современные веб-решения на платформе 1С-Битрикс",
      features: [
        "Корпоративные сайты с CMS",
        "Интернет-магазины с каталогом",
        "Лендинги для бизнеса",
        "SEO-оптимизация сайтов",
      ],
      color: "#d91935",
      gradient: "from-red-600 to-red-800",
    },
    {
      title: "Bitrix 24",
      subtitle: "Автоматизация бизнеса",
      description: "Внедряем и настраиваем CRM для эффективного управления",
      features: [
        "CRM настройка и внедрение",
        "Автоматизация продаж",
        "Интеграция с внешними системами",
        "Обучение сотрудников",
      ],
      color: "#0bbbef",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "Техподдержка",
      subtitle: "Надежное обслуживание",
      description: "Обеспечиваем стабильную работу ваших веб-ресурсов 24/7",
      features: [
        "Мониторинг 24/7",
        "Быстрые исправления",
        "Регулярные обновления",
        "Резервное копирование",
      ],
      color: "#8b5cf6",
      gradient: "from-purple-600 to-purple-800",
    },
  ];

  const benefits = [
    "Опыт работы более 8 лет",
    "100+ у��пешных проектов",
    "Поддержка 24/7",
    "Гарантия качества",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % dynamicContent.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentContent = dynamicContent[currentSlide];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/10 py-[50px] lg:py-[50px]">
        {/* Decorative Elements */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5"
          style={{ top: "2px" }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-red-500 to-cyan-500"></div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="grid lg:grid-cols-2 gap-12 items-center"
            style={{ margin: "71px 0 98px" }}
          >
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="space-y-2 transition-all duration-700">
                  <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground transition-all duration-700">
                    <span
                      className={`bg-gradient-to-r ${currentContent.gradient} bg-clip-text text-transparent transition-all duration-700`}
                    >
                      {currentContent.title}
                    </span>
                  </h1>
                  <div className="text-2xl lg:text-3xl font-semibold text-muted-foreground transition-all duration-700">
                    {currentContent.subtitle}
                  </div>
                  <p className="text-xl text-muted-foreground max-w-2xl transition-all duration-700">
                    {currentContent.description}
                  </p>
                </div>
              </div>

              {/* Static Benefits */}
              <div className="grid sm:grid-cols-2 gap-3 pt-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                  onClick={() => setIsModalOpen(true)}
                >
                  Заказать услугу
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg">
                  Смотреть портфолио
                </Button>
              </div>
            </div>

            {/* Enhanced Visual */}
            <div className="relative">
              <div className="relative z-10 bg-card/80 backdrop-blur border rounded-2xl p-8 shadow-2xl overflow-hidden">
                {/* Animated Background */}
                <div
                  className="absolute inset-0 opacity-10 transition-all duration-700"
                  style={{
                    background: `linear-gradient(135deg, ${currentContent.color}20, transparent)`,
                  }}
                ></div>

                <div className="relative space-y-6">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>

                  {/* Current Content Display */}
                  <div className="space-y-4">
                    <div
                      className="text-lg font-bold transition-all duration-700"
                      style={{ color: currentContent.color }}
                    >
                      {currentContent.title}
                    </div>

                    <div className="space-y-2">
                      {currentContent.features
                        .slice(0, 3)
                        .map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-center text-xs text-muted-foreground"
                          >
                            <div
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: currentContent.color }}
                            ></div>
                            <span>&nbsp;{feature}</span>
                          </div>
                        ))}
                    </div>
                  </div>

                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full transition-all duration-700 rounded-full"
                      style={{
                        backgroundColor: currentContent.color,
                        width: "100%",
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 opacity-20 rounded-full blur-xl transition-all duration-700"
                style={{
                  background: `radial-gradient(circle, ${currentContent.color}, transparent)`,
                }}
              ></div>
              <div
                className="absolute -top-4 -left-4 w-32 h-32 opacity-10 rounded-full blur-2xl transition-all duration-700"
                style={{
                  background: `radial-gradient(circle, ${currentContent.color}, transparent)`,
                }}
              ></div>

              {/* Progress Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {dynamicContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "scale-125"
                        : "hover:bg-primary/50"
                    }`}
                    style={{
                      backgroundColor:
                        index === currentSlide
                          ? currentContent.color
                          : "hsl(var(--muted))",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Заказать услугу"
        buttonText="Отправить заявку"
      />
    </>
  );
};

export default Hero;
