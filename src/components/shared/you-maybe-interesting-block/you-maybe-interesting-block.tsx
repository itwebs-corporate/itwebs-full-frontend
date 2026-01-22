'use client';

import BlogCard from '@/components/shared/blog-block/blog-card';
import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import { BLOG_CONFIG } from '../blog-block/blog-config';

export default function YouMaybeInterestingBlock() {
  // TODO: смотреть ClienWrapper

  return (
    <Section className="gap-[24px] pb-[clamp(86px,10vw,148px)] sm:gap-[36px]">
      <Typography variant="h2">
        <b className="text-primary">Вам</b> может быть интересно
      </Typography>
      {/* TODO: на мобилке появляется карусель для двух карточек*/}
      <ul className="flex flex-row gap-[4px] sm:gap-[20px]">
        {BLOG_CONFIG.slice(0, 2).map((item) => (
          <BlogCard card={item} key={item.id} />
        ))}
      </ul>
    </Section>
  );
}
