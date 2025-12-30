import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes, ReactNode } from 'react';

import { pageBlockVariants } from './page-block-config';

type PageBlockVariantsProps = VariantProps<typeof pageBlockVariants>;

export type PageBlockProps = {
  tag?: 'section' | 'div' | 'main';
  children: ReactNode;
  className?: string;
} & PageBlockVariantsProps &
  HTMLAttributes<HTMLElement>;
