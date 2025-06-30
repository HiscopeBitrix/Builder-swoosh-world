import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function Terms() {
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
                Пользовательское соглашение
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Условия использования услуг IT-Мечта и правила взаимодействия с
                нашей компанией
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
                      Настоящее Пользовательское соглашение регулирует отношения
                      между IT-Мечта (далее - "Исполнитель") и пользователями
                      сайта (далее - "Заказчик") при оказании услуг по
                      разработке, внедрению и поддержке веб-решений на платформе
                      1С-Битрикс.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      2. Предмет соглашения
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Исполнитель обязуется оказать Заказчику следующие услуги:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>
                        Разработка корпоративных сайтов и интернет-магазинов на
                        1С-Битрикс
                      </li>
                      <li>Внедрение и настройка Bitrix24</li>
                      <li>Техническая поддержка и сопровождение проектов</li>
                      <li>Доработка и модернизация существующих решений</li>
                      <li>Консультации по использованию платформы</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      3. Порядок оказания услуг
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Оказание услуг осуществляется в следующем порядке:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>
                        Получение заявки от Заказчика через формы на сайте или
                        другими способами
                      </li>
                      <li>
                        Проведение предварительной консультации и анализа
                        требований
                      </li>
                      <li>
                        Подготовка технического задания и коммерческого
                        предложения
                      </li>
                      <li>Заключение договора на оказание услуг</li>
                      <li>Выполнение работ согласно утвержденному плану</li>
                      <li>Приемка результатов работы Заказчиком</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      4. Права и обязанности Исполнителя
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Исполнитель обязуется:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>
                        Выполнить работы качественно и в установленные сроки
                      </li>
                      <li>
                        Предоставить техническую поддержку в рамках договора
                      </li>
                      <li>
                        Обеспечить конфиденциальность информации Заказчика
                      </li>
                      <li>Уведомлять Заказчика о ходе выполнения работ</li>
                    </ul>
                    <p className="text-muted-foreground mt-4 mb-4">
                      Исполнитель имеет право:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>
                        Требовать от Заказчика предоставления необходимой
                        информации
                      </li>
                      <li>
                        Приостановить работы при нарушении Заказчиком условий
                        оплаты
                      </li>
                      <li>
                        Использовать реализованные решения в качестве примеров
                        работ
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      5. Права и обязанности Заказчика
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Заказчик обязуется:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>
                        Своевременно предоставлять необходимые материалы и
                        информацию
                      </li>
                      <li>
                        Производить оплату услуг в соответствии с договором
                      </li>
                      <li>
                        Участвовать в процедурах приемки выполненных работ
                      </li>
                      <li>
                        Не разглашать конфиденциальную информацию Исполнителя
                      </li>
                    </ul>
                    <p className="text-muted-foreground mt-4 mb-4">
                      Заказчик имеет право:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>
                        Получать консультации по использованию разработанных
                        решений
                      </li>
                      <li>
                        Требовать устранения недостатков в гарантийный период
                      </li>
                      <li>Получать техническую поддержку в рамках договора</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      6. Стоимость и порядок оплаты
                    </h2>
                    <p className="text-muted-foreground">
                      Стоимость услуг определяется индивидуально для каждого
                      проекта и указывается в коммерческом предложении. Оплата
                      производится в соответствии с условиями, указанными в
                      договоре. Возможны различные схемы оплаты: предоплата,
                      поэтапная оплата, оплата по факту выполнения работ.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      7. Гарантии и ответственность
                    </h2>
                    <p className="text-muted-foreground">
                      Исполнитель предоставляет гарантию на выполненные работы
                      сроком 12 месяцев с момента подписания акта приемки.
                      Гарантия распространяется на устранение дефектов,
                      возникших по вине Исполнителя. Гарантия не
                      распространяется на изменения, внесенные Заказчиком или
                      третьими лицами.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      8. Интеллектуальная собственность
                    </h2>
                    <p className="text-muted-foreground">
                      Права на результаты интеллектуальной деятельности,
                      созданные в ходе выполнения работ, передаются Заказчику в
                      соответствии с условиями договора. Исполнитель сохраняет
                      право использовать полученный опыт и неконфиденциальные
                      знания для оказания услуг другим клиентам.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      9. Конфиденциальность
                    </h2>
                    <p className="text-muted-foreground">
                      Стороны обязуются не разглашать конфиденциальную
                      информацию, ставшую известной в ходе сотрудничества.
                      Обязательства по соблюдению конфиденциальности действуют в
                      течение 3 лет после окончания сотрудничества.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      10. Разрешение споров
                    </h2>
                    <p className="text-muted-foreground">
                      Все споры и разногласия решаются путем переговоров. В
                      случае невозможности достижения соглашения спор передается
                      на рассмотрение в Арбитражный суд г. Москвы в соответствии
                      с действующим законодательством РФ.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      11. Заключительные положения
                    </h2>
                    <p className="text-muted-foreground">
                      Настоящее соглашение может быть изменено Исполнителем в
                      одностороннем порядке с уведомлением Заказчика. Изменения
                      вступают в силу через 10 дней после размещения новой
                      редакции на сайте. Если какое-либо положение соглашения
                      признается недействительным, остальные положения сохраняют
                      силу.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      12. Контактная информация
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Для связи с нами используйте следующие контакты:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Email: info@it-mechta.ru</li>
                      <li>Телефон: +7 (495) 123-45-67</li>
                      <li>Telegram: @it_mechta_support</li>
                    </ul>
                  </div>

                  <div className="pt-6 border-t">
                    <p className="text-sm text-muted-foreground">
                      Дата вступления в силу: 15 января 2024 года
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
