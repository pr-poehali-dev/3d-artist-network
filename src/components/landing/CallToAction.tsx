import React from "react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
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
  );
};

export default CallToAction;
