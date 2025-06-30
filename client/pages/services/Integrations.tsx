import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/service-page/ServiceHero";
import WorkSteps from "@/components/service-page/WorkSteps";
import ServicePricing from "@/components/service-page/ServicePricing";
import ServiceResults from "@/components/service-page/ServiceResults";
import ServiceCTA from "@/components/service-page/ServiceCTA";
import { Building } from "lucide-react";

export default function Integrations() {
  const heroData = {
    title: "Интеграции Bitrix24 с внешними системами",
    description:
      "Интегрируем Bitrix24 с внешними системами, API и сервисами для создания единой экосистемы управления бизнесом и автоматического обмена данными.",
    features: [
      "API интеграции с любыми сервисами",
      "Синхронизация данных",
      "Webhook настройка",
      "1С интеграция",
      "Email платформы",
      "Социальные сети",
      "Платежные системы",
      "Телефония и IP-ATC",
    ],
    gradient: "from-rose-500 to-pink-600",
    icon: Building,
  };

  const workSteps = [
    {
      number: "1",
      title: "Анализ систем",
      description:
        "Изучаем текущую IT-инфраструктуру и определяем необходимые интеграции.",
      duration: "2-3 дня",
    },
    {
      number: "2",
      title: "Техническое планирование",
      description:
        "Разрабатываем схему интеграции и техническое задание для подключения.",
      duration: "1-2 дня",
    },
    {
      number: "3",
      title: "Разработка и настройка",
      description:
        "Программируем интеграционные решения и настраиваем обмен данными.",
      duration: "5-15 дней",
    },
    {
      number: "4",
      title: "Тестирование и мониторинг",
      description:
        "Тестируем стабильность работы и настраиваем мониторинг интеграций.",
      duration: "1-2 дня",
    },
  ];

  const pricingPlans = [
    {
      name: "Простые интеграции",
      price: "от 35 000 ₽",
      period: "за интеграцию",
      description: "Подключение популярных сервисов",
      features: [
        "Email платформы (Gmail, Outlook)",
        "Социальные сети",
        "Мессенджеры (WhatsApp, Telegram)",
        "Простые API подключения",
        "Базовая синхронизация",
        "Документация",
        "Поддержка 1 месяц",
      ],
    },
    {
      name: "Сложные интеграции",
      price: "от 85 000 ₽",
      period: "за интеграцию",
      description: "Интеграция с корпоративными системами",
      features: [
        "1С:Предприятие интеграция",
        "ERP системы",
        "Складские программы",
        "IP-телефония",
        "Платежные системы",
        "Двусторонняя синхронизация",
        "Webhook настройка",
        "Поддержка 3 месяца",
      ],
      popular: true,
      badge: "Популярный",
    },
    {
      name: "Корпоративные",
      price: "от 200 000 ₽",
      period: "за проект",
      description: "Комплексная интеграция экосистемы",
      features: [
        "Множественные интеграции",
        "Кастомные API решения",
        "Высоконагруженные интеграции",
        "Микросервисная архитектура",
        "Мониторинг и логирование",
        "SLA гарантии",
        "Персональная поддержка",
        "Поддержка 6 месяцев",
      ],
    },
  ];

  const results = [
    {
      icon: "🔄",
      title: "Автоматизация",
      description:
        "Автоматический обмен данными между системами исключает ручной ввод",
      metric: "100%",
    },
    {
      icon: "⚡",
      title: "Скорость обработки",
      description: "Мгновенная синхронизация данных между всеми системами",
      metric: "< 1 сек",
    },
    {
      icon: "📊",
      title: "Единая отчетность",
      description: "Консолидированные данные из всех систем в одном интерфейсе",
      metric: "360°",
    },
    {
      icon: "💡",
      title: "Продуктивность",
      description:
        "Сотрудники тратят на 70% меньше времени на работу с данными",
      metric: "+70%",
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
          serviceName="интеграционные решения"
        />
      </main>
      <Footer />
    </div>
  );
}
