'use client';
import { ReactNode, useState } from 'react';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

export default function SeoTextBlock({
  title,
  description,
}: {
  title: ReactNode;
  description: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Section align="start" className="mb-[clamp(86px,6vw,124px)] gap-[clamp(24px,1.6vw,32px)]">
      <Typography className="text-left" variant="h2">
        {title}
      </Typography>
      <Typography
        asChild
        className={cn(
          'leading-[160%] transition-[max-height] duration-300',
          isOpen ? 'line-clamp-none' : 'line-clamp-4'
        )}
        variant="p2"
      >
        <div>{description}</div>
      </Typography>
      <Button onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? 'Скрыть' : 'Показать полностью'}
      </Button>
    </Section>
  );
}
