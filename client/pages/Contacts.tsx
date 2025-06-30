import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Calendar,
  Send,
} from "lucide-react";
import FormModal from "@/components/FormModal";

export default function Contacts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: "Телефон",
      details: ["+7 (995) 118-26-21"],
      action: "Позвонить",
      actionHref: "tel:+74951234567",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@it-mechta.ru"],
      action: "Написать",
      actionHref: "mailto:info@it-mechta.ru",
    },
    {
      icon: MessageCircle,
      title: "Telegram",
      details: ["@Hiscope_1", "Быстрые ответы 24/7"],
      action: "Написать в Telegram",
      actionHref: "https://t.me/it_mechta_support",
    },
    {
      icon: Clock,
      title: "Часы работы",
      details: ["Пн-Пт: 9:00 - 18:00", "Сб-Вс: по договоренности"],
      action: "Записаться",
      actionHref: "#",
    },
  ];

  const quickActions = [
    {
      icon: Calendar,
      title: "Бесплатная консультация",
      description: "30-минутная встреча с экспертом",
      buttonText: "Записаться",
      variant: "default" as const,
    },
    {
      icon: MessageCircle,
      title: "Техническая поддержка",
      description: "Помощь по текущим проектам",
      buttonText: "Получить помощь",
      variant: "outline" as const,
    },
    {
      icon: Send,
      title: "Обсудить проект",
      description: "Расскажите о своих задачах",
      buttonText: "Начать обсуждение",
      variant: "secondary" as const,
    },
  ];

  return (
    <>
      <div className="min-h-screen">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-background to-primary/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center space-y-8">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                  Свяжитесь с нами
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Готовы помочь с вашим проектом. Выберите удобный способ связи
                  или оставьте заявку — ответим в течение 30 минут.
                </p>
              </div>
            </div>
          </section>

          {/* Quick Actions */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Быстрые действия
                </h2>
                <p className="text-muted-foreground">
                  Выберите, что вас интересует больше всего
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {quickActions.map((action, index) => {
                  const Icon = action.icon;
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
                          <h3 className="text-xl font-semibold mb-2">
                            {action.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4">
                            {action.description}
                          </p>
                          <Button
                            variant={action.variant}
                            onClick={() => setIsModalOpen(true)}
                            className="w-full"
                          >
                            {action.buttonText}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Contact Information & Form */}
          <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16">
                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                      Способы связи
                    </h2>
                    <p className="text-muted-foreground">
                      Мы всегда на связи и готовы ответить на все ваши вопросы.
                      Выберите удобный способ общения.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {contactInfo.map((contact, index) => {
                      const Icon = contact.icon;
                      return (
                        <Card
                          key={index}
                          className="hover:shadow-md transition-shadow"
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Icon className="h-6 w-6 text-primary" />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-foreground mb-1">
                                  {contact.title}
                                </h3>
                                <div className="space-y-1 mb-3">
                                  {contact.details.map(
                                    (detail, detailIndex) => (
                                      <p
                                        key={detailIndex}
                                        className="text-sm text-muted-foreground"
                                      >
                                        {detail}
                                      </p>
                                    ),
                                  )}
                                </div>
                                {contact.actionHref !== "#" ? (
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => {
                                      if (
                                        contact.actionHref.startsWith("http")
                                      ) {
                                        window.open(
                                          contact.actionHref,
                                          "_blank",
                                        );
                                      } else {
                                        window.location.href =
                                          contact.actionHref;
                                      }
                                    }}
                                  >
                                    {contact.action}
                                  </Button>
                                ) : (
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setIsModalOpen(true)}
                                  >
                                    {contact.action}
                                  </Button>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>

                  {/* Response Time */}
                  <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                    <CardContent className="p-6 text-center space-y-3">
                      <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                        <Clock className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-green-800">
                        Быстрый отклик
                      </h3>
                      <p className="text-green-700 text-sm">
                        Отвечаем на все обращения в течение 30 минут в рабочее
                        время
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Contact Form */}
                <div>
                  <Card className="shadow-lg">
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl">Напишите нам</CardTitle>
                      <p className="text-muted-foreground">
                        Расскажите о своем проекте, и мы свяжемся с вами для
                        обсуждения деталей
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Имя *</Label>
                          <Input id="name" placeholder="Ваше имя" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Компания</Label>
                          <Input id="company" placeholder="Название компании" />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Телефон</Label>
                          <Input id="phone" placeholder="+7 (___) ___-__-__" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Интересующая услуга</Label>
                        <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                          <option value="">Выберите услугу</option>
                          <option value="bitrix-development">
                            Разработка на 1С-Битрикс
                          </option>
                          <option value="bitrix24">Внедрение Bitrix24</option>
                          <option value="support">Техническая поддержка</option>
                          <option value="upgrade">Доработка сайта</option>
                          <option value="consultation">Консультация</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="budget">Бюджет проекта</Label>
                        <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                          <option value="">Выберите бюджет</option>
                          <option value="50-100">50,000 - 100,000 ₽</option>
                          <option value="100-300">100,000 - 300,000 ₽</option>
                          <option value="300-500">300,000 - 500,000 ₽</option>
                          <option value="500+">От 500,000 ₽</option>
                          <option value="discuss">Обсудим индивидуально</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Описание проекта *</Label>
                        <Textarea
                          id="message"
                          placeholder="Расскажите подробнее о вашем проекте, целях и требованиях..."
                          rows={5}
                        />
                      </div>

                      <Button className="w-full" size="lg">
                        Отправить заявку
                        <Send className="ml-2 h-4 w-4" />
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        Нажимая кнопку, вы соглашаетесь с{" "}
                        <a
                          href="/privacy"
                          className="text-primary hover:underline"
                        >
                          политикой конфиденциальности
                        </a>{" "}
                        и{" "}
                        <a
                          href="/data-processing"
                          className="text-primary hover:underline"
                        >
                          обработкой персональных данных
                        </a>
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Часто задаваемые вопросы
                </h2>
                <p className="text-muted-foreground">
                  Ответы на популярные вопросы о наших услугах
                </p>
              </div>

              <div className="max-w-3xl mx-auto space-y-4">
                {[
                  {
                    question: "Сколько времени занимает разработка сайта?",
                    answer:
                      "Срок разработки зависит от сложности проекта. Обычно простой корпоративный сайт готов за 2-3 недели, интернет-магазин — за 1-2 месяца.",
                  },
                  {
                    question: "Предоставляете ли вы техническую поддержку?",
                    answer:
                      "Да, мы предоставляем техническую поддержку 24/7. В базовый пакет входит поддержка в рабочее время, есть также расширенные пакеты.",
                  },
                  {
                    question: "Работаете ли вы с клиентами из других городов?",
                    answer:
                      "Конечно! Мы успешно работаем с клиентами по всей России. Все вопросы решаем удаленно через видеосвязь и мессенджеры.",
                  },
                  {
                    question: "Какие гарантии вы предоставляете?",
                    answer:
                      "Мы даем гарантию на все выполненные работы сроком 12 месяцев. Также предоставляем бесплатные исправления в течение месяца после сдачи проекта.",
                  },
                ].map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground mb-2">
                        {item.question}
                      </h3>
                      <p className="text-muted-foreground">{item.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>

      <FormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Связаться с нами"
        buttonText="Отправить заявку"
      />
    </>
  );
}
