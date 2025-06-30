import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star } from "lucide-react";

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  badge?: string;
}

interface ServicePricingProps {
  plans: PricingPlan[];
  gradient: string;
}

const ServicePricing = ({ plans, gradient }: ServicePricingProps) => {
  return (
    <section className="py-[30px] lg:py-[50px] bg-gradient-to-br from-background via-accent/5 to-background relative">
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-cyan-500/5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-4">
            Тарифы и цены
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Прозрачные цены
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Выберите подходящий тариф для вашего проекта. Все цены указаны без
            скрытых платежей
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 ${
                plan.popular
                  ? "border-primary/50 bg-gradient-to-b from-primary/5 to-card/80 scale-105"
                  : "bg-card/80"
              } backdrop-blur overflow-hidden`}
            >
              {plan.popular && (
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`}
                ></div>
              )}

              {plan.badge && (
                <div className="absolute -top-3 right-4">
                  <Badge
                    className={`bg-gradient-to-r ${gradient} text-white border-0`}
                  >
                    <Star className="w-3 h-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">
                  {plan.name}
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  {plan.description}
                </p>

                <div className="py-4">
                  <div className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {plan.period}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? `bg-gradient-to-r ${gradient} hover:opacity-90`
                      : "bg-gradient-to-r from-muted to-muted/80 hover:from-primary/20 hover:to-primary/10"
                  }`}
                  size="lg"
                >
                  {plan.popular ? "Выбрать план" : "Подробнее"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Не нашли подходящий тариф? Мы создадим индивидуальное предложение
            специально для вас
          </p>
          <Button variant="outline" size="lg" className="hover:bg-primary/10">
            Индивидуальный расчет
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicePricing;
