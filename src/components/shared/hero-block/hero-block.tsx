import Image from 'next/image';

import styles from './hero-block.module.css';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import HeroBlockTrack from './hero-block-track';
import { BreadcrumbWithCustomSeparator } from '../breadcrumb-custom';

type HeroBlockProps = {
  heading: string;
  description?: string;
};

export default function HeroBlock({ heading, description }: HeroBlockProps) {
  return (
    <Section className="relative bg-[url(/hero/bg-hero.png)]">
      <BreadcrumbWithCustomSeparator />
      <div className="flex-center relative">
        <Typography className="z-10" variant="h1">
          {heading}
        </Typography>
        <Image
          alt="sharp"
          className="xxs:block absolute -top-5 -left-10 z-20 hidden"
          height={124}
          src="hero/sharp.svg"
          width={109}
        />
        <Image
          alt="stars-group"
          className="xxs:block absolute -top-10 -right-10 z-20 hidden"
          height={128}
          src="hero/stars-group.svg"
          width={161}
        />

        <Image
          alt="arrow1"
          className="absolute bottom-0 left-0 z-20"
          height={231}
          src="/hero/arrow-right.svg"
          width={304}
        />
        {/* <Image
          className="rigth-0 absolute right-0 bottom-0 z-20"
          src="/hero/arrow-left-start.svg"
          width={154}
          height={223}
          alt="arrow2-start"
        />
        <Image
          className="absolute right-0 bottom-0 z-0"
          src="/hero/arrow-left-end.svg"  
          width={168}
          height={237}
          alt="arrow2-end"
        /> */}
      </div>
      {description && <Typography variant="p1">{description}</Typography>}
      <div className="xxs:flex-row xxs:gap-5 mt-[48px] flex flex-col gap-[14px]">
        <Button variant="secondary">Консультация 1С</Button>
        <Button variant="gray">Наши кейсы</Button>
      </div>
      <div className="bg-secondary xxs:h-[60px] text-foreground2 font-family xxs:text-[20px] absolute bottom-0 flex h-[42px] w-full items-center overflow-hidden text-[14px] font-bold whitespace-nowrap uppercase">
        <div className={cn(styles.marqueeTrack, 'flex w-max')}>
          <HeroBlockTrack />
          <HeroBlockTrack />
        </div>
      </div>
    </Section>
  );
}
