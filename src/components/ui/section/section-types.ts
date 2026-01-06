import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes, ReactNode } from 'react';

import { SectionVariants } from './section-config';

type SectionVariantsProps = VariantProps<typeof SectionVariants>;

export type SectionProps = {
  tag?: 'section' | 'div' | 'main';
  children: ReactNode;
  className?: string;
} & SectionVariantsProps &
  HTMLAttributes<HTMLElement>;
