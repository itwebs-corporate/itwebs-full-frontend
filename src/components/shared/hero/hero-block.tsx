import Image from 'next/image';
import { ReactNode, Suspense } from 'react';

import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import HeroBlockTrack from './hero-block-track';
import HeroHeading from './hero-heading';
import { BreadcrumbWithCustomSeparator } from '../breadcrumb-custom';

type HeroBlockProps = {
  heading: ReactNode;
  description?: ReactNode;
  pathname?: string;
  fullScreen?: boolean;
  lastBreadcrumb?: string;
  categoryBreadcrumb?: {
    label: string;
    href: string;
  };
  disabledAssets?: boolean;
  isNotFound?: boolean;
  children?: ReactNode;
};

export default function HeroBlock({
  heading,
  description,
  pathname = '/default',
  fullScreen = false,
  lastBreadcrumb,
  categoryBreadcrumb,
  disabledAssets = false,
  isNotFound = false,
  children,
}: HeroBlockProps) {
  const isHomePage = pathname === '/';
  const isServicesLink = pathname.startsWith('/services');

  return (
    <Section
      className="relative pt-[calc(150px+env(safe-area-inset-top))] pb-[clamp(175px,10vw,208px)]"
      fullScreen={fullScreen}
    >
      <div className="absolute inset-0 -z-10">
        <Image
          alt=""
          className="object-cover"
          fetchPriority="high"
          fill
          loading="eager"
          priority
          sizes="100vw"
          src="/hero/bg-hero.png"
        />
      </div>
      <Suspense fallback={null}>
        <BreadcrumbWithCustomSeparator
          categoryBreadcrumb={categoryBreadcrumb}
          isNotFound={isNotFound}
          lastBreadcrumb={lastBreadcrumb}
        />
      </Suspense>
      <HeroHeading
        assetsPreset={pathname}
        disabled={disabledAssets}
        isHomePage={isHomePage}
        isServicesLink={isServicesLink}
      >
        {heading}
      </HeroHeading>
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
        <div className="marquee-track-hero flex w-max">
          <HeroBlockTrack />
          <HeroBlockTrack />
          <HeroBlockTrack />
        </div>
      </div>
    </Section>
  );
}
