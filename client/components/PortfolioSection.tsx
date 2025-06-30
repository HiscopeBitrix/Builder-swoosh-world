import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import FormModal from "./FormModal";

const PortfolioSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const featuredProjects = [
    {
      title: "Корпоративный сайт производственной компании",
      category: "Корпоративный сайт",
      description:
        "Современный сайт с каталогом продукции и интеграцией с CRM системой",
      tech: ["1С-Битрикс", "Адаптивный дизайн", "CRM интеграция"],
      logo: {
        name: "ТехноПром",
        colors: ["#2563eb", "#1d4ed8"],
        icon: "T",
      },
    },
    {
      title: "Интернет-магазин спортивных товаров",
      category: "E-commerce",
      description:
        "Полнофункциональный интернет-магазин с системой управления заказами",
      tech: ["1С-Битрикс", "E-commerce", "Платежные системы"],
      logo: {
        name: "SportZone",
        colors: ["#dc2626", "#b91c1c"],
        icon: "S",
      },
    },
    {
      title: "Автоматизация продаж для IT-компании",
      category: "Bitrix 24",
      description:
        "Настройка CRM и автоматизация процессов продаж с увеличением конверсии",
      tech: ["Bitrix 24", "CRM", "Автоматизация"],
      logo: {
        name: "DigitalFlow",
        colors: ["#059669", "#047857"],
        icon: "D",
      },
    },
  ];

  return (
    <>
      <section className="py-[30px] lg:py-[50px] bg-gradient-to-br from-background via-primary/5 to-background relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-red-500/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="mb-4">
              Портфолио
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Наши успешные проекты
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Примеры реализованных проектов, которые помогли нашим клиентам
              достичь поставленных целей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6 space-y-4">
                  {/* Project Logo */}
                  <div className="w-full h-48 bg-gradient-to-br from-muted/20 to-muted/10 rounded-lg flex flex-col items-center justify-center group-hover:scale-105 transition-transform p-8">
                    <div
                      className="w-20 h-20 rounded-xl flex items-center justify-center text-white font-bold text-2xl mb-4 shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${project.logo.colors[0]}, ${project.logo.colors[1]})`,
                      }}
                    >
                      {project.logo.icon}
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-foreground">
                        {project.logo.name}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Клиент проекта
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-3">
                    <Badge variant="secondary" className="w-fit">
                      {project.category}
                    </Badge>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
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

                  {/* Action Button */}
                  <Button
                    variant="ghost"
                    className="w-full group-hover:bg-primary/5 group-hover:text-primary transition-colors"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Заказать подобный
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/portfolio">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
              >
                Смотреть все проекты
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <FormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Заказать подобный проект"
        buttonText="Отправить заявку"
      />
    </>
  );
};

export default PortfolioSection;
