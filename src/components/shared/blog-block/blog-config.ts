export type BlogCard = {
  id: string;
  title: string;
  textArticle: string;
  subTitle: string;
  textSubArticle: string;
  description: string;
  stageWork: string;
  textStageWork: string;
  textStageWorkSecond: string;
  href?: string;
  image?: {
    src: string;
    alt: string;
  };
  imageArticle: { src: string; alt: string };
  imageArticleSection: { src: string; alt: string };
  imageArticleStageWork: { src: string; alt: string };
};

const BASE_TITLE = 'программирование\nсистемы 1с бухгалтерия';
const TEXT_ARTICLE =
  "lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
const BASE_SUB_TITLE = 'Подзаголовок';
const TEXT_SUBTITLE =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
const BASE_DESCRIPTION =
  'Когда на вас и учёт, и отчётность, и вопросы руководства. Мы берём 1С на себя, чтобы вы успевали главное.';
const BASE_STAGE_WORK = 'Заголовок этапа работы';
const TEXT_STAGE_WORK =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
const TEXT_STAGE_WORK_SECOND =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";

export const BLOG_CONFIG: BlogCard[] = Array.from({ length: 30 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');

  return {
    id: `1c-${n}`,
    title: `${BASE_TITLE}-${n}`,
    textArticle: TEXT_ARTICLE,
    subTitle: BASE_SUB_TITLE,
    textSubArticle: TEXT_SUBTITLE,
    stageWork: BASE_STAGE_WORK,
    textStageWork: TEXT_STAGE_WORK,
    textStageWorkSecond: TEXT_STAGE_WORK_SECOND,
    description: BASE_DESCRIPTION,
    href: `/blog/programming-${n}`,
    image: { src: '/default/card-rect.png', alt: 'preview' },
    imageArticle: { src: '/default/card-article.png', alt: 'article-preview' },
    imageArticleSection: { src: '/default/article-section.png', alt: 'article-preview' },
    imageArticleStageWork: { src: '/default/article-stage-work.png', alt: 'article-preview' },
  };
});
