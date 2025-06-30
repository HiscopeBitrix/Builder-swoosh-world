import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, CheckCircle } from "lucide-react";

interface ServiceHeroProps {
  title: string;
  description: string;
  features: string[];
  gradient: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ServiceHero = ({
  title,
  description,
  features,
  gradient,
  icon: Icon,
}: ServiceHeroProps) => {
  return (
    <section className="py-[50px] lg:py-[80px] bg-gradient-to-br from-background via-background to-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5"></div>
      <div
        className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradient}`}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div
                className={`w-20 h-20 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-xl`}
              >
                <Icon className="h-10 w-10 text-white" />
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                {title}
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                Что входит в услугу:
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className={`group bg-gradient-to-r ${gradient} hover:opacity-90`}
              >
                Заказать услугу
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Получить консультацию
              </Button>
            </div>
          </div>

          {/* Form */}
          <Card className="bg-card/80 backdrop-blur border-border shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl">
                Получить расчет стоимости
              </CardTitle>
              <p className="text-muted-foreground">
                Заполните форму, и мы свяжемся с вами в течение 30 минут
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя *</Label>
                  <Input
                    id="name"
                    placeholder="Ваше имя"
                    className="bg-input border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Компания</Label>
                  <Input
                    id="company"
                    placeholder="Название компании"
                    className="bg-input border-border"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-input border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    placeholder="+7 (___) ___-__-__"
                    className="bg-input border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Описание проекта</Label>
                <Textarea
                  id="message"
                  placeholder="Расскажите подробнее о ваших потребностях..."
                  rows={4}
                  className="bg-input border-border"
                />
              </div>

              <Button
                className={`w-full bg-gradient-to-r ${gradient} hover:opacity-90`}
                size="lg"
              >
                Получить расчет
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
