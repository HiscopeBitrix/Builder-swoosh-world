import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contacts() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Телефон",
      details: ["+7 (495) 123-45-67", "+7 (800) 555-35-35"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@bitrixpro.ru", "support@bitrixpro.ru"],
    },
    {
      icon: MapPin,
      title: "Адрес",
      details: ["г. Москва", "ул. Примерная, д. 123, офис 456"],
    },
    {
      icon: Clock,
      title: "Часы работы",
      details: ["Пн-Пт: 9:00 - 18:00", "Сб-Вс: по договоренности"],
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
                Контакты
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Свяжитесь с нами для обсуждения вашего проекта или получения
                консультации по нашим услугам
              </p>
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
                    Как с нами связаться
                  </h2>
                  <p className="text-muted-foreground">
                    Мы готовы ответить на все ваши вопросы и предложить
                    оптимальное решение для вашего бизнеса
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {contactInfo.map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                      <Card key={index}>
                        <CardContent className="p-6 space-y-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                              <Icon className="h-5 w-5 text-primary" />
                            </div>
                            <h3 className="font-semibold">{contact.title}</h3>
                          </div>
                          <div className="space-y-1">
                            {contact.details.map((detail, detailIndex) => (
                              <p
                                key={detailIndex}
                                className="text-sm text-muted-foreground"
                              >
                                {detail}
                              </p>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                {/* Quick Action */}
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6 text-center space-y-4">
                    <h3 className="text-xl font-semibold">
                      Нужна срочная консультация?
                    </h3>
                    <p className="text-muted-foreground">
                      Запишитесь на бесплатную 30-минутную консультацию с нашим
                      экспертом
                    </p>
                    <Button>Записаться на консультацию</Button>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Форма обратной связи
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Заполните форму, и мы свяжемся с вами в ближайшее время
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
                        <option value="development">Разработка сайта</option>
                        <option value="support">Техническая поддержка</option>
                        <option value="upgrade">Доработка сайта</option>
                        <option value="bitrix24">Внедрение Bitrix 24</option>
                        <option value="consultation">Консультация</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Сообщение *</Label>
                      <Textarea
                        id="message"
                        placeholder="Расскажите подробнее о вашем проекте или вопросе..."
                        rows={4}
                      />
                    </div>

                    <Button className="w-full" size="lg">
                      Отправить заявку
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Нажимая кнопку, вы соглашаетесь с обработкой персональных
                      данных
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Как нас найти
              </h2>
              <p className="text-muted-foreground">
                Наш офис находится в центре Москвы, удобно добираться на любом
                транспорте
              </p>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <MapPin className="h-12 w-12 text-primary mx-auto" />
                    <div>
                      <p className="font-semibold">Карта расположения</p>
                      <p className="text-sm text-muted-foreground">
                        г. Москва, ул. Примерная, д. 123, офис 456
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
