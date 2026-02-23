'use client';

import { useArticleParse } from '@/hooks/use-article-parse';

import Typography from '@/components/ui/typography/typography';

import { inter } from '@/shared/fonts';

export default function ArticleAside({ html }: { html: string }) {
  const { sections } = useArticleParse(html);
  if (sections.length < 1) return null;
  return (
    <aside className="z-20 mt-[24px] w-[332px] rounded-[20px] bg-white px-[clamp(18px,2.5vw,24px)] pt-[20px] pb-[clamp(20px,2vw,24px)] sm:sticky sm:top-[120px] sm:mt-0 sm:w-[284px]">
      <Typography variant="h4">Разделы</Typography>

      <ul
        className={`mt-[16px] flex w-full flex-col gap-[clamp(16px,2vw,18px)] ${inter.className}`}
      >
        {sections.map((s, index) => (
          <li
            className="text-foreground2/50 hover:text-foreground2/80 text-[14px] transition-all"
            key={s.id}
          >
            <a className="line-clamp-1! flex" href={`#${s.id}`}>
              {index + 1}. {s.title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
