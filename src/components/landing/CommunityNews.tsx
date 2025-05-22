import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { NewsItem } from "@/types";

interface CommunityNewsProps {
  news: NewsItem[];
}

const CommunityNews = ({ news }: CommunityNewsProps) => {
  const handleNewsClick = (newsTitle: string) => {
    alert(`Читаем: "${newsTitle}". Полные статьи скоро в нашем сообществе!`);
  };

  const handleViewAllNews = () => {
    alert("Все новости будут доступны в разделе сообщества!");
  };

  return (
    <section id="community" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Новости сообщества
          </h2>
          <Button variant="outline" onClick={handleViewAllNews}>
            Все новости
            <Icon name="ArrowRight" className="ml-2" size={16} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((newsItem) => (
            <Card
              key={newsItem.id}
              className="hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => handleNewsClick(newsItem.title)}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{newsItem.category}</Badge>
                  <span className="text-sm text-gray-500">{newsItem.date}</span>
                </div>
                <CardTitle className="text-lg leading-tight">
                  {newsItem.title}
                </CardTitle>
                <CardDescription>От: {newsItem.author}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityNews;
