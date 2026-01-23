import { RefObject, useMemo } from 'react';

import Typography from '@/components/ui/typography/typography';

import { BlogCard } from '../blog-block/blog-config';

type SectionId = 'title' | 'subtitle' | 'stage1' | 'stage2';
export default function ArticleAside({
  article,
  sectionRefs,
}: {
  article: BlogCard;
  sectionRefs: RefObject<Record<SectionId, HTMLElement | null>>;
}) {
  const sections = useMemo(
    () =>
      [
        { id: 'title', title: article.title },
        { id: 'subtitle', title: article.subTitle },
        { id: 'stage1', title: article.stageWork },
        { id: 'stage2', title: 'Этапы работы 2' },
      ] as const,
    [article.title, article.subTitle, article.stageWork]
  );

  const scrollToElement = (id: SectionId) => {
    const el = sectionRefs.current[id];
    if (!el) return;

    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  return (
    <aside className="z-20 mt-[24px] w-[332px] rounded-[20px] bg-white px-[clamp(18px,2.5vw,24px)] pt-[20px] pb-[clamp(20px,2vw,24px)] sm:fixed sm:top-[11.5vw] sm:left-1/2 sm:mt-0 sm:w-[284px] sm:translate-x-[calc(445px+24px)]">
      <Typography variant="h4">Разделы</Typography>

      <ul className="mt-[16px] flex w-full flex-col gap-[clamp(16px,2vw,18px)]">
        {sections.map((s, index) => (
          <li
            className="text-foreground2/50 hover:text-foreground2/80 flex cursor-pointer text-[14px] transition-all"
            key={s.id}
            onClick={() => scrollToElement(s.id)}
          >
            {index + 1}. {s.title}
          </li>
        ))}
      </ul>
    </aside>
  );
}
