import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormModal from "@/components/FormModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const portfolioCategories = [
    {
      title: "Сайты на 1С-Битрикс",
      description: "Корпоративные сайты и интернет-магазины",
      projects: [
        {
          name: "Корпоративный сайт производственной компании",
          type: "Корпоративный сайт",
          description:
            "Современный многостраничный сайт с каталогом продукции и интеграцией с CRM системой.",
          tech: ["1С-Битрикс", "Адаптивный дизайн", "CRM интеграция"],
          url: "https://example-corp.ru",
        },
        {
          name: "Интернет-магазин спортивных товаров",
          type: "E-commerce",
          description:
            "Полнофункциональный интернет-магазин с системой управления заказами и платежными системами.",
          tech: ["1С-Битрикс", "E-commerce", "Платежные системы"],
          url: "https://sportzone-shop.ru",
        },
        {
          name: "Лендинг IT-услуг с высокой конверсией",
          type: "Лендинг",
          description:
            "Одностраничный сайт для IT-компании с фокусом на конверсию и SEO-оптимизацией.",
          tech: ["1С-Битрикс", "SEO-оптимизация", "A/B тесты"],
          url: "https://it-landing.ru",
        },
        {
          name: "Каталог недвижимости",
          type: "Каталог",
          description:
            "Удобная система поиска и просмотра объектов недвижимости с картами и фильтрами.",
          tech: ["1С-Битрикс", "Карты", "Поиск"],
          url: "https://realty-catalog.ru",
        },
        {
          name: "Образовательный портал",
          type: "Портал",
          description:
            "Платформа для онлайн-обучения с системой тестирования и прогресса студентов.",
          tech: ["1С-Битрикс", "LMS", "Тестирование"],
          url: "https://edu-portal.ru",
        },
        {
          name: "Сайт медицинской клиники",
          type: "Медицина",
          description:
            "Информационный сайт с записью на прием и личным кабинетом пациентов.",
          tech: ["1С-Битрикс", "Запись онлайн", "ЛК"],
          url: "https://med-clinic.ru",
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
            "Комплексная оптимизация скорости загрузки и улучшение пользовательского опыта.",
          tech: ["Оптимизация", "Кэширование", "Performance"],
          url: "https://fast-shop.ru",
        },
        {
          name: "Добавление модуля онлайн-чата",
          type: "Доработка",
          description:
            "Интеграция системы онлайн-консультаций с возможностью передачи файлов.",
          tech: ["Новый функционал", "Интеграция", "Real-time"],
          url: "https://chat-integration.ru",
        },
        {
          name: "Миграция на новую версию Битрикс",
          type: "Обновление",
          description:
            "Безопасная миграция с сохранением всех данных и функциональности.",
          tech: ["Миграция", "Тестирование", "Безопасность"],
          url: "https://updated-site.ru",
        },
        {
          name: "Настройка резервного копирования",
          type: "Безопасность",
          description:
            "Автоматическое создание резервных копий и система восстановления данных.",
          tech: ["Backup", "Автоматизация", "Мониторинг"],
          url: "https://backup-system.ru",
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
            "Полная автоматизация процессов продаж туров с интеграцией внешних API.",
          tech: ["Bitrix 24", "Автоматизация", "API интеграция"],
          url: "https://travel-crm.ru",
        },
        {
          name: "Система управления проектами",
          type: "Проект-менеджмент",
          description:
            "Настройка рабочих процессов и управление задачами для IT-команды.",
          tech: ["Bitrix 24", "Проект-менеджмент", "Автоматизация"],
          url: "https://project-management.ru",
        },
        {
          name: "Автоматизация продаж для IT-компании",
          type: "Продажи",
          description:
            "Создание воронок продаж и настройка автоматических уведомлений.",
          tech: ["Bitrix 24", "Воронки продаж", "Аналитика"],
          url: "https://sales-automation.ru",
        },
        {
          name: "HR-процессы и подбор персонала",
          type: "HR",
          description:
            "Автоматизация процессов найма и управления персоналом компании.",
          tech: ["Bitrix 24", "HR", "Рекрутинг"],
          url: "https://hr-automation.ru",
        },
        {
          name: "Склад и логистика",
          type: "Логистика",
          description:
            "Управление складскими запасами и логистическими процессами.",
          tech: ["Bitrix 24", "Склад", "Логистика"],
          url: "https://warehouse-system.ru",
        },
      ],
    },
  ];

  const currentCategory = portfolioCategories[activeCategory];

  const handleCategoryChange = (index: number) => {
    setActiveCategory(index);
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

        {/* Projects Grid */}
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentCategory.projects.map((project, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader>
                    <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg mb-4 flex items-center justify-center">
                      <div className="text-center space-y-3">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                          {project.name.charAt(0)}
                        </div>
                        <Badge variant="secondary">{project.type}</Badge>
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {project.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold mb-2">
                        Технологии:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary/5 group-hover:text-primary transition-colors"
                      onClick={() => window.open(project.url, "_blank")}
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
              Свяжитесь с нами для обсуждения деталей вашего проекта и получения
              персонального предложения
            </p>
            <Button size="lg" onClick={() => setIsModalOpen(true)}>
              Начать проект
            </Button>
          </div>
        </section>
      </main>
      <Footer />

      <FormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Начать проект"
        buttonText="От��равить заявку"
      />
    </div>
  );
}
