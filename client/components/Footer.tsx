import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import FormModal from "./FormModal";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const navigation = {
    services: [
      { name: "1С-Битрикс разработка", href: "/services#bitrix" },
      { name: "Bitrix 24 внедрение", href: "/services#bitrix24" },
      { name: "Техническая поддержка", href: "/services#support" },
      { name: "Доработка сайтов", href: "/services#upgrade" },
    ],
    company: [
      { name: "О компании", href: "#about" },
      { name: "Портфолио", href: "/portfolio" },
      { name: "Контакты", href: "/contacts" },
      { name: "Отзывы клиентов", href: "/portfolio#testimonials" },
    ],
    legal: [
      { name: "Политика конфиденциальности", href: "/privacy" },
      { name: "Пользовательское соглашение", href: "/terms" },
      { name: "Обработка данных", href: "/data-processing" },
    ],
  };

  const contactInfo = [
    { icon: Phone, text: "+7 (495) 123-45-67" },
    { icon: Mail, text: "info@it-mechta.ru" },
    { icon: Clock, text: "Пн-Пт: 9:00 - 18:00" },
  ];

  return (
    <>
      <footer className="bg-card border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
              <Link to="/" className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">
                    1C
                  </span>
                </div>
                <span className="font-bold text-xl text-foreground">
                  IT-Мечта
                </span>
              </Link>
              <p className="text-muted-foreground text-sm">
                Профессиональная разработка и внедрение решений на платформе
                1С-Битрикс. Помогаем бизнесу расти и развиваться с помощью
                современных веб-технологий.
              </p>
              <div className="space-y-2">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Услуги</h3>
              <ul className="space-y-2">
                {navigation.services.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Компания</h3>
              <ul className="space-y-2">
                {navigation.company.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">
                Начать проект
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Готовы обсудить ваш проект? Свяжитесь с нами для получения
                персональной консультации.
              </p>
              <div className="space-y-2">
                <Button className="w-full" onClick={() => setIsModalOpen(true)}>
                  Получить консультацию
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setIsCallModalOpen(true)}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Заказать звонок
                </Button>
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={() =>
                    window.open("https://t.me/it_mechta_support", "_blank")
                  }
                >
                  Написать в Telegram
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-muted-foreground">
                © 2024 IT-Мечта. Все права защищены.
              </div>
              <div className="flex flex-wrap gap-4">
                {navigation.legal.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      <FormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Получить консультацию"
        buttonText="Отправить заявку"
      />

      <FormModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
        title="Заказать звонок"
        buttonText="Заказать звонок"
      />
    </>
  );
};

export default Footer;
