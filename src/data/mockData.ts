import { Model, NewsItem } from "@/types";

export const popularModels: Model[] = [
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

export const communityNews: NewsItem[] = [
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
