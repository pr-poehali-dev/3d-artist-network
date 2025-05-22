import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Icon name="Cube" className="text-purple-600" size={32} />
            <span className="text-2xl font-bold text-gray-900">3DРоссия</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-purple-600 font-medium"
            >
              Модели
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-purple-600 font-medium"
            >
              Сообщество
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-purple-600 font-medium"
            >
              Обучение
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-purple-600 font-medium"
            >
              Форум
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-purple-600"
            >
              Войти
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Регистрация
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
