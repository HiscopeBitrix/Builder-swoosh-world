import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import FormModal from "./FormModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "1С Bitrix", href: "/services/bitrix" },
    { name: "Bitrix 24", href: "/services/bitrix24" },
    { name: "О компании", href: "/about" },
    { name: "Контакты", href: "/contacts" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Layout */}
          <div className="hidden md:flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="font-bold text-xl text-foreground">
                IT-Мечта
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary flex items-center space-x-2 ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name === "1С Bitrix" ? (
                    <>
                      <div
                        className="w-6 h-6 rounded flex items-center justify-center"
                        style={{ backgroundColor: "#d91935" }}
                      >
                        <span className="text-white font-bold text-xs">1C</span>
                      </div>
                      <span>1С Bitrix</span>
                    </>
                  ) : item.name === "Bitrix 24" ? (
                    <>
                      <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded flex items-center justify-center">
                        <span className="text-white font-bold text-xs">24</span>
                      </div>
                      <span>Bitrix 24</span>
                    </>
                  ) : (
                    <span>{item.name}</span>
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <Button onClick={() => setIsModalOpen(true)}>
              Заказать звонок
            </Button>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex h-16 items-center justify-between">
            {/* Mobile menu button - Left */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>

            {/* Logo - Center */}
            <Link to="/" className="flex items-center">
              <span className="font-bold text-xl text-foreground">
                IT-Мечта
              </span>
            </Link>

            {/* Call button - Right */}
            <Button
              variant="ghost"
              size="sm"
              className="p-2"
              onClick={() => setIsModalOpen(true)}
            >
              <Phone className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 border-t">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                      isActive(item.href)
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-3 py-2">
                  <Button
                    className="w-full"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Заказать звонок
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <FormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Заказать звонок"
        buttonText="Заказать звонок"
      />
    </>
  );
};

export default Header;
