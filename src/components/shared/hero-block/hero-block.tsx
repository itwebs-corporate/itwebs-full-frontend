import Image from 'next/image';
import { ReactNode } from 'react';

import styles from './hero-block.module.css';

import { cn } from '@/lib/utils';

import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import HeroBlockTrack from './hero-block-track';
import HeroHeading from './hero-heading';
import { BreadcrumbWithCustomSeparator } from '../breadcrumb-custom';

type HeroBlockProps = {
  heading: ReactNode;
  description?: string;
  fullScreen?: boolean;
  lastBreadcrumb?: string;
  disabledAssets?: boolean;
  isNotFound?: boolean;
  children?: ReactNode;
};

export default function HeroBlock({
  heading,
  description,
  fullScreen = false,
  lastBreadcrumb,
  disabledAssets = false,
  isNotFound = false,
  children,
}: HeroBlockProps) {
  return (
    <Section className="relative pt-[150px] pb-[clamp(115px,10vw,208px)]" fullScreen={fullScreen}>
      <div className="absolute inset-0 -z-10">
        <Image alt="" className="object-cover" fill preload sizes="100vw" src="/hero/bg-hero.png" />
      </div>
      <BreadcrumbWithCustomSeparator isNotFound={isNotFound} lastBreadcrumb={lastBreadcrumb} />
      <HeroHeading disabled={disabledAssets}>{heading}</HeroHeading>
      {description && (
        <Typography className="pt-[clamp(14px,5vw,36px)]" variant="p1">
          {description}
        </Typography>
      )}
      {children && (
        <div className="mt-[clamp(32px,3vw,48px)] flex flex-col gap-[clamp(14px,1.6vw,20px)] sm:flex-row">
          {children}
        </div>
      )}
      <div className="bg-secondary text-foreground2 font-family absolute bottom-0 flex h-[clamp(42px,5vw,60px)] w-full items-center overflow-hidden text-[clamp(14px,1.6vw,20px)] font-bold whitespace-nowrap uppercase">
        <div className={cn(styles.marqueeTrack, 'flex w-max')}>
          <HeroBlockTrack />
          <HeroBlockTrack />
        </div>
      </div>
    </Section>
  );
}
