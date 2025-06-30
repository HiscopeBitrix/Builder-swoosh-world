import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import FormModal from "@/components/FormModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Wrench, Zap, Settings } from "lucide-react";
import { Link } from "react-router-dom";

export default function BitrixServices() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      slug: "corporate-sites",
      gradient: "#d91935",
      price: "от 150 000 ₽",
    },
    {
      icon: Wrench,
      title: "Интернет-магазины на Битрикс",
      description:
        "Разрабатываем полнофункциональные интернет-магазины с интеграцией платежных систем",
      features: ["E-commerce решения", "Интеграция с 1С", "Платежные системы"],
      slug: "ecommerce",
      gradient: "from-green-500 to-green-700",
      price: "от 250 000 ₽",
    },
    {
      icon: Zap,
      title: "Техническая поддержка сайтов",
      description:
        "Обеспечиваем стабильную работу ваших веб-ресурсов с круглосуточной технической поддержкой",
      features: ["Поддержка 24/7", "Обновления", "Мониторинг"],
      slug: "support",
      gradient: "from-purple-500 to-purple-700",
      price: "от 15 000 ₽/мес",
    },
    {
      icon: Settings,
      title: "Доработка существующих сайтов",
      description:
        "Расширяем функционал существующих сайтов, добавляем новые модули и интеграции",
      features: ["Новые модули", "Интеграции", "Оптимизация"],
      slug: "development",
      gradient: "from-orange-500 to-orange-700",
      price: "от 25 000 ₽",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Compact Hero Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-background via-background to-primary/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-red-500/5"></div>
          <div
            className="absolute top-0 left-0 w-full h-1"
            style={{ backgroundColor: "#d91935" }}
          ></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="outline" className="mb-4">
              1С-Битрикс
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Услуги разработки на{" "}
              <span style={{ color: "#d91935" }}>1С-Битрикс</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Полный спектр услуг по разработке, поддержке и доработке
              веб-решений на профессиональной платформе 1С-Битрикс
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => setIsModalOpen(true)}
                style={{ backgroundColor: "#d91935" }}
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
                Смотреть портфолио
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Наши решения на 1С-Битрикс
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                ��ыберите подходящую услугу для развития вашего бизнеса
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {bitrixServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={index}
                    className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden border-0 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur"
                  >
                    <div
                      className="h-1"
                      style={{
                        backgroundColor:
                          typeof service.gradient === "string" &&
                          !service.gradient.includes("from-")
                            ? service.gradient
                            : "",
                      }}
                    ></div>
                    <CardHeader className="pb-4">
                      <div className="flex items-start space-x-4">
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg flex-shrink-0"
                          style={{
                            background:
                              typeof service.gradient === "string" &&
                              !service.gradient.includes("from-")
                                ? service.gradient
                                : `linear-gradient(135deg, ${service.gradient.split(" ")[1]}, ${service.gradient.split(" ")[3]})`,
                          }}
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
                          className="hover:opacity-90 text-xs px-6"
                          style={{
                            background:
                              typeof service.gradient === "string" &&
                              !service.gradient.includes("from-")
                                ? service.gradient
                                : `linear-gradient(135deg, ${service.gradient.split(" ")[1]}, ${service.gradient.split(" ")[3]})`,
                          }}
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

            {/* Why Bitrix Section */}
            <div className="mt-20">
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 max-w-4xl mx-auto">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Почему 1С-Битрикс?
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
                    <div className="space-y-2">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto"
                        style={{ backgroundColor: "#d91935" }}
                      >
                        <span className="text-white font-bold">№1</span>
                      </div>
                      <div className="font-semibold">Лидер рынка в России</div>
                      <div className="text-xs">
                        Более 1,000,000 сайтов работает на 1С-Битрикс
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-700 rounded-xl flex items-center justify-center mx-auto">
                        <span className="text-white font-bold">⚡</span>
                      </div>
                      <div className="font-semibold">
                        Высокая производительность
                      </div>
                      <div className="text-xs">
                        Оптимизированная архитектура и кэширование
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mx-auto">
                        <span className="text-white font-bold">🛡️</span>
                      </div>
                      <div className="font-semibold">
                        Максимальная безопасность
                      </div>
                      <div className="text-xs">
                        Регулярные обновления и защита от угроз
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
        title="Заказать услугу 1С-Битрикс"
        buttonText="Отправить заявку"
      />
    </div>
  );
}
