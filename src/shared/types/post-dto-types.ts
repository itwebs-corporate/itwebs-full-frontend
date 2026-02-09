export type Post = {
  id: string;
  name: string;
  description: string;
  image: string;
  link: string;
};

export type BlogPostServiceDto = {
  link: string;
  image: string;
  name: string;
  description: string;
};

export type BlogPostFaqDto = {
  id: number;
  question: string;
  answer: string;
};

export type BlogPostSimilarDto = {
  title: string;
  description: string;
  link: string;
  image: string;
};

export type BlogPostDto = {
  id: number;
  name: string;
  description: string;
  content: string;
  services: BlogPostServiceDto[];
  faqs: BlogPostFaqDto[];
  metaTitle: string;
  metaDescription: string;
  similar: BlogPostSimilarDto[];
};
