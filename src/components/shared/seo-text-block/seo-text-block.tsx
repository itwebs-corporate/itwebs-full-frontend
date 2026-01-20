'use client';
import { useState } from 'react';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

export default function SeoTextBlock() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Section align="start" className="mb-[clamp(86px,6vw,124px)] gap-[clamp(24px,1.6vw,32px)]">
      <Typography variant="h2">
        <b className="text-primary">СЕО</b> текст
      </Typography>
      <Typography
        className={cn(
          'leading-[160%] transition-[max-height] duration-300',
          isOpen ? 'line-clamp-none' : 'line-clamp-4'
        )}
        variant="p2"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
        an unknown printer took a galley of type and scrambled it to make a type specimen book. It
        has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
        software like Aldus PageMaker including versions of Lorem Ipsum.
      </Typography>
      <Button onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? 'Скрыть' : 'Показать полностью'}
      </Button>
    </Section>
  );
}
