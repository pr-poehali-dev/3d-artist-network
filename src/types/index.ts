export interface Model {
  id: number;
  title: string;
  author: string;
  downloads: number;
  rating: number;
  image: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  author: string;
  category: string;
}
