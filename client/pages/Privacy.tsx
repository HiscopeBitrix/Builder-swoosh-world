import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                Политика конфиденциальности
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Мы серьезно относимся к защите ваших персональных данных и
                соблюдаем все требования законодательства
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
              <Card>
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      1. Общие положения
                    </h2>
                    <p className="text-muted-foreground">
                      Настоящая Политика конфиденциальности определяет порядок
                      обработки персональных данных пользователей сайта
                      IT-Мечта. Политика действует в отношении всей информации,
                      которую IT-Мечта может получить о пользователе во время
                      использования им сайта.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      2. Собираемая информация
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Мы можем собирать следующие категории персональных данных:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Имя и фамилия</li>
                      <li>Адрес электронной почты</li>
                      <li>Номер телефона</li>
                      <li>Название компании</li>
                      <li>
                        Сообщения, отправленные через формы обратной связи
                      </li>
                      <li>
                        Техническая информация: IP-адрес, тип браузера, данные о
                        посещениях
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      3. Цели обработки данных
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Ваши персональные данные обрабатываются в следующих целях:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Обработка заявок и консультаций</li>
                      <li>Предоставление услуг по разработке и поддержке</li>
                      <li>Информирование о новых услугах и предложениях</li>
                      <li>Улучшение качества сервиса</li>
                      <li>Исполнение договорных обязательств</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      4. Правовые основания
                    </h2>
                    <p className="text-muted-foreground">
                      Обработка персональных данных осуществляется на основании
                      согласия субъекта персональных данных, а также в случаях,
                      предусмотренных законодательством РФ. При заполнении форм
                      на сайте вы даете согласие на обработку персональных
                      данных в соответствии с настоящей Политикой.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      5. Передача данных третьим лицам
                    </h2>
                    <p className="text-muted-foreground">
                      Мы не продаем, не обмениваем и не передаем ваши
                      персональные данные третьим лицам без вашего согласия,
                      кроме случаев, прямо предусмотренных настоящей Политикой
                      или требованиями законодательства РФ.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      6. Защита информации
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Мы применяем соответствующие меры безопасности для защиты
                      ваших персональных данных:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Шифрование данных при передаче (SSL)</li>
                      <li>Ограничение доступа к персональным данным</li>
                      <li>Регулярные резервные копии</li>
                      <li>Мониторинг безопасности</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">7. Ваши права</h2>
                    <p className="text-muted-foreground mb-4">
                      Вы имеете право:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Получать информацию об обработке ваших данных</li>
                      <li>
                        Требовать уточнения, изменения или удаления данных
                      </li>
                      <li>Отозвать согласие на обработку данных</li>
                      <li>Обратиться с жалобой в надзорный орган</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      8. Сроки хранения данных
                    </h2>
                    <p className="text-muted-foreground">
                      Персональные данные хранятся не дольше, чем это необходимо
                      для достижения целей обработки. Данные клиентов хранятся в
                      течение срока действия договора и 3 лет после его
                      окончания, если иное не предусмотрено законодательством.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      9. Изменения политики
                    </h2>
                    <p className="text-muted-foreground">
                      Мы оставляем за собой право изменять настоящую Политику
                      конфиденциальности. При внесении изменений дата последнего
                      обновления указывается в начале документа. Рекомендуем
                      периодически просматривать данную страницу.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      10. Контактная информация
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      ��о вопросам, связанным с обработкой персональных данных,
                      вы можете обращаться:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Email: info@it-mechta.ru</li>
                      <li>Телефон: +7 (495) 123-45-67</li>
                      <li>Telegram: @it_mechta_support</li>
                    </ul>
                  </div>

                  <div className="pt-6 border-t">
                    <p className="text-sm text-muted-foreground">
                      Последнее обновление: 15 января 2024 года
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
