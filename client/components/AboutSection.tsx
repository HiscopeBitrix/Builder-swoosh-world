import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Clock, TrendingUp } from "lucide-react";
import FormModal from "./FormModal";

const AboutSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const stats = [
    {
      icon: Users,
      number: "50+",
      label: "Довольных клиентов",
      description: "Компании доверяют нам свои проекты",
    },
    {
      icon: Award,
      number: "3",
      label: "Года на рынке",
      description: "Опыт работы с платформой 1С-Битрикс",
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Техподдержка",
      description: "Круглосуточная поддержка клиентов",
    },
    {
      icon: TrendingUp,
      number: "100+",
      label: "Проектов",
      description: "Успешно реализованных решений",
    },
  ];

  const values = [
    {
      title: "Профессионализм",
      description:
        "Наша команда состоит из сертифицированных специалистов с глубокими знаниями платформы 1С-Битрикс",
    },
    {
      title: "Надежность",
      description:
        "Используем проверенные технологии и следуем лучшим практикам разработки для создания стабильных решений",
    },
    {
      title: "Индивидуальный подход",
      description:
        "Каждый проект уникален. Мы внимательно изучаем потребности бизнеса и предлагаем оптимальные решения",
    },
    {
      title: "Поддержка",
      description:
        "Наше сотрудничество не заканчивается сдачей проекта. Мы обеспечиваем долгосрочную поддержку",
    },
  ];

  return (
    <>
      <section
        id="about"
        className="py-[30px] lg:py-[50px] bg-gradient-to-br from-muted/20 via-background to-primary/5 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="mb-4">
              О компании
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              IT-Мечта - Ваш надежный партнер
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Мы специализируемся на создании и развитии веб-решений на
              платформе 1С-Битрикс. За годы работы мы помогли сотням компаний
              автоматизировать бизнес-процессы и увеличить эффективность работы.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-8 space-y-4">
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-foreground">
                        {stat.number}
                      </div>
                      <div className="text-lg font-semibold text-foreground mt-1">
                        {stat.label}
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        {stat.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Company Story */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Наша история и миссия
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  IT-Мечта была основана с целью помочь российским компаниям
                  эффективно использовать возможности платформы 1С-Битрикс для
                  роста и развития своего бизнеса.
                </p>
                <p>
                  Мы начинали как небольшая команда энтузиастов, но за 3 года
                  выросли в компанию с устоявшимися процессами и глубокой
                  экспертизой в области веб-разработки и автоматизации.
                </p>
                <p>
                  Сегодня мы гордимся тем, что помогли более чем 50 компаниям
                  реализовать их цифровые амбиции и достичь новых высот в
                  бизнесе.
                </p>
              </div>
            </div>
            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardContent className="p-0 space-y-6">
                  <div className="text-lg font-semibold text-foreground">
                    Наш подход к работе
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-foreground">
                        Анализ и планирование
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Глубокое изучение потребностей бизнеса
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-foreground">
                        Современные технологии
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Используем проверенные решения 1С-Битрикс
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-foreground">
                        Долгосрочная поддержка
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Сопровождаем проекты после запуска
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

        </div>
      </section>

      <FormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Связаться с нами"
        buttonText="Отправить заявку"
      />
    </>
  );
};

export default AboutSection;
