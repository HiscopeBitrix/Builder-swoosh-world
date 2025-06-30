import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/service-page/ServiceHero";
import WorkSteps from "@/components/service-page/WorkSteps";
import ServicePricing from "@/components/service-page/ServicePricing";
import ServiceResults from "@/components/service-page/ServiceResults";
import ServiceCTA from "@/components/service-page/ServiceCTA";
import { Code } from "lucide-react";

export default function CorporateSites() {
  const heroData = {
    title: "Разрабо��ка корпоративных сайтов на 1С-Битрикс",
    description:
      "Создаем современные корпоративные сайты, которые эффективно представляют ваш бизнес и привлекают новых клиентов. Используем только проверенные решения на платформе 1С-Битрикс.",
    features: [
      "Адаптивный дизайн под все устройства",
      "SEO-оптимизация для поисковых систем",
      "Интеграция с CRM системами",
      "Система управления контентом",
      "Многоязычная поддержка",
      "Высокая скорость загрузки",
      "Безопасность и защита данных",
      "Аналитика и метрики",
    ],
    gradient: "from-blue-500 to-blue-700",
    icon: Code,
  };

  const workSteps = [
    {
      number: "1",
      title: "Анализ и планирование",
      description:
        "Изучаем ваш бизнес, целевую аудиторию и задачи. Создаем техническое задание и план проекта.",
      duration: "3-5 дней",
    },
    {
      number: "2",
      title: "Дизайн и прототипирование",
      description:
        "Разрабатываем уникальный дизайн сайта с учетом фирменного стиля вашей компании.",
      duration: "7-10 дней",
    },
    {
      number: "3",
      title: "Разработка и программирование",
      description:
        "Создаем функциональный сайт на платформе 1С-Битрикс с необходимыми модулями.",
      duration: "14-21 день",
    },
    {
      number: "4",
      title: "Тестирование и запуск",
      description:
        "Проводим комплексное тестирование, настраиваем хостинг и запускаем сайт в работу.",
      duration: "2-3 дня",
    },
  ];

  const pricingPlans = [
    {
      name: "Стартовый",
      price: "от 150 000 ₽",
      period: "под ключ",
      description: "Базовый корпоративный сайт для малого бизнеса",
      features: [
        "До 10 страниц контента",
        "Адаптивный дизайн",
        "Базовая SEO-оптимизация",
        "Форма обратной связи",
        "Интеграция с социальными сетями",
        "Панель администратора",
        "Техническая поддержка 3 месяца",
      ],
    },
    {
      name: "Корпоративный",
      price: "от 350 000 ₽",
      period: "под ключ",
      description: "Полнофункциональный корпоративный сайт",
      features: [
        "До 30 страниц контента",
        "Уникальный дизайн",
        "Расширенная SEO-оптимизация",
        "Каталог продукции/услуг",
        "Система новостей и статей",
        "Личный кабинет пользователей",
        "Интеграция с CRM",
        "Многоязычность",
        "Аналитика и отчеты",
        "Техническая поддержка 6 месяцев",
      ],
      popular: true,
      badge: "Популярный",
    },
    {
      name: "Премиум",
      price: "от 600 000 ₽",
      period: "под ключ",
      description: "Сложн��й корпоративный портал с интеграциями",
      features: [
        "Неограниченное количество страниц",
        "Премиум дизайн и UX",
        "Профессиональная SEO-оптимизация",
        "Сложные интеграции и API",
        "Корпоративный портал",
        "Система документооборота",
        "Мобильное приложение",
        "Высоконагруженная архитектура",
        "Dedic серверы и CDN",
        "Техническая поддержка 12 месяцев",
      ],
    },
  ];

  const results = [
    {
      icon: "📈",
      title: "Увеличение трафика",
      description:
        "Средний рост органического трафика на 150% в течение первых 6 месяцев",
      metric: "+150%",
    },
    {
      icon: "🎯",
      title: "Конверсия в лиды",
      description:
        "Оптимизированные формы и призывы к действию повышают конверсию",
      metric: "+85%",
    },
    {
      icon: "⚡",
      title: "Скорость загрузки",
      description:
        "Оптимизированный код и современные технологии обеспечивают быструю работу",
      metric: "< 3 сек",
    },
    {
      icon: "🛡️",
      title: "Безопасность",
      description: "Защита от взломов, регулярные обновления безопасности",
      metric: "99.9%",
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
          serviceName="разработку корпоративного сайта"
        />
      </main>
      <Footer />
    </div>
  );
}
