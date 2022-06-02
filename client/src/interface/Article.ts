export interface Article {
  slug: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  userEmail: string;
  Tags: string[];
  comments_count: number;
  like_count: number;
}

export interface RootObject {
  total: number;
  articles: Article[];
  limit: number;
  offset: number;
}
