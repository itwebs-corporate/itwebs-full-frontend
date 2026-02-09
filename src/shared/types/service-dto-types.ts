export type Service = {
  id: number;
  name: string;
  description: string;
  task: string;
  decision: string;
  image: string;
};

export type ServiceFaq = {
  id: number;
  question: string;
  answer: string;
};

export type ServiceWay = {
  id: number;
  iconName: string;
  name: string;
  description: string;
};

export type ServiceDto = {
  id: number;
  name: string;
  h1: string;
  h2: string;
  link: string;
  price: string;
  metaTitle: string;
  metaDescription: string;
  decisions: string[];
  ways: ServiceWay[];
  faqs: ServiceFaq[];
};
