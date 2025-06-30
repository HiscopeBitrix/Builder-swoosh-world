import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Clock, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const stats = [
    {
      icon: Users,
      number: "100+",
      label: "Довольных клиентов",
      description: "Компании доверяют нам свои проекты",
    },
    {
      icon: Award,
      number: "8",
      label: "Лет на рынке",
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
      number: "200+",
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
            BitrixPro - Ваш надежный партнер
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы специализируемся на создании и развитии веб-решений на платформе
            1С-Битрикс. За годы работы мы помогли сотням компаний
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
                BitrixPro была основана с целью помочь российским компаниям
                эффективно использовать возможности платформы 1С-Битрикс для
                роста и развития своего бизнеса.
              </p>
              <p>
                Мы начинали как небольшая команда энтузиастов, но за 8 лет
                выросли в компанию с устоявшимися процессами и глубокой
                экспертизой в области веб-разработки и автоматизации.
              </p>
              <p>
                Сегодня мы гордимся тем, что помогли более чем 100 компаниям
                реализовать их цифровые амбиции и достичь новых высот в бизнесе.
              </p>
            </div>
          </div>
          <div className="relative">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-0 space-y-4">
                <div className="text-lg font-semibold text-foreground">
                  Сертификации и пар��нерства
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">
                      Сертифицированный партнер 1С-Битрикс
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">
                      Авторизованный партнер Bitrix24
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">
                      Член ассоциации веб-разработчиков
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values Grid */}
        <div>
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Наши ценности
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-3">
                  <h4 className="text-lg font-semibold text-foreground">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
