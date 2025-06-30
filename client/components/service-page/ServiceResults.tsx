import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Result {
  icon: string;
  title: string;
  description: string;
  metric?: string;
}

interface ServiceResultsProps {
  results: Result[];
  gradient: string;
  title?: string;
  description?: string;
}

const ServiceResults = ({
  results,
  gradient,
  title = "Результат работы",
  description = "Что вы получите после завершения проекта",
}: ServiceResultsProps) => {
  return (
    <section className="py-[30px] lg:py-[50px] bg-gradient-to-br from-muted/20 via-background to-accent/5 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-cyan-500/5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-4">
            Результат
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((result, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur text-center"
            >
              <CardContent className="p-8 space-y-6">
                {/* Icon */}
                <div
                  className={`mx-auto w-20 h-20 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform shadow-lg`}
                >
                  {result.icon}
                </div>

                {/* Metric */}
                {result.metric && (
                  <div
                    className={`text-3xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
                  >
                    {result.metric}
                  </div>
                )}

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    {result.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {result.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Дополнительные преимущества
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div
                    className={`w-2 h-2 bg-gradient-to-r ${gradient} rounded-full`}
                  ></div>
                  <span>Гарантия на все работы 12 месяцев</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div
                    className={`w-2 h-2 bg-gradient-to-r ${gradient} rounded-full`}
                  ></div>
                  <span>Бесплатное обучение сотрудников</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div
                    className={`w-2 h-2 bg-gradient-to-r ${gradient} rounded-full`}
                  ></div>
                  <span>Техническая поддержка 24/7</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServiceResults;
