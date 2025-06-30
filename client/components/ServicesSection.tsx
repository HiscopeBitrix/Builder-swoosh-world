import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code, Wrench, Zap, Settings } from "lucide-react";
import FormModal from "./FormModal";

const ServicesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const services = [
    {
      icon: Code,
      title: "1С-Битрикс: Разработка сайтов",
      description:
        "Создаем современные корпоративные сайты и интернет-магазины на платформе 1С-Битрикс с учетом всех требований бизнеса",
      features: ["Корпоративные сайты", "Интернет-магазины", "Лендинги"],
    },
    {
      icon: Wrench,
      title: "Техническая поддержка сайтов",
      description:
        "Обеспечиваем стабильную работу ваших веб-ресурсов с круглосуточной технической поддержкой и регулярными обновлениями",
      features: ["Поддержка 24/7", "Обновления", "Мониторинг"],
    },
    {
      icon: Zap,
      title: "Доработка сайтов",
      description:
        "Расширяем функционал существующих сайтов, добавляем новые модули и интеграции для повышения эффективности бизнеса",
      features: ["Новые модули", "Интеграции", "Оптимизация"],
    },
    {
      icon: Settings,
      title: "Bitrix 24: Внедрение и настройка",
      description:
        "Внедряем и настраиваем Bitrix24 для автоматизации бизнес-процессов, интегрируем с внешними системами",
      features: ["CRM настройка", "Автоматизация", "Интеграции"],
    },
  ];

  return (
    <>
      <section className="py-[30px] lg:py-[50px] bg-gradient-to-br from-background via-accent/5 to-background relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-cyan-500/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Наши услуги
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Предоставляем полный спектр услуг по разработке, поддержке и
              доработке веб-решений на платформе 1С-Битрикс
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-muted-foreground flex items-center"
                        >
                          <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full group-hover:bg-primary/5"
                      onClick={() => setIsModalOpen(true)}
                    >
                      Заказать услугу
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
              onClick={() => setIsModalOpen(true)}
            >
              Заказать консультацию
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <FormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Заказать консультацию"
        buttonText="Отправить заявку"
      />
    </>
  );
};

export default ServicesSection;
