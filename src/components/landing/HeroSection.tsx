import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  const features = [
    {
      icon: "Users",
      title: "Активное сообщество",
      description: "Более 2000 дизайнеров уже участвуют в обсуждениях",
    },
    {
      icon: "BookOpen",
      title: "Обучение на русском",
      description: "Курсы и материалы от ведущих экспертов",
    },
    {
      icon: "Download",
      title: "Обмен моделями",
      description: "Загружайте и скачивайте качественные 3D-модели",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Платформа для{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
            русских 3D-модельеров
          </span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Объединяем талантливых дизайнеров, создаём сообщество для обмена
          опытом, обучения и совместного творчества в мире 3D-моделирования
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3"
          >
            <Icon name="RocketIcon" className="mr-2" size={20} />
            Присоединиться к сообществу
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-3">
            <Icon name="Play" className="mr-2" size={20} />
            Посмотреть демо
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon
                  name={feature.icon}
                  className="text-purple-600"
                  size={32}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
