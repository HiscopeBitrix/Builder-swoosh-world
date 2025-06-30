import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceHero from "@/components/service-page/ServiceHero";
import WorkSteps from "@/components/service-page/WorkSteps";
import ServicePricing from "@/components/service-page/ServicePricing";
import ServiceResults from "@/components/service-page/ServiceResults";
import ServiceCTA from "@/components/service-page/ServiceCTA";
import { Wrench } from "lucide-react";

export default function Ecommerce() {
  const heroData = {
    title: "Интернет-магазины на 1С-Битрикс",
    description:
      "Разрабатываем полнофункциональные интернет-магазины с интеграцией платежных систем, системой управления заказами и аналитикой продаж.",
    features: [
      "Каталог товаров с фильтрами",
      "Корзина и система заказов",
      "Интеграция с платежными системами",
      "Личный кабинет покупателя",
      "Система скидок и акций",
      "Интеграция с 1С:Управление торговлей",
      "Мобильная версия",
      "SEO-оптимизация для товаров",
    ],
    gradient: "from-green-500 to-green-700",
    icon: Wrench,
  };

  const workSteps = [
    {
      number: "1",
      title: "Анализ бизнес-модели",
      description:
        "Изучаем ваш товарный ассортимент, целевую аудиторию и особенности продаж.",
      duration: "3-5 дней",
    },
    {
      number: "2",
      title: "UX/UI дизайн магазина",
      description:
        "Создаем удобный интерфейс с акцентом на конверсию и пользовательский опыт.",
      duration: "7-14 дней",
    },
    {
      number: "3",
      title: "Разработка и интеграции",
      description:
        "Программируем магазин, настраиваем платежи и интегрируем с учетными системами.",
      duration: "21-30 дней",
    },
    {
      number: "4",
      title: "Тестирование и запуск",
      description:
        "Проводим нагрузочное тестирование, настраиваем аналитику и запускаем продажи.",
      duration: "3-5 дней",
    },
  ];

  const pricingPlans = [
    {
      name: "Базовый магазин",
      price: "от 250 000 ₽",
      period: "под ключ",
      description: "Простой интернет-магазин для малого бизнеса",
      features: [
        "До 500 товаров",
        "Базовый каталог с фильтрами",
        "Корзина и оформление заказов",
        "2-3 способа оплаты",
        "Личный кабинет покупателя",
        "Адаптивный дизайн",
        "Базовая SEO-оптимизация",
        "Поддержка 3 месяца",
      ],
    },
    {
      name: "Профессиональный",
      price: "от 450 000 ₽",
      period: "под ключ",
      description: "Полнофункциональный интернет-магазин",
      features: [
        "До 5000 товаров",
        "Расширенный каталог",
        "Система скидок и промокодов",
        "Множественные способы оплаты",
        "Интеграция с 1С",
        "Система отзывов и рейтингов",
        "Программа лояльности",
        "Аналитика продаж",
        "Поддержка 6 месяцев",
      ],
      popular: true,
      badge: "Рекомендуем",
    },
    {
      name: "Корпоративный",
      price: "от 800 000 ₽",
      period: "под ключ",
      description: "Высоконагруженный магазин с интеграциями",
      features: [
        "Неограниченное количество товаров",
        "B2B и B2C продажи",
        "Мультивалютность",
        "Складской учет в реальном времени",
        "CRM интеграция",
        "Маркетплейс функционал",
        "API для мобильных приложений",
        "Dedicated серверы",
        "Поддержка 12 месяцев",
      ],
    },
  ];

  const results = [
    {
      icon: "💰",
      title: "Рост продаж",
      description:
        "Средний рост онлайн-продаж на 200% в первый год работы магазина",
      metric: "+200%",
    },
    {
      icon: "🛒",
      title: "Конверсия",
      description:
        "Оптимизированная воронка продаж ��величивает конверсию посетителей",
      metric: "3.5%",
    },
    {
      icon: "📱",
      title: "Мобильный трафик",
      description: "Адаптивный дизайн обеспечивает удобные покупки с телефона",
      metric: "60%",
    },
    {
      icon: "⚡",
      title: "Время загрузки",
      description: "Быстрая работа магазина снижает отказы и повышает продажи",
      metric: "< 2 сек",
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
          serviceName="разработку интернет-магазина"
        />
      </main>
      <Footer />
    </div>
  );
}
