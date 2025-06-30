import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, ArrowRight, Clock } from "lucide-react";
import FormModal from "../FormModal";

interface ServiceCTAProps {
  gradient: string;
  serviceName: string;
}

const ServiceCTA = ({ gradient, serviceName }: ServiceCTAProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-[30px] lg:py-[50px] bg-gradient-to-br from-background via-primary/5 to-background relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - CTA Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Готовы начать проект?
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Получите персональную консультацию и расчет стоимости{" "}
                  {serviceName.toLowerCase()} для вашего бизнеса
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center`}
                  >
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Быстрый старт
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Начнем работу в течение 1-2 дней после согласования
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center`}
                  >
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Постоянная связь
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Персональный менеджер проекта на всех этапах
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center`}
                  >
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Детальная отчетность
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Еженедельные отчеты о ходе выполнения работ
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className={`group bg-gradient-to-r ${gradient} hover:opacity-90`}
                  onClick={() => setIsModalOpen(true)}
                >
                  Заказать услугу
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg">
                  Позвонить нам
                </Button>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <Card className="bg-card/80 backdrop-blur border-border shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">Обсудить проект</CardTitle>
                <p className="text-muted-foreground">
                  Оставьте заявку, и мы свяжемся с вами в течение 15 минут
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cta-name">Имя *</Label>
                    <Input
                      id="cta-name"
                      placeholder="Ваше имя"
                      className="bg-input border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cta-company">Компания</Label>
                    <Input
                      id="cta-company"
                      placeholder="Название компании"
                      className="bg-input border-border"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cta-email">Email *</Label>
                    <Input
                      id="cta-email"
                      type="email"
                      placeholder="your@email.com"
                      className="bg-input border-border"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cta-phone">Телефон *</Label>
                    <Input
                      id="cta-phone"
                      placeholder="+7 (___) ___-__-__"
                      className="bg-input border-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cta-budget">Бюджет проекта</Label>
                  <select className="flex h-10 w-full rounded-md border border-border bg-input px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    <option value="">Выберите диапазон</option>
                    <option value="50-100">50 000 - 100 000 руб.</option>
                    <option value="100-300">100 000 - 300 000 руб.</option>
                    <option value="300-500">300 000 - 500 000 руб.</option>
                    <option value="500+">От 500 000 руб.</option>
                    <option value="individual">Индивидуальный расчет</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cta-message">Комментарий к проекту</Label>
                  <Textarea
                    id="cta-message"
                    placeholder="Расскажите о ваших целях и требованиях..."
                    rows={3}
                    className="bg-input border-border"
                  />
                </div>

                <Button
                  className={`w-full bg-gradient-to-r ${gradient} hover:opacity-90`}
                  size="lg"
                  onClick={() => setIsModalOpen(true)}
                >
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
      </section>

      <FormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Заказать ${serviceName.toLowerCase()}`}
        buttonText="Отправить заявку"
      />
    </>
  );
};

export default ServiceCTA;
