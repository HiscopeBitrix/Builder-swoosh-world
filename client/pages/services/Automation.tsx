import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/service-page/ServiceHero";
import WorkSteps from "@/components/service-page/WorkSteps";
import ServicePricing from "@/components/service-page/ServicePricing";
import ServiceResults from "@/components/service-page/ServiceResults";
import ServiceCTA from "@/components/service-page/ServiceCTA";
import { Workflow } from "lucide-react";

export default function Automation() {
  const heroData = {
    title: "Автоматизация бизнес-процессов в Bitrix24",
    description:
      "Автоматизируем рутинные задачи и настраиваем бизнес-процессы в Bitrix24 для повышения производительности команды и исключения человеческих ошибок.",
    features: [
      "Роботы для автоматизации",
      "Бизнес-процессы и workflow",
      "Автоматические уведомления",
      "Триггеры и условия",
      "Автоматизация email-рассылок",
      "Интеграция с внешними сервисами",
      "Планировщик задач",
      "Автоматические отчеты",
    ],
    gradient: "from-violet-500 to-purple-600",
    icon: Workflow,
  };

  const workSteps = [
    {
      number: "1",
      title: "Анализ процессов",
      description:
        "Изучаем существующие рабочие процессы и выявляем возможности для автоматизации.",
      duration: "2-4 дня",
    },
    {
      number: "2",
      title: "Дизайн автоматизации",
      description:
        "Проектируем схему автоматизации и определяем триггеры и действия.",
      duration: "2-3 дня",
    },
    {
      number: "3",
      title: "Настройка роботов",
      description:
        "Создаем и настраиваем роботов и бизнес-процессы в Bitrix24.",
      duration: "3-7 дней",
    },
    {
      number: "4",
      title: "Тестирование и запуск",
      description:
        "Тестируем работу автоматизации и запускаем процессы в производство.",
      duration: "1-2 дня",
    },
  ];

  const pricingPlans = [
    {
      name: "Базовая автоматизация",
      price: "от 45 000 ₽",
      period: "под ключ",
      description: "Автоматизация основных процессов",
      features: [
        "До 5 роботов",
        "Автоматические уведомления",
        "Простые бизнес-процессы",
        "Email автоматизация",
        "Базовые триггеры",
        "Документация процессов",
        "Поддержка 1 месяц",
      ],
    },
    {
      name: "Расширенная",
      price: "от 120 000 ₽",
      period: "под ключ",
      description: "Комплексная автоматизация бизнеса",
      features: [
        "До 15 роботов",
        "Сложные бизнес-процессы",
        "Условная логика",
        "Интеграция с внешними API",
        "Автоматизация документооборота",
        "Обучение команды",
        "Поддержка 3 месяца",
      ],
      popular: true,
      badge: "Рекомендуем",
    },
    {
      name: "Корпоративная",
      price: "от 250 000 ₽",
      period: "под ключ",
      description: "Полная автоматизация предприятия",
      features: [
        "Неограниченное количество роботов",
        "Многоэтапные процессы",
        "Кастомные решения",
        "ERP интеграции",
        "Мультиканальная автоматизация",
        "Персональный консультант",
        "Поддержка 6 месяцев",
      ],
    },
  ];

  const results = [
    {
      icon: "⚡",
      title: "Экономия времени",
      description:
        "Автоматизация рутинных задач экономит до 30% рабочего времени сотрудников",
      metric: "30%",
    },
    {
      icon: "🎯",
      title: "Точность процессов",
      description: "Исключение человеческого фактора снижает количество ошибок",
      metric: "-90%",
    },
    {
      icon: "🚀",
      title: "Скорость обработки",
      description: "Автоматические процессы работают в 10 раз быстрее",
      metric: "10x",
    },
    {
      icon: "💰",
      title: "ROI автоматизации",
      description: "Инвестиции в автоматизацию окупаются в течение 6-8 месяцев",
      metric: "300%",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServiceHero {...heroData} />
        <WorkSteps steps={workSteps} gradient={heroData.gradient} />
        <ServicePricing plans={pricingPlans} gradient={heroData.gradient} />
        <ServiceResults results={results} gradient={heroData.gradient} />
        <ServiceCTA
          gradient={heroData.gradient}
          serviceName="автоматизацию процессов"
        />
      </main>
      <Footer />
    </div>
  );
}
