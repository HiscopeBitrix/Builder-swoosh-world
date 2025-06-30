import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MessageCircle, Clock } from "lucide-react";
import FormModal from "./FormModal";

const ContactsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const contactInfo = [
    {
      icon: Phone,
      title: "Телефон",
      info: "+7 995 118 26 21",
      subInfo: "Звоните в рабочее время",
    },
    {
      icon: Mail,
      title: "Email",
      info: "info@it-mechta.ru",
      subInfo: "Отвечаем в течение часа",
    },
    {
      icon: MessageCircle,
      title: "Telegram",
      info: "@Hiscope_1",
      subInfo: "Быстрые ответы 24/7",
    },
    {
      icon: Clock,
      title: "Режим работы",
      info: "Пн-Пт: 9:00 - 18:00",
      subInfo: "Сб-Вс: по договоренности",
    },
  ];

  return (
    <>
      <section
        id="contacts-section"
        className="py-[30px] lg:py-[50px] bg-gradient-to-br from-muted/20 via-background to-accent/5 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="mb-4">
              Контакты
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Готовы обсудить ваш проект? Заполните форму или свяжитесь с нами
              любым удобным способом
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Как с нами связаться
                </h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {contactInfo.map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                      <Card
                        key={index}
                        className="hover:shadow-md transition-shadow"
                      >
                        <CardContent className="p-6 space-y-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                              <Icon className="h-5 w-5 text-primary" />
                            </div>
                            <h4 className="font-semibold">{contact.title}</h4>
                          </div>
                          <div>
                            <p className="font-medium text-foreground">
                              {contact.info}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {contact.subInfo}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Quick CTA */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-8 text-center space-y-4">
                  <h4 className="text-xl font-semibold">
                    Нужна срочная консультация?
                  </h4>
                  <p className="text-muted-foreground">
                    Позвоните нам прямо сейчас или запишитесь на бесплатную
                    30-минутную консультацию
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button onClick={() => setIsCallModalOpen(true)}>
                      <Phone className="mr-2 h-4 w-4" />
                      Заказать звонок
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setIsModalOpen(true)}
                    >
                      Записаться на консультацию
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Отправить заявку</CardTitle>
                <p className="text-muted-foreground">
                  Заполните форму, и мы свяжемся с вами в течение 30 минут
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
                    <Label htmlFor="phone">Телефон *</Label>
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
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите подробнее о вашем проекте..."
                    rows={4}
                  />
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                  size="lg"
                  onClick={() => setIsModalOpen(true)}
                >
                  Отправить заявку
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с{" "}
                  <span className="underline cursor-pointer">
                    обработкой персональн��х данных
                  </span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <FormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Отправить заявку"
        buttonText="Отправить заявку"
      />

      <FormModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
        title="Заказать звонок"
        buttonText="Заказать звонок"
      />
    </>
  );
};

export default ContactsSection;
