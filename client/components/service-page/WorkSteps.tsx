import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Step {
  number: string;
  title: string;
  description: string;
  duration: string;
}

interface WorkStepsProps {
  steps: Step[];
  gradient: string;
}

const WorkSteps = ({ steps, gradient }: WorkStepsProps) => {
  return (
    <section className="py-[30px] lg:py-[50px] bg-gradient-to-br from-muted/20 via-background to-primary/5 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="mb-4">
            Этапы работы
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Как мы работаем
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Проверенная методология разработки, которая гарантирует качественный
            результат в срок
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-muted via-primary/20 to-muted transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur"
              >
                {/* Step Number */}
                <div
                  className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                >
                  {step.number}
                </div>

                <CardContent className="pt-8 pb-6 px-6 text-center space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>

                  <Badge variant="secondary" className="text-xs">
                    {step.duration}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSteps;
