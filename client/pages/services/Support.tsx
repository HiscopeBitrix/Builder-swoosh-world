import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/service-page/ServiceHero";
import WorkSteps from "@/components/service-page/WorkSteps";
import ServicePricing from "@/components/service-page/ServicePricing";
import ServiceResults from "@/components/service-page/ServiceResults";
import ServiceCTA from "@/components/service-page/ServiceCTA";
import { Zap } from "lucide-react";

export default function Support() {
  const heroData = {
    title: "Техническая поддержка сайтов на 1С-Битрикс",
    description:
      "Обеспечиваем стабильную работу ваших веб-ресурсов с круглосуточной технической поддержкой, регулярными обновлениями и мониторингом безопасности.",
    features: [
      "Мониторинг работы сайта 24/7",
      "Регулярные резервные копии",
      "Обновления безопасности",
      "Исправление ошибок и багов",
      "Оптимизация производительности",
      "Консультации по развитию",
      "Техническая поддержка по телефону",
      "Ежемесячные отчеты",
    ],
    gradient: "from-purple-500 to-purple-700",
    icon: Zap,
  };

  const workSteps = [
    {
      number: "1",
      title: "Аудит и диагностика",
      description:
        "Проводим комплексный анализ текущего состояния сайта и выявляем проблемы.",
      duration: "1-2 дня",
    },
    {
      number: "2",
      title: "Настройка мониторинга",
      description:
        "Устанавливаем системы мониторинга доступности, производительности и безопасности.",
      duration: "1 день",
    },
    {
      number: "3",
      title: "Регулярное обслуживание",
      description:
        "Выполняем плановые работы: обновления, оптимизацию, резервное копирование.",
      duration: "Постоянно",
    },
    {
      number: "4",
      title: "Отчетность и планы",
      description:
        "Предоставляем ежемесячные отчеты и рекомендации по развитию сайта.",
      duration: "Ежемесячно",
    },
  ];

  const pricingPlans = [
    {
      name: "Базовая поддержка",
      price: "от 15 000 ₽",
      period: "в месяц",
      description: "Основные услуги поддержки для небольших сайтов",
      features: [
        "Мониторинг доступности",
        "Еженедельные резервные копии",
        "Обновления безопасности",
        "Консультации по email",
        "Время реакции: 24 часа",
        "До 2 часов работ в месяц",
        "Ежемесячный отчет",
      ],
    },
    {
      name: "Стандартная",
      price: "от 35 000 ₽",
      period: "в месяц",
      description: "Расширенная поддержка для корпоративных сайтов",
      features: [
        "Мониторинг 24/7",
        "Ежедневные резе��вные копии",
        "Приоритетные обновления",
        "Телефонная поддержка",
        "Время реакции: 4 часа",
        "До 8 часов работ в месяц",
        "Оптимизация производительности",
        "Детальная аналитика",
      ],
      popular: true,
      badge: "Популярный",
    },
    {
      name: "Премиум",
      price: "от 65 000 ₽",
      period: "в месяц",
      description: "Максимальная поддержка для критичных проектов",
      features: [
        "Персональный менеджер",
        "Мониторинг в реальном времени",
        "Мгновенные уведомления",
        "Время реакции: 1 час",
        "До 20 часов работ в месяц",
        "Проактивная оптимизация",
        "Консультации по развитию",
        "SLA 99.9% uptime",
      ],
    },
  ];

  const results = [
    {
      icon: "⚡",
      title: "Время отклика",
      description:
        "Среднее время реакции на критические проблемы составляет менее часа",
      metric: "< 1 час",
    },
    {
      icon: "🛡️",
      title: "Uptime",
      description: "Гарантируем стабильную работу сайта 99.9% времени",
      metric: "99.9%",
    },
    {
      icon: "🚀",
      title: "Производительность",
      description:
        "Регулярная оптимизация улучшает скорость загрузки сайта на 40%",
      metric: "+40%",
    },
    {
      icon: "💾",
      title: "Резервные копии",
      description: "Ежедневное создание резервных копий для защиты данных",
      metric: "365/год",
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
          serviceName="техническую поддержку"
        />
      </main>
      <Footer />
    </div>
  );
}
