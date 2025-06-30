import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/service-page/ServiceHero";
import WorkSteps from "@/components/service-page/WorkSteps";
import ServicePricing from "@/components/service-page/ServicePricing";
import ServiceResults from "@/components/service-page/ServiceResults";
import ServiceCTA from "@/components/service-page/ServiceCTA";
import { BarChart } from "lucide-react";

export default function Analytics() {
  const heroData = {
    title: "Аналитика и отчетность в Bitrix24",
    description:
      "Создаем систему аналитики и отчетности для контроля эффективности бизнес-процессов, KPI команды и принятия обоснованных решений.",
    features: [
      "Дашборды для руководителей",
      "KPI метрики и показатели",
      "Автоматические отчеты",
      "Воронки продаж аналитика",
      "Отчеты по сотрудникам",
      "Финансовая аналитика",
      "Прогнозирование продаж",
      "Мобильные отчеты",
    ],
    gradient: "from-emerald-500 to-teal-600",
    icon: BarChart,
  };

  const workSteps = [
    {
      number: "1",
      title: "Определение KPI",
      description:
        "Анализируем бизнес-цели и определяем ключевые метрики для отслеживания.",
      duration: "2-3 дня",
    },
    {
      number: "2",
      title: "Настройка дашбордов",
      description:
        "Создаем персонализированные дашборды для разных ролей и уровней управления.",
      duration: "3-5 дней",
    },
    {
      number: "3",
      title: "Автоматизация отчетов",
      description:
        "Настраиваем автоматическую генерацию и рассылку отчетов по расписанию.",
      duration: "2-3 дня",
    },
    {
      number: "4",
      title: "Обучение и оптимизация",
      description:
        "Обучаем команду работе с аналитикой и оптимизируем показатели.",
      duration: "1-2 дня",
    },
  ];

  const pricingPlans = [
    {
      name: "Базовая аналитика",
      price: "от 65 000 ₽",
      period: "под ключ",
      description: "Основные отчеты и KPI для малого бизнеса",
      features: [
        "5 основных дашбордов",
        "Базовые KPI метрики",
        "Еженедельные отчеты",
        "Воронка продаж",
        "Отчеты по менеджерам",
        "Обучение 2 сотрудников",
        "Поддержка 1 месяц",
      ],
    },
    {
      name: "Расширенная",
      price: "от 150 000 ₽",
      period: "под ключ",
      description: "Комплексная система аналитики",
      features: [
        "15+ дашбордов",
        "Расширенные KPI",
        "Автоматические отчеты",
        "Прогнозирование",
        "Сравнительная аналитика",
        "Мобильные отчеты",
        "Обучение команды",
        "Поддержка 3 месяца",
      ],
      popular: true,
      badge: "Популярный",
    },
    {
      name: "Корпоративная",
      price: "от 280 000 ₽",
      period: "под ключ",
      description: "Продвинутая аналитика для крупного бизнеса",
      features: [
        "Неограниченные дашборды",
        "Кастомные метрики",
        "BI интеграции",
        "Предиктивная аналитика",
        "Интеграция с внешними системами",
        "API для выгрузки данных",
        "Персональный аналитик",
        "Поддержка 6 месяцев",
      ],
    },
  ];

  const results = [
    {
      icon: "📊",
      title: "Видимость процессов",
      description:
        "Полная прозрачность всех бизнес-процессов в реальном времени",
      metric: "100%",
    },
    {
      icon: "⚡",
      title: "Скорость принятия решений",
      description: "Быстрое получение данных для принятия обоснованных решений",
      metric: "в 3 раза",
    },
    {
      icon: "🎯",
      title: "Достижение KPI",
      description:
        "Контроль показателей повышает достижение плановых результатов",
      metric: "+35%",
    },
    {
      icon: "💰",
      title: "ROI проектов",
      description:
        "Точная аналитика помогает выбирать наиболее прибыльные направления",
      metric: "+50%",
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
          serviceName="систему аналитики"
        />
      </main>
      <Footer />
    </div>
  );
}
