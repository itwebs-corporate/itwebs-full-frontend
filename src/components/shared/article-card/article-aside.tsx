'use client';
import { RefObject, useMemo } from 'react';

import Typography from '@/components/ui/typography/typography';

import { BlogPostDto } from '@/shared/types/post-dto-types';

type SectionId = 'title' | 'subtitle' | 'stage1' | 'stage2';

export default function ArticleAside({
  article,
  sectionRefs,
}: {
  article: BlogPostDto;
  sectionRefs: RefObject<Record<SectionId, HTMLElement | null>>;
}) {
  const sections = useMemo(
    () =>
      [
        { id: 'title', title: article.name },
        { id: 'subtitle', title: article.content },
        { id: 'stage1', title: article.services },
        { id: 'stage2', title: 'Этапы работы 2' },
      ] as const,
    [article]
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
    <aside className="z-20 mt-[24px] w-[332px] rounded-[20px] bg-white px-[clamp(18px,2.5vw,24px)] pt-[20px] pb-[clamp(20px,2vw,24px)] sm:sticky sm:top-[120px] sm:mt-0 sm:w-[284px]">
      <Typography variant="h4">Разделы</Typography>

      <ul className="mt-[16px] flex w-full flex-col gap-[clamp(16px,2vw,18px)]">
        {sections.map((s, index) => (
          <li
            className="text-foreground2/50 hover:text-foreground2/80 flex cursor-pointer text-[14px] transition-all"
            key={s.id}
            onClick={() => scrollToElement(s.id)}
          >
            {index + 1}.{/* {s.title} */}
          </li>
        ))}
      </ul>
    </aside>
  );
}
