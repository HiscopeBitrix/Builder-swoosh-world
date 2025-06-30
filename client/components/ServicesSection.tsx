import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Code,
  Wrench,
  Zap,
  Settings,
  Users,
  BarChart,
  Workflow,
  Building,
} from "lucide-react";
import FormModal from "./FormModal";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  const bitrixServices = [
    {
      icon: Code,
      title: "Разработка корпоративных сайтов",
      description:
        "Создаем современные корпоративные сайты на платформе 1С-Битрикс с учетом всех требований бизнеса",
      features: [
        "Корпоративные сайты",
        "Каталоги продукции",
        "Новостные порталы",
      ],
      category: "bitrix",
      slug: "corporate-sites",
      gradient: "from-blue-500 to-blue-700",
    },
    {
      icon: Wrench,
      title: "Интернет-магазины на Битрикс",
      description:
        "Разрабатываем полнофункциональные интернет-магазины с интеграцией платежных систем",
      features: ["E-commerce решения", "Интеграция с 1С", "Платежные системы"],
      category: "bitrix",
      slug: "ecommerce",
      gradient: "from-green-500 to-green-700",
    },
    {
      icon: Zap,
      title: "Техническая поддержка сайтов",
      description:
        "Обеспечиваем стабильную работу ваших веб-ресурсов с круглосуточной технической поддержкой",
      features: ["Поддержка 24/7", "Обновления", "Мониторинг"],
      category: "bitrix",
      slug: "support",
      gradient: "from-purple-500 to-purple-700",
    },
    {
      icon: Settings,
      title: "Доработка существующих сайтов",
      description:
        "Расширяем функционал существующих сайтов, добавляем новые модули и интеграции",
      features: ["Новые модули", "Интеграции", "Оптимизация"],
      category: "bitrix",
      slug: "development",
      gradient: "from-orange-500 to-orange-700",
    },
  ];

  const bitrix24Services = [
    {
      icon: Users,
      title: "CRM внедрение и настройка",
      description:
        "Настраиваем CRM систему Bitrix24 для эффективного управления клиентами и продажами",
      features: ["Настройка CRM", "Воронки продаж", "Автоматизация"],
      category: "bitrix24",
      slug: "crm-setup",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      icon: BarChart,
      title: "Аналитика и отчетность",
      description:
        "Создаем систему аналитики и отчетности для контроля эффективности бизнес-процессов",
      features: ["Дашборды", "KPI метрики", "Автоотчеты"],
      category: "bitrix24",
      slug: "analytics",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: Workflow,
      title: "Автоматизация бизнес-процессов",
      description:
        "Автоматизируем рутинные задачи и настраиваем бизнес-процессы в Bitrix24",
      features: ["Роботы", "Бизнес-процессы", "Уведомления"],
      category: "bitrix24",
      slug: "automation",
      gradient: "from-violet-500 to-purple-600",
    },
    {
      icon: Building,
      title: "Интеграции с внешними системами",
      description:
        "Интегрируем Bitrix24 с внешними системами, API и сервисами для полной автоматизации",
      features: ["API интеграции", "Синхронизация", "Webhook"],
      category: "bitrix24",
      slug: "integrations",
      gradient: "from-rose-500 to-pink-600",
    },
  ];

  const allServices = [...bitrixServices, ...bitrix24Services];

  const filteredServices =
    activeFilter === "all"
      ? allServices
      : activeFilter === "bitrix"
        ? bitrixServices
        : bitrix24Services;

  const filters = [
    { id: "all", label: "Все услуги", count: allServices.length },
    { id: "bitrix", label: "1С-Битрикс", count: bitrixServices.length },
    { id: "bitrix24", label: "Bitrix 24", count: bitrix24Services.length },
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
              Предоставляем полный спектр услуг по ра��работке, поддержке и
              доработке веб-решений на платформе 1С-Битрикс
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={`relative ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                    : "hover:bg-primary/10"
                }`}
              >
                {filter.label}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {filter.count}
                </Badge>
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={`${service.category}-${index}`}
                  className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border-0 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur"
                >
                  <div
                    className={`h-1 bg-gradient-to-r ${service.gradient}`}
                  ></div>
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`mx-auto w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg leading-tight">
                      {service.title}
                    </CardTitle>
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
                          <div
                            className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full mr-2`}
                          ></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-2 space-y-2">
                      <Link to={`/services/${service.slug}`}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full group-hover:bg-primary/5 text-xs"
                        >
                          Подробнее
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full text-xs"
                        onClick={() => setIsModalOpen(true)}
                      >
                        Заказать услугу
                      </Button>
                    </div>
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
