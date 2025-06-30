import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FormModal from "@/components/FormModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Wrench, Zap, Settings, ArrowRight } from "lucide-react";

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const services = [
    {
      icon: Code,
      title: "1С-Битрикс: Разработка сайтов",
      description: "Полный цикл разработки на платформе 1С-Битрикс",
      blocks: [
        "Описание 1С-Битрикс как платформы для разработки сайтов",
        "Примеры типов сайтов (корпоративные, интернет-магазины, лендинги)",
        "Преимущества использования Битрикс (надежность, SEO, безопасность)",
        "Форма захвата с кнопкой 'Запросить консультацию'",
      ],
    },
    {
      icon: Wrench,
      title: "Техническая поддер��ка сайтов",
      description: "Комплексная техническая поддержка ваших веб-ресурсов",
      blocks: [
        "Важность технической поддержки и регулярных обновлений",
        "Преимущества работы с нашей командой",
        "Услуги технической поддержки (обновления, безопасность, исправления)",
        "Истории успешных проектов по поддержке сайтов",
      ],
    },
    {
      icon: Zap,
      title: "Доработка сайтов",
      description: "Расширение функционала существующих веб-решений",
      blocks: [
        "Описание услуг по доработке сайтов",
        "Примеры функционала (новые разделы, модули, интеграции)",
        "Преимущества доработки для бизнеса",
        "Примеры успешных доработок сайтов",
      ],
    },
    {
      icon: Settings,
      title: "Bitrix 24: Внедрение, настройка, интеграция",
      description: "Автоматизация бизнес-процессов с помощью Bitrix 24",
      blocks: [
        "Обзор платформы Bitrix 24 и ее возможностей",
        "Услуги по внедрению Bitrix 24 в бизнес-процессы",
        "Интеграция с внешними системами (CRM, почта, соцсети)",
        "Реальные примеры внедрения Bitrix 24",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                Наши услуги
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Полный спектр услуг по разработке, поддержке и автоматизации
                бизнес-процессов на платформе 1С-Битрикс
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-all duration-300"
                  >
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">
                            {service.title}
                          </CardTitle>
                          <p className="text-muted-foreground mt-1">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        {service.blocks.map((block, blockIndex) => (
                          <div
                            key={blockIndex}
                            className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg"
                          >
                            <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs font-bold text-primary">
                                {blockIndex + 1}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {block}
                            </p>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full group-hover:bg-primary/90">
                        Подробнее об услуге
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Нужна консультация по услугам?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами для получения подробной информации о наших
              услугах и обсуждения вашего проекта
            </p>
            <Button size="lg" onClick={() => setIsModalOpen(true)}>
              Получить консультацию
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
