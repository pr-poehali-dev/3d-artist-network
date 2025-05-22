import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const popularModels = [
    {
      id: 1,
      title: "Космический корабль",
      author: "Александр К.",
      downloads: 1240,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Средневековый замок",
      author: "Мария С.",
      downloads: 856,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1520637836862-4d197d17c80a?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Современная мебель",
      author: "Дмитрий П.",
      downloads: 632,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
    },
  ];

  const communityNews = [
    {
      id: 1,
      title: "Новый конкурс: Создай модель будущего",
      date: "2 дня назад",
      author: "Администрация",
      category: "Конкурс",
    },
    {
      id: 2,
      title: "Вебинар: Продвинутые техники моделирования",
      date: "5 дней назад",
      author: "Иван Модельер",
      category: "Обучение",
    },
    {
      id: 3,
      title: "Обновление: Новые форматы загрузки моделей",
      date: "1 неделя назад",
      author: "Техподдержка",
      category: "Новости",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Навигация */}
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

      {/* Hero секция */}
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
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Активное сообщество
              </h3>
              <p className="text-gray-600">
                Более 2000 дизайнеров уже участвуют в обсуждениях
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="BookOpen" className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Обучение на русском
              </h3>
              <p className="text-gray-600">
                Курсы и материалы от ведущих экспертов
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Download" className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Обмен моделями</h3>
              <p className="text-gray-600">
                Загружайте и скачивайте качественные 3D-модели
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Популярные модели */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Популярные модели
            </h2>
            <Button variant="outline">
              Посмотреть все
              <Icon name="ArrowRight" className="ml-2" size={16} />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularModels.map((model) => (
              <Card
                key={model.id}
                className="hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                  <img
                    src={model.image}
                    alt={model.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{model.title}</CardTitle>
                  <CardDescription>Автор: {model.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Icon
                          name="Download"
                          size={16}
                          className="text-gray-500 mr-1"
                        />
                        <span className="text-sm text-gray-600">
                          {model.downloads}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Icon
                          name="Star"
                          size={16}
                          className="text-yellow-500 mr-1"
                        />
                        <span className="text-sm text-gray-600">
                          {model.rating}
                        </span>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost">
                      <Icon name="Heart" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Новости сообщества */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Новости сообщества
            </h2>
            <Button variant="outline">
              Все новости
              <Icon name="ArrowRight" className="ml-2" size={16} />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {communityNews.map((news) => (
              <Card
                key={news.id}
                className="hover:shadow-md transition-shadow cursor-pointer"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{news.category}</Badge>
                    <span className="text-sm text-gray-500">{news.date}</span>
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {news.title}
                  </CardTitle>
                  <CardDescription>От: {news.author}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Готовы присоединиться к сообществу?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Начните делиться своими работами, изучайте новые техники и находите
            единомышленников
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-3"
            >
              Создать аккаунт бесплатно
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-3"
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Cube" className="text-purple-400" size={24} />
                <span className="text-xl font-bold">3DРоссия</span>
              </div>
              <p className="text-gray-400">
                Платформа для объединения русских 3D-модельеров
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Платформа</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Модели
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Сообщество
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Конкурсы
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Обучение</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Курсы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Туториалы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Вебинары
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Помощь
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    О проекте
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 3DРоссия. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
