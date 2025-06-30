import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FormModal from "@/components/FormModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Award,
  Clock,
  TrendingUp,
  Target,
  Heart,
  Shield,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      icon: Target,
      title: "Профессионализм",
      description:
        "Наша команда состоит из сертифицированных специалистов с глубокими знаниями платформы 1С-Битрикс",
      gradient: "from-blue-500 to-blue-700",
    },
    {
      icon: Shield,
      title: "Надежность",
      description:
        "Используем проверенные технологии и следуем лучшим практикам разработки для создания стабильных решений",
      gradient: "from-green-500 to-green-700",
    },
    {
      icon: Heart,
      title: "Индивидуальный подход",
      description:
        "Каждый проект уникален. Мы внимательно изучаем потребности бизнеса и предлагаем оптимальные решения",
      gradient: "from-red-500 to-pink-600",
    },
    {
      icon: Lightbulb,
      title: "Инновации",
      description:
        "Постоянно развиваемся, изучаем новые технологии и внедряем современные подходы в разработке",
      gradient: "from-purple-500 to-purple-700",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-background to-primary/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <Badge variant="outline" className="w-fit">
                    О компании
                  </Badge>
                  <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                    IT-Мечта -{" "}
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Ваш надежный партнер
                    </span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Мы специализируемся на создании и развитии веб-решений на
                    платформе 1С-Битрикс. За годы работы мы помогли сотням
                    компаний автоматизировать бизнес-процессы и увеличить
                    эффективность работы.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="group bg-gradient-to-r from-primary to-accent"
                    onClick={() => {
                      window.location.href = "/portfolio";
                    }}
                  >
                    Наши проекты
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Связаться с нами
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <Card
                        key={index}
                        className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                      >
                        <CardContent className="p-6 space-y-3">
                          <div className="mx-auto w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div className="text-2xl font-bold text-foreground">
                            {stat.number}
                          </div>
                          <div className="text-sm font-semibold text-foreground">
                            {stat.label}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-muted/20 via-background to-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                    Наша миссия и видение
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <strong className="text-foreground">Миссия:</strong>{" "}
                      IT-Мечта была основана с целью помочь российским компаниям
                      эффективно использовать возможности платформы 1С-Битрикс
                      для роста и развития своего бизнеса.
                    </p>
                    <p>
                      <strong className="text-foreground">Видение:</strong> Мы
                      стремимся стать ведущим партнером для компаний, которые
                      хотят цифровизировать свои процессы и получить
                      конкурентные преимущества.
                    </p>
                    <p>
                      <strong className="text-foreground">История:</strong> Мы
                      начинали как небольшая команда энтузиастов, но за 8 лет
                      выросли в компанию с устоявшимися процессами и глубокой
                      экспертизой.
                    </p>
                  </div>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-xl font-semibold text-foreground">
                    Сертификации и партнерства
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">
                        Сертифицированный партнер 1С-Битрикс
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">
                        Авторизованный партнер Bitrix24
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">
                        Член ассоциации веб-разработчиков
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">
                        Золотой партнер Microsoft
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Наши ценности
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Принципы, которыми мы руководствуемся в работе
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center overflow-hidden"
                  >
                    <div
                      className={`h-1 bg-gradient-to-r ${value.gradient}`}
                    ></div>
                    <CardContent className="p-8 space-y-4">
                      <div
                        className={`mx-auto w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-muted/20 via-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Наша команда
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Проф��ссионалы, которые воплощают ваши идеи в жизнь
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center overflow-hidden"
                >
                  <div
                    className={`h-1 bg-gradient-to-r ${member.gradient}`}
                  ></div>
                  <CardContent className="p-8 space-y-4">
                    <div
                      className={`mx-auto w-20 h-20 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform`}
                    >
                      {member.avatar}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {member.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {member.role}
                      </p>
                      <Badge variant="secondary" className="text-xs mt-2">
                        {member.experience}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Готовы работать с нами?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами, чтобы обсудить ваш проект и получить
              персональное предложение
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent"
                onClick={() => setIsModalOpen(true)}
              >
                Обсудить проект
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  window.location.href = "/contacts";
                }}
              >
                Наши контакты
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />

      <FormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Связаться с нами"
        buttonText="Отправить заявку"
      />
    </div>
  );
}
