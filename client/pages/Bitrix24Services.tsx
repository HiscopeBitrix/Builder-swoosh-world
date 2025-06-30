import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FormModal from "@/components/FormModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, BarChart, Workflow, Building } from "lucide-react";
import { Link } from "react-router-dom";

export default function Bitrix24Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bitrix24Services = [
    {
      icon: Users,
      title: "CRM внедрение и настройка",
      description:
        "Настраиваем CRM систему Bitrix24 для эффективного управления клиентами и продажами",
      features: ["Настройка CRM", "Воронки продаж", "Автоматизация"],
      slug: "crm-setup",
      gradient: "from-cyan-500 to-blue-600",
      price: "от 80 000 ₽",
    },
    {
      icon: BarChart,
      title: "Аналитика и отчетность",
      description:
        "Создаем систему аналитики и отчетности для контроля эффективности бизнес-процессов",
      features: ["Дашборды", "KPI метрики", "Автоотчеты"],
      slug: "analytics",
      gradient: "from-emerald-500 to-teal-600",
      price: "от 65 000 ₽",
    },
    {
      icon: Workflow,
      title: "Автоматизация бизнес-процессов",
      description:
        "Автоматизируем рутинные задачи и настраиваем бизнес-процессы в Bitrix24",
      features: ["Роботы", "Бизнес-процессы", "Уведомления"],
      slug: "automation",
      gradient: "from-violet-500 to-purple-600",
      price: "от 45 000 ₽",
    },
    {
      icon: Building,
      title: "Интеграции с внешними системами",
      description:
        "Интегрируем Bitrix24 с внешними системами, API и сервисами для полной автоматизации",
      features: ["API интеграции", "Синхронизация", "Webhook"],
      slug: "integrations",
      gradient: "from-rose-500 to-pink-600",
      price: "от 35 000 ₽",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Compact Hero Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-background via-background to-cyan-500/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="outline" className="mb-4">
              Bitrix 24
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Автоматизация бизнеса с{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Bitrix 24
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Комплексные решения по внедрению, настройке и автоматизации
              бизнес-процессов на платформе Bitrix 24
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600"
                onClick={() => setIsModalOpen(true)}
              >
                Получить консультацию
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  window.location.href = "/portfolio";
                }}
              >
                Смотреть кейсы
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Наши решения на Bitrix 24
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Выберите услугу для автоматизации и развития вашего бизнеса
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {bitrix24Services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden border-0 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur"
                  >
                    <div
                      className={`h-1 bg-gradient-to-r ${service.gradient}`}
                    ></div>
                    <CardHeader className="pb-4">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg flex-shrink-0`}
                        >
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl leading-tight mb-2">
                            {service.title}
                          </CardTitle>
                          <Badge
                            variant="secondary"
                            className="text-xs font-semibold"
                          >
                            {service.price}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="text-xs border-primary/20"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex space-x-3 pt-2">
                        <Link
                          to={`/services/${service.slug}`}
                          className="flex-1"
                        >
                          <Button
                            variant="outline"
                            className="w-full group-hover:bg-primary/5 text-xs"
                          >
                            Подробнее
                            <ArrowRight className="ml-2 h-3 w-3" />
                          </Button>
                        </Link>
                        <Button
                          size="sm"
                          className={`bg-gradient-to-r ${service.gradient} hover:opacity-90 text-xs px-6`}
                          onClick={() => setIsModalOpen(true)}
                        >
                          Заказать
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Why Bitrix24 Section */}
            <div className="mt-20">
              <Card className="bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border-cyan-500/20 max-w-4xl mx-auto">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Преимущества Bitrix 24
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
                    <div className="space-y-2">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto">
                        <span className="text-white font-bold">∞</span>
                      </div>
                      <div className="font-semibold">Безлимитное хранилище</div>
                      <div className="text-xs">
                        Неограниченное место для документов и файлов
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto">
                        <span className="text-white font-bold">⚡</span>
                      </div>
                      <div className="font-semibold">Быстрая автоматизация</div>
                      <div className="text-xs">
                        Готовые роботы и бизнес-процессы
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto">
                        <span className="text-white font-bold">🔗</span>
                      </div>
                      <div className="font-semibold">Легкие интеграции</div>
                      <div className="text-xs">
                        API и готовые коннекторы к популярным сервисам
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />

      <FormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Заказать услугу Bitrix 24"
        buttonText="Отправить заявку"
      />
    </div>
  );
}
