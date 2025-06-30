import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle, X } from "lucide-react";

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  buttonText?: string;
}

const FormModal = ({
  isOpen,
  onClose,
  title,
  buttonText = "Отправить заявку",
}: FormModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Имитация отправки формы
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);

    // Автоматически закрыть через 3 секунды
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{title}</DialogTitle>
        </DialogHeader>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="modal-name">Имя *</Label>
                <Input
                  id="modal-name"
                  placeholder="Ваше имя"
                  required
                  className="bg-input border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="modal-company">Компания</Label>
                <Input
                  id="modal-company"
                  placeholder="Название компании"
                  className="bg-input border-border"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="modal-email">Email *</Label>
                <Input
                  id="modal-email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="bg-input border-border"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="modal-phone">Телефон *</Label>
                <Input
                  id="modal-phone"
                  placeholder="+7 (___) ___-__-__"
                  required
                  className="bg-input border-border"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="modal-service">Интересующая услуга</Label>
              <select className="flex h-10 w-full rounded-md border border-border bg-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                <option value="">Выберите услугу</option>
                <option value="bitrix-development">
                  Разработка на 1С-Битрикс
                </option>
                <option value="bitrix24">Внедрение Bitrix24</option>
                <option value="support">Техническая поддержка</option>
                <option value="upgrade">Доработка сайта</option>
                <option value="consultation">Консультация</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="modal-message">Сообщение</Label>
              <Textarea
                id="modal-message"
                placeholder="Расскажите подробнее о вашем проекте..."
                rows={4}
                className="bg-input border-border"
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? "Отправляем..." : buttonText}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </form>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Заявка отправлена!
              </h3>
              <p className="text-muted-foreground mt-2">
                Спасибо за обращение. Мы свяжемся с вами в течение 30 минут.
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default FormModal;
