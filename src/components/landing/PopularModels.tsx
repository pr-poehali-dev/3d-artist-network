import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Model } from "@/types";

interface PopularModelsProps {
  models: Model[];
}

const PopularModels = ({ models }: PopularModelsProps) => {
  const [likedModels, setLikedModels] = useState<Set<number>>(new Set());

  const handleLike = (modelId: number) => {
    setLikedModels((prev) => {
      const newLiked = new Set(prev);
      if (newLiked.has(modelId)) {
        newLiked.delete(modelId);
      } else {
        newLiked.add(modelId);
      }
      return newLiked;
    });
  };

  const handleDownload = (modelTitle: string) => {
    alert(`Скачивание "${modelTitle}" начнется после регистрации!`);
  };

  const handleViewAll = () => {
    document
      .getElementById("community")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="models" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Популярные модели
          </h2>
          <Button variant="outline" onClick={handleViewAll}>
            Посмотреть все
            <Icon name="ArrowRight" className="ml-2" size={16} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model) => (
            <Card
              key={model.id}
              className="hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleDownload(model.title)}
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
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLike(model.id);
                    }}
                    className={likedModels.has(model.id) ? "text-red-500" : ""}
                  >
                    <Icon
                      name={likedModels.has(model.id) ? "Heart" : "Heart"}
                      size={16}
                    />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularModels;
