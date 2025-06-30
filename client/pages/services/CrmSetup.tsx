import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/service-page/ServiceHero";
import WorkSteps from "@/components/service-page/WorkSteps";
import ServicePricing from "@/components/service-page/ServicePricing";
import ServiceResults from "@/components/service-page/ServiceResults";
import ServiceCTA from "@/components/service-page/ServiceCTA";
import { Users } from "lucide-react";

export default function CrmSetup() {
  const heroData = {
    title: "CRM внедрение и настройка Bitrix24",
    description:
      "Настраиваем CRM систему Bitrix24 для эффективного управления клиентами, автоматизации продаж и повышения прибыльности вашего бизнеса.",
    features: [
      "Настройка воронок продаж",
      "Автоматизация лид-менеджмента",
      "Интеграция с сайтом",
      "Настройка карточек клиентов",
      "Системы уведомлений",
      "Отчеты и аналитика",
      "Обучение сотрудников",
      "Мобильное приложение",
    ],
    gradient: "from-cyan-500 to-blue-600",
    icon: Users,
  };

  const workSteps = [
    {
      number: "1",
      title: "Анализ бизнес-процессов",
      description:
        "Изучаем текущие процессы продаж и определяем точки роста эффективности.",
      duration: "3-5 дней",
    },
    {
      number: "2",
      title: "Настройка CRM",
      description:
        "Конфигурируем Bitrix24 под специфику вашего бизнеса и создаем воронки продаж.",
      duration: "5-7 дней",
    },
    {
      number: "3",
      title: "Интеграции и автоматизация",
      description:
        "Подключаем внешние сервисы и настраиваем автоматические процессы.",
      duration: "3-5 дней",
    },
    {
      number: "4",
      title: "Обучение и запуск",
      description:
        "Обучаем команду работе с системой и запускаем CRM в эксплуатацию.",
      duration: "2-3 дня",
    },
  ];

  const pricingPlans = [
    {
      name: "Стартовый CRM",
      price: "от 80 000 ₽",
      period: "под ключ",
      description: "Базовая настройка CRM для малого бизнеса",
      features: [
        "1 воронка продаж",
        "Настройка карточек клиентов",
        "Базовые отчеты",
        "Интеграция с сайтом",
        "Обучение 2 сотрудников",
        "Техподдержка 1 месяц",
        "Время внедрения: 1 неделя",
      ],
    },
    {
      name: "Профессиональный",
      price: "от 180 000 ₽",
      period: "под ключ",
      description: "Полная настройка CRM с автоматизацией",
      features: [
        "Множественные воронки",
        "Автоматизация процессов",
        "Расширенная аналитика",
        "Email и SMS интеграции",
        "Настройка мобильного приложения",
        "Обучение команды до 10 человек",
        "Техподдержка 3 месяца",
        "Время внедрения: 2-3 недели",
      ],
      popular: true,
      badge: "Рекомендуем",
    },
    {
      name: "Корпоративный",
      price: "от 350 000 ₽",
      period: "под ключ",
      description: "Комплексная CRM система для крупного бизнеса",
      features: [
        "Сложные бизнес-процессы",
        "Интеграция с 1С и ERP",
        "Настройка ролей и прав",
        "Кастомные поля и формы",
        "API интеграции",
        "Неограниченное обучение",
        "Персональный менеджер проекта",
        "Техподдержка 6 месяцев",
      ],
    },
  ];

  const results = [
    {
      icon: "📊",
      title: "Рост продаж",
      description:
        "Автоматизация процессов увеличивает количество закрытых сделок",
      metric: "+40%",
    },
    {
      icon: "⏱️",
      title: "Экономия времени",
      description: "Автоматизация рутинных задач экономит время менеджеров",
      metric: "5 ч/день",
    },
    {
      icon: "🎯",
      title: "Конверсия лидов",
      description:
        "Структурированная работа с лидами повышает их конверсию в клиентов",
      metric: "+65%",
    },
    {
      icon: "📈",
      title: "Прозрачность",
      description: "Руководитель получает полную картину по продажам",
      metric: "100%",
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
        <ServiceCTA gradient={heroData.gradient} serviceName="внедрение CRM" />
      </main>
      <Footer />
    </div>
  );
}
