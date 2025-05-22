import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAuth = (action: "login" | "register") => {
    alert(
      `${action === "login" ? "Вход" : "Регистрация"} в разработке! Следите за обновлениями в нашем Telegram: https://t.me/+QgiLIa1gFRY4Y2Iy`,
    );
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <Icon name="Box" className="text-purple-600" size={32} />
            <span className="text-2xl font-bold text-gray-900">3DРоссия</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("models")}
              className={`text-gray-700 hover:text-purple-600 font-medium transition-colors ${activeSection === "models" ? "text-purple-600" : ""}`}
            >
              Модели
            </button>
            <button
              onClick={() => scrollToSection("community")}
              className={`text-gray-700 hover:text-purple-600 font-medium transition-colors ${activeSection === "community" ? "text-purple-600" : ""}`}
            >
              Сообщество
            </button>
            <button
              onClick={() => alert("Обучение скоро появится!")}
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              Обучение
            </button>
            <button
              onClick={() => alert("Форум в разработке!")}
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              Форум
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-purple-600"
              onClick={() => handleAuth("login")}
            >
              Войти
            </Button>
            <Button
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() => handleAuth("register")}
            >
              Регистрация
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
