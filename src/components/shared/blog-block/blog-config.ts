export type BlogCard = {
  id: string;
  title: string;
  description: string;
  href?: string;
  image?: {
    src: string;
    alt: string;
  };
};

const BASE_TITLE = 'программирование\nсистемы 1с бухгалтерия';
const BASE_DESCRIPTION =
  'Когда на вас и учёт, и отчётность, и вопросы руководства. Мы берём 1С на себя, чтобы вы успевали главное.';

export const BLOG_CONFIG: BlogCard[] = Array.from({ length: 30 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');

  return {
    id: `1c-${n}`,
    title: BASE_TITLE,
    description: BASE_DESCRIPTION,
    href: `/services/1c/programming-${n}`,
    image: { src: '/default/card-rect.png', alt: 'preview' },
  };
});
