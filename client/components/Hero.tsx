import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  const benefits = [
    "Опыт работы более 8 лет",
    "100+ успешных проектов",
    "Поддержка 24/7",
    "Гарантия качества",
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground">
                Профессиональная
                <span className="text-primary block">
                  разр��ботка на 1С-Битрикс
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Создаем современные веб-решения, настраиваем Bitrix24 и
                обеспечиваем техническую поддержку для успешного развития вашего
                бизнеса
              </p>
            </div>

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

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10 bg-card border rounded-2xl p-8 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-primary/20 rounded animate-pulse"></div>
                  <div className="h-4 bg-primary/10 rounded animate-pulse w-3/4"></div>
                  <div className="h-4 bg-primary/15 rounded animate-pulse w-1/2"></div>
                </div>
                <div className="pt-4">
                  <div className="text-sm font-medium text-primary">
                    1С-Битрикс
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Профессиональная разработка
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
