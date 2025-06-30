import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/service-page/ServiceHero";
import WorkSteps from "@/components/service-page/WorkSteps";
import ServicePricing from "@/components/service-page/ServicePricing";
import ServiceResults from "@/components/service-page/ServiceResults";
import ServiceCTA from "@/components/service-page/ServiceCTA";
import { Settings } from "lucide-react";

export default function Development() {
  const heroData = {
    title: "Доработка существующих сайтов на 1С-Битрикс",
    description:
      "Расширяем функционал существующих сайтов, добавляем новые модули, интеграции и возможности для повышения эффективности вашего бизнеса.",
    features: [
      "Добавление новых разделов",
      "Интеграция с внешними сервисами",
      "Оптимизация производительности",
      "Доработка дизайна",
      "Мобильная адаптация",
      "SEO-улучшения",
      "Системы аналитики",
      "Автоматизация процессов",
    ],
    gradient: "from-orange-500 to-orange-700",
    icon: Settings,
  };

  const workSteps = [
    {
      number: "1",
      title: "Анализ текущего сайта",
      description:
        "Проводим аудит существующего функционала и определяем возможности для улучшений.",
      duration: "2-3 дня",
    },
    {
      number: "2",
      title: "Планирование доработок",
      description:
        "Составляем техническое задание и план реализации новых возможностей.",
      duration: "1-2 дня",
    },
    {
      number: "3",
      title: "Разработка и интеграция",
      description:
        "Программируем новый функционал с учетом существующей архитектуры сайта.",
      duration: "5-15 дней",
    },
    {
      number: "4",
      title: "Тестирование и внедрение",
      description:
        "Тестируем совместимость и плавно внедряем изменения без остановки работы.",
      duration: "1-2 дня",
    },
  ];

  const pricingPlans = [
    {
      name: "Мелкие доработки",
      price: "от 25 000 ₽",
      period: "за задачу",
      description: "Небольшие улучшения и исправления",
      features: [
        "Исправление ошибок",
        "Мелкие доработки дизайна",
        "Добавление простых форм",
        "Оптимизация контента",
        "Настройка SEO",
        "Время выполнения: 1-3 дня",
        "Гарантия 1 месяц",
      ],
    },
    {
      name: "Средние доработки",
      price: "от 85 000 ₽",
      period: "за проект",
      description: "Добавление нового функционала",
      features: [
        "Новые разделы сайта",
        "Интеграции с внешними API",
        "Системы фильтрации",
        "Личные кабинеты",
        "Мобильная адаптация",
        "Время выполнения: 1-2 недели",
        "Тестирование",
        "Гарантия 3 месяца",
      ],
      popular: true,
      badge: "Популярный",
    },
    {
      name: "Крупные доработки",
      price: "от 200 000 ₽",
      period: "за проект",
      description: "Комплексная модернизация сайта",
      features: [
        "Архитектурные изменения",
        "Комплексные интеграции",
        "Высоконагруженные решения",
        "Мультиязычность",
        "CRM интеграция",
        "Системы аналитики",
        "Время выполнения: 1-2 месяца",
        "Гарантия 6 месяцев",
      ],
    },
  ];

  const results = [
    {
      icon: "⚡",
      title: "Производительность",
      description:
        "Оптимизация кода и архитектуры увеличивает скорость работы сайта",
      metric: "+60%",
    },
    {
      icon: "👥",
      title: "Удобство",
      description: "Улучшение пользовательского опыта повышает время на сайте",
      metric: "+45%",
    },
    {
      icon: "📈",
      title: "Конверсия",
      description:
        "Новый функционал увеличивает конверсию посетителей в клиентов",
      metric: "+30%",
    },
    {
      icon: "🔧",
      title: "Автоматизация",
      description:
        "Автоматизация процессов экономит до 20 часов работы в неделю",
      metric: "20 ч/нед",
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
          serviceName="доработку сайта"
        />
      </main>
      <Footer />
    </div>
  );
}
