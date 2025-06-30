import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function DataProcessing() {
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
                Согласие на обработку персональных данных
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Информация о том, как мы обрабатываем ваши персональные данные в
                соответствии с законодательством РФ
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
                      Согласие субъекта персональных данных на обработку
                      персональных данных
                    </h2>
                    <p className="text-muted-foreground">
                      Я, субъект персональных данных, в соответствии с
                      Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных
                      данных» предоставляю IT-Мечта (далее - Оператор) согласие
                      на обработку персональных данных на следующих условиях:
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      1. Перечень персональных данных
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Согласие предоставляется на обработку следующих
                      персональных данных:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Фамилия, имя, отчество</li>
                      <li>Адрес электронной почты</li>
                      <li>Номер телефона</li>
                      <li>Наименование организации</li>
                      <li>Должность</li>
                      <li>Содержание обращений и сообщений</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      2. Цели обработки персональных данных
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Персональные данные обрабатываются в следующих целях:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Обработка обращений и предоставление консультаций</li>
                      <li>Заключение и исполнение договоров</li>
                      <li>
                        Предоставление информации об услугах и специальных
                        предложениях
                      </li>
                      <li>Проведение маркетинговых исследований</li>
                      <li>Улучшение качества услуг</li>
                      <li>Исполнение требований законодательства</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      3. Правовые основания обр��ботки
                    </h2>
                    <p className="text-muted-foreground">
                      Обработка персональных данных осуществляется на основании:
                      согласия субъекта персональных данных (статья 9 ФЗ-152),
                      необходимости исполнения договора (пункт 5 части 1 статьи
                      6 ФЗ-152), осуществления прав и законных интересов
                      оператора (пункт 6 части 1 статьи 6 ФЗ-152).
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      4. Способы обработки персональных данных
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Обработка персональных данных осуществляется следующими
                      способами:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Сбор, запис��, систематизация, накопление</li>
                      <li>Хранение, уточнение (обновление, изменение)</li>
                      <li>Извлечение, использование</li>
                      <li>
                        Передача (распространение, предоставление, доступ)
                      </li>
                      <li>
                        Обезличивание, блокирование, удаление, уничтожение
                      </li>
                    </ul>
                    <p className="text-muted-foreground mt-4">
                      Обработка персональных данных может осуществляться как с
                      использованием средств автоматизации, так и без их
                      использования.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      5. Передача персональных данных
                    </h2>
                    <p className="text-muted-foreground">
                      Оператор имеет право ��ередавать персональные данные
                      третьим лицам в следующих случаях: с согласия субъекта
                      персональных данных; для исполнения договорных
                      обязательств; контрагентам для оказания услуг (при условии
                      обеспечения конфиденциальности); в случаях,
                      предусмотренных законодательством РФ.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      6. Срок действия согласия
                    </h2>
                    <p className="text-muted-foreground">
                      Настоящее согласие действует с момента его предоставления
                      до момента отзыва. Согласие может быть отозвано субъектом
                      персональных данных в любое время путем направления
                      письменного уведомления Оператору по адресу:
                      info@it-mechta.ru
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      7. Права субъекта персональных данных
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Субъект персональных данных имеет право:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>
                        Получать информацию, касающуюся обработки персональных
                        данных
                      </li>
                      <li>
                        Требовать уточнения, блокирования или уничтожения
                        персональных данных
                      </li>
                      <li>
                        Отзывать согласие на обработку персональных данных
                      </li>
                      <li>
                        Обжаловать действия или бездействие Оператора в
                        надзорном органе
                      </li>
                      <li>
                        Защищать свои права и законные интересы в судебном
                        порядке
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      8. Меры по обеспечению безопасности
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Оператор принимает необходимые организационные и
                      технические меры для защиты персональных данных:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>
                        Назначение ответственного за организацию обработки
                        персональных данных
                      </li>
                      <li>
                        Применение средств защиты информации, сертифицированных
                        в РФ
                      </li>
                      <li>Ограничение состава лиц, имеющих доступ к данным</li>
                      <li>Проведение регулярной оценки уровня защищенности</li>
                      <li>Обучение сотрудников вопросам защиты данных</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      9. Автоматизированная обработка данных
                    </h2>
                    <p className="text-muted-foreground">
                      Субъект персональных данных согласен на автоматизированную
                      обработку персональных данных, включая принятие решений на
                      основе автоматизированной обработки, в целях повышения
                      качества предоставляемых услуг и персонализации
                      предложений.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      10. Контактная информация оператора
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Для обращений по вопросам обработки персональных данных:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Наименование: IT-Мечта</li>
                      <li>Адрес электронной почты: info@it-mechta.ru</li>
                      <li>Телефон: +7 (495) 123-45-67</li>
                      <li>Telegram: @it_mechta_support</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      11. Заключительные положения
                    </h2>
                    <p className="text-muted-foreground">
                      Заполняя формы на сайте или иным способом предоставляя
                      свои персональные данные Оператору, субъект персональных
                      данных подтверждает свое согласие с условиями настоящего
                      согласия. Настоящее согласие составлено в соответствии с
                      требованиями ФЗ-152 и действующего законодательства РФ.
                    </p>
                  </div>

                  <div className="pt-6 border-t">
                    <p className="text-sm text-muted-foreground">
                      Версия документа: 1.0 от 15 января 2024 года
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
