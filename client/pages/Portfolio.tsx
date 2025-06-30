import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star } from "lucide-react";

export default function Portfolio() {
  const portfolioSections = [
    {
      title: "Сайты на 1С-Битрикс",
      description:
        "Примеры разработанных корпоративных сайтов и интернет-магазинов",
      projects: [
        {
          name: "Корпоративный сайт производственной компании",
          type: "Корпоративный сай��",
          tech: ["1С-Битрикс", "Адаптивный дизайн"],
        },
        {
          name: "Интернет-магазин спортивных товаров",
          type: "E-commerce",
          tech: ["1С-Битрикс", "Интеграция с 1С"],
        },
        {
          name: "Лендинг IT-услуг",
          type: "Лендинг",
          tech: ["1С-Битрикс", "SEO-оптимизация"],
        },
      ],
    },
    {
      title: "Техническая поддержка и доработка",
      description: "Проекты по поддержке и развитию существующих веб-ресурсов",
      projects: [
        {
          name: "Оптимизация производительности интернет-магазина",
          type: "Техподдержка",
          tech: ["Оптимизация", "Кэширование"],
        },
        {
          name: "Добавление модуля онлайн-чата",
          type: "Доработка",
          tech: ["Новый функционал", "Интеграция"],
        },
        {
          name: "Миграция на новую версию Битрикс",
          type: "Обновление",
          tech: ["Миграция", "Тестирование"],
        },
      ],
    },
    {
      title: "Внедрение Bitrix 24",
      description: "Успешные проекты автоматизации бизнес-процессов",
      projects: [
        {
          name: "CRM для туристического агентства",
          type: "CRM",
          tech: ["Bitrix 24", "Автоматизация"],
        },
        {
          name: "Система управления проектами",
          type: "Проект-менеджмент",
          tech: ["Bitrix 24", "Интеграция"],
        },
        {
          name: "Автоматизация продаж для IT-компании",
          type: "Продажи",
          tech: ["Bitrix 24", "Воронки продаж"],
        },
      ],
    },
  ];

  const testimonials = [
    {
      name: "Александр Петров",
      company: "ООО 'ТехноПром'",
      text: "Отличная работа по разработке корпоративного сайта. Команда профессиональная, сроки соблюдены.",
      rating: 5,
      avatar: "👨‍💼",
    },
    {
      name: "Мария Иванова",
      company: "Спорт-Магазин",
      text: "Создали современный интернет-магазин с интеграцией 1С. Очень довольны результатом и поддержкой.",
      rating: 5,
      avatar: "👩‍💼",
    },
    {
      name: "Дмитрий Сидоров",
      company: "ИТ-Решения",
      text: "Внедрили Bitrix 24 для автоматизации продаж. Эффективность работы отдела увеличилась на 40%.",
      rating: 5,
      avatar: "👨‍💻",
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
                Портфолио проектов
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Примеры наших работ по разработке, поддержке сайтов и внедрению
                системы Bitrix 24
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Sections */}
        {portfolioSections.map((section, sectionIndex) => (
          <section key={sectionIndex} className="py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  {section.title}
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {section.description}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {section.projects.map((project, projectIndex) => (
                  <Card
                    key={projectIndex}
                    className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardHeader>
                      <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg mb-4 flex items-center justify-center">
                        <span className="text-4xl">🖥️</span>
                      </div>
                      <CardTitle className="text-lg">{project.name}</CardTitle>
                      <Badge variant="secondary" className="w-fit">
                        {project.type}
                      </Badge>
                    </CardHeader>
                    <CardContent className="space-y-4">
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
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-primary/5"
                      >
                        Подробнее
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Testimonials */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Отзывы клиентов
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Что говорят о нас наши клиенты
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-8 space-y-4">
                    <div className="text-4xl">{testimonial.avatar}</div>
                    <div className="flex justify-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.company}
                      </p>
                    </div>
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
              Готовы обсудить ваш проект?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами для обсуждения деталей вашего проекта и получения
              персонального предложения
            </p>
            <Button size="lg">Начать проект</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
