import Link from 'next/link';

import styles from './footer.module.css';

import { cn } from '@/lib/utils';

import Form from '@/components/ui/form';
import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import { PAGES_CONFIG } from '@/config/pages-config';

import FooterTrack from './footer-track';

export default function Footer() {
  return (
    <Section
      className="bg-foreground3 mt-[clamp(86px,6vw,124px)] flex flex-col rounded-t-[24px]"
      fullScreen={false}
    >
      <Typography className="mt-[86px] text-[clamp(24px,2vw,48px)]" variant="h1">
        Берём IT-задачи на себя — понятно и надёжно
      </Typography>
      {/* form */}
      <Form />
      <div className="font-second-family my-[clamp(32px,3vw,48px)] flex max-w-[1194px] flex-col items-center gap-[12px] text-[clamp(14px,1.2vw,16px)] leading-[140%] font-bold lg:w-full lg:flex-row lg:justify-between">
        <Link
          className="hover:text-foreground/70 text-center transition-colors"
          href={PAGES_CONFIG.POLICY}
        >
          Политика обработки персональных данных
        </Link>
        <span className="opacity-50">Copyright ©2025 ITEWBS</span>
      </div>
      {/* track */}
      <div className="xxs:flex mt-auto hidden h-[124px] w-dvw items-center overflow-hidden whitespace-nowrap opacity-10">
        <div className={cn(styles.marqueeTrack, 'flex w-max')}>
          <FooterTrack />
          <FooterTrack />
        </div>
      </div>
    </Section>
  );
}
