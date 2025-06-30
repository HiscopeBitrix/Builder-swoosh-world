import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const dynamicContent = [
    {
      title: "1С-Битрикс",
      subtitle: "Профессиональная разработка",
      description: "Создаем современные веб-решения на платформе 1С-Битрикс",
      features: ["Корпоративные сайты", "Интернет-магазины", "CMS системы"],
      color: "from-blue-600 to-blue-800",
    },
    {
      title: "Bitrix 24",
      subtitle: "��втоматизация бизнеса",
      description: "Внедряем и настраиваем CRM для эффективного управления",
      features: ["CRM настройка", "Автоматизация", "Интеграции"],
      color: "from-green-600 to-green-800",
    },
    {
      title: "Техподдержка",
      subtitle: "Надежное обслуживание",
      description: "Обеспечиваем стабильную работу ваших веб-ресурсов 24/7",
      features: [
        "Мониторинг 24/7",
        "Быстрые исправления",
        "Регулярные обновления",
      ],
      color: "from-purple-600 to-purple-800",
    },
  ];

  const benefits = [
    "Опыт работы более 8 лет",
    "100+ успешных проектов",
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
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="space-y-2 min-h-[200px] transition-all duration-700">
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground transition-all duration-700">
                  <span
                    className={`bg-gradient-to-r ${currentContent.color} bg-clip-text text-transparent transition-all duration-700`}
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

                {/* Dynamic Features */}
                <div className="pt-4 space-y-2">
                  {currentContent.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 transition-all duration-700"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${currentContent.color}`}
                      ></div>
                      <span className="text-sm text-muted-foreground font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Static Benefits */}
            <div className="grid sm:grid-cols-2 gap-3">
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
              <Button size="lg" className="group">
                Узнать больше
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Смотреть портфолио
              </Button>
            </div>
          </div>

          {/* Enhanced Visual */}
          <div className="relative">
            <div className="relative z-10 bg-card border rounded-2xl p-8 shadow-2xl overflow-hidden">
              {/* Animated Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${currentContent.color} opacity-5 transition-all duration-700`}
              ></div>

              <div className="relative space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>

                {/* Dynamic Content Lines */}
                <div className="space-y-3">
                  {[...Array(4)].map((_, index) => (
                    <div
                      key={index}
                      className={`h-4 bg-gradient-to-r ${currentContent.color} opacity-20 rounded animate-pulse transition-all duration-700`}
                      style={{
                        width: `${Math.random() * 50 + 50}%`,
                        animationDelay: `${index * 300}ms`,
                        animationDuration: `${2 + index * 0.5}s`,
                      }}
                    ></div>
                  ))}
                </div>

                <div className="pt-4">
                  <div
                    className={`text-sm font-medium bg-gradient-to-r ${currentContent.color} bg-clip-text text-transparent transition-all duration-700`}
                  >
                    {currentContent.title}
                  </div>
                  <div className="text-xs text-muted-foreground transition-all duration-700">
                    {currentContent.subtitle}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div
              className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r ${currentContent.color} opacity-10 rounded-full blur-xl transition-all duration-700`}
            ></div>
            <div
              className={`absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-r ${currentContent.color} opacity-5 rounded-full blur-2xl transition-all duration-700`}
            ></div>

            {/* Progress Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {dynamicContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-primary scale-125"
                      : "bg-muted hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
