import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState(0);
  const [currentProject, setCurrentProject] = useState(0);

  const portfolioCategories = [
    {
      title: "Сайты на 1С-Битрикс",
      description: "Корпоративные сайты и интернет-магазины",
      projects: [
        {
          name: "Корпоративный сайт производственной компании",
          type: "Корпоративный сайт",
          description:
            "Современный многостраничный сайт с каталогом продукции, интеграцией с CRM системой и адаптивным дизайном.",
          tech: ["1С-Битрикс", "Адаптивный дизайн", "CRM интеграция"],
          url: "https://example-corp.ru",
          stats: {
            duration: "45 дней",
            increase: "+150% трафика",
            conversion: "+80% заявок",
          },
        },
        {
          name: "Интернет-магазин спортивных товаров",
          type: "E-commerce",
          description:
            "Полнофункциональный интернет-магазин с системой управления заказами, интеграцией с 1С и платежными системами.",
          tech: ["1С-Битрикс", "E-commerce", "Платежные системы"],
          url: "https://sportzone-shop.ru",
          stats: {
            duration: "60 дней",
            increase: "+300% продаж",
            conversion: "+120% конверсия",
          },
        },
        {
          name: "Лендинг IT-услуг с высокой конверсией",
          type: "Лендинг",
          description:
            "Одностраничный сайт для IT-компании с фокусом на конверсию и SEO-оптимизацией.",
          tech: ["1С-Битрикс", "SEO-оптимизация", "A/B тесты"],
          url: "https://it-landing.ru",
          stats: {
            duration: "20 дней",
            increase: "+200% лидов",
            conversion: "+250% конверсия",
          },
        },
      ],
    },
    {
      title: "Техническая поддержка",
      description: "Поддержка и развитие существующих веб-ресурсов",
      projects: [
        {
          name: "Оптимизация производительности интернет-магазина",
          type: "Техподдержка",
          description:
            "Комплексная оптимизация скорости загрузки, настройка кэширования и улучшение пользовательского опыта.",
          tech: ["Оптимизация", "Кэширование", "Performance"],
          url: "https://fast-shop.ru",
          stats: {
            duration: "30 дней",
            increase: "-70% время загрузки",
            conversion: "+90% удержание",
          },
        },
        {
          name: "Добавление модуля онлайн-чата",
          type: "Доработка",
          description:
            "Интеграция системы онлайн-консультаций с возможностью передачи файлов и истории переписки.",
          tech: ["Новый функционал", "Интеграция", "Real-time"],
          url: "https://chat-integration.ru",
          stats: {
            duration: "15 дней",
            increase: "+40% обращений",
            conversion: "+60% продаж",
          },
        },
        {
          name: "Миграция на новую версию Битрикс",
          type: "Обновление",
          description:
            "Безопасная миграция с сохранением всех данных и функциональности, обновление компонентов.",
          tech: ["Миграция", "Тестирование", "Безопасность"],
          url: "https://updated-site.ru",
          stats: {
            duration: "25 дней",
            increase: "+50% безопасность",
            conversion: "100% сохранность данных",
          },
        },
      ],
    },
    {
      title: "Внедрение Bitrix 24",
      description: "Автоматизация бизнес-процессов и CRM системы",
      projects: [
        {
          name: "CRM для туристического агентства",
          type: "CRM",
          description:
            "Полная автоматизация процессов продаж туров с интеграцией внешних API и системой аналитики.",
          tech: ["Bitrix 24", "Автоматизация", "API интеграция"],
          url: "https://travel-crm.ru",
          stats: {
            duration: "40 дней",
            increase: "+180% эффективность",
            conversion: "+130% продаж",
          },
        },
        {
          name: "Система управления проектами",
          type: "Проект-менеджмент",
          description:
            "Настройка рабочих процессов, управление задачами и контроль времени для IT-команды.",
          tech: ["Bitrix 24", "Проект-менеджмент", "Автоматизация"],
          url: "https://project-management.ru",
          stats: {
            duration: "35 дней",
            increase: "+200% контроль",
            conversion: "+150% производительность",
          },
        },
        {
          name: "Автоматизация продаж для IT-компании",
          type: "Продажи",
          description:
            "Создание воронок продаж, настройка автоматических уведомлений и системы отчетности.",
          tech: ["Bitrix 24", "Воронки продаж", "Аналитика"],
          url: "https://sales-automation.ru",
          stats: {
            duration: "50 дней",
            increase: "+300% автоматизация",
            conversion: "+220% закрытие сделок",
          },
        },
      ],
    },
  ];

  const currentCategory = portfolioCategories[activeCategory];
  const project = currentCategory.projects[currentProject];

  const nextProject = () => {
    setCurrentProject((prev) =>
      prev === currentCategory.projects.length - 1 ? 0 : prev + 1,
    );
  };

  const prevProject = () => {
    setCurrentProject((prev) =>
      prev === 0 ? currentCategory.projects.length - 1 : prev - 1,
    );
  };

  const handleCategoryChange = (index: number) => {
    setActiveCategory(index);
    setCurrentProject(0);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                Портфолио проектов
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                100+ успешных проектов за 3 года работы. Каждый проект — это
                история успеха наших клиентов.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Switcher */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {portfolioCategories.map((category, index) => (
                <Button
                  key={index}
                  variant={activeCategory === index ? "default" : "outline"}
                  onClick={() => handleCategoryChange(index)}
                  className="px-6 py-3"
                >
                  {category.title}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Project Showcase */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {currentCategory.title}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {currentCategory.description}
              </p>
            </div>

            {/* Project Display */}
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Project Visual */}
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-12 flex items-center justify-center min-h-[400px]">
                    <div className="text-center space-y-6">
                      <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                        {project.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">
                          {project.name}
                        </h3>
                        <Badge variant="secondary" className="mt-2">
                          {project.type}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-8 lg:p-12 space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-3">О проекте</h4>
                      <p className="text-muted-foreground">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3">Технологии</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, index) => (
                          <Badge key={index} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold mb-3">Результаты</h4>
                      <div className="grid grid-cols-1 gap-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Срок реализации:
                          </span>
                          <span className="font-medium">
                            {project.stats.duration}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Улучшение:
                          </span>
                          <span className="font-medium text-green-600">
                            {project.stats.increase}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Конверсия:
                          </span>
                          <span className="font-medium text-green-600">
                            {project.stats.conversion}
                          </span>
                        </div>
                      </div>
                    </div>

                    <Button
                      className="w-full"
                      onClick={() => window.open(project.url, "_blank")}
                    >
                      Смотреть подробнее
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8">
                <Button
                  variant="outline"
                  onClick={prevProject}
                  className="flex items-center"
                >
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Предыдущий
                </Button>

                <div className="text-center">
                  <p className="text-muted-foreground">
                    {currentProject + 1} из {currentCategory.projects.length}
                  </p>
                  <div className="flex space-x-2 mt-2">
                    {currentCategory.projects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentProject(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentProject ? "bg-primary" : "bg-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  onClick={nextProject}
                  className="flex items-center"
                >
                  Следующий
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* All Projects Grid */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Все проекты категории
              </h2>
              <p className="text-muted-foreground">
                Краткий обзор всех проектов в выбранной категории
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {currentCategory.projects.map((proj, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    index === currentProject ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setCurrentProject(index)}
                >
                  <CardHeader>
                    <div className="w-full h-32 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">
                        {proj.name.charAt(0)}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{proj.name}</CardTitle>
                    <Badge variant="secondary" className="w-fit">
                      {proj.type}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {proj.description}
                    </p>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(proj.url, "_blank");
                      }}
                    >
                      Смотреть подробнее
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Готовы создать свой проект?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Свяжите��ь с нами для обсуждения деталей вашего проекта и
              получения персонального предложения
            </p>
            <Button size="lg">Начать проект</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
