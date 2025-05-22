import React from "react";
import Icon from "@/components/ui/icon";

const Footer = () => {
  const footerSections = [
    {
      title: "Платформа",
      links: ["Модели", "Сообщество", "Конкурсы"],
    },
    {
      title: "Обучение",
      links: ["Курсы", "Туториалы", "Вебинары"],
    },
    {
      title: "Поддержка",
      links: ["Помощь", "Контакты", "О проекте"],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Box" className="text-purple-400" size={24} />
              <span className="text-xl font-bold">3DРоссия</span>
            </div>
            <p className="text-gray-400">
              Платформа для объединения русских 3D-модельеров
            </p>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2 text-gray-400">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 3DРоссия. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
