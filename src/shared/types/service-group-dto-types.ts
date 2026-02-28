type ServiceWayDto = {
  id: number;
  iconName: string;
  name: string;
  description: string;
};
type ServiceFaqDto = {
  id: number;
  question: string;
  answer: string;
};

export type ServiceGroupDto = {
  id: number;
  name: string;
  headerName: string;
  listImage: string;
  listDesc: string;
  detailImage: string;
  h1: string;
  h2: string;
  link: string;
  ways: ServiceWayDto[];
  decisions: string[];
  faqs: ServiceFaqDto[];
  metaTitle: string;
  metaDescription: string;
  price: number;
};
